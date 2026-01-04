/*
 *  Powerblocks
 *  (c) 2016 Danijel Durakovic
 * 
 *  http://pulzed.com
 * 
 */

var Powerblocks = (function() {

// common functions
function iter(collection, callback) {
	for (var key in collection) {
		var item = collection[key];
		if (collection.hasOwnProperty(key)
			&& !(item instanceof Function))
			callback(key, item);
	}
}

function pointInRect(x, y, rx, ry, rw, rh) {
	return (x >= rx && x < rx + rw && y >= ry && y < ry + rh);
}

function getRandInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(list) {
	if (!(list instanceof Array))
		return;
	var i = list.length;
	while (i--) {
		var r = Math.floor(Math.random() * (i + 1));
		var tmp = list[r];
		list[r] = list[i];
		list[i] = tmp;
	}
}

// assets module
var Assets = (function() {
	var loadedAssets = {};
	var formats = {
		image: ['png', 'jpg', 'jpeg'],
		data: ['json'],
		audio: ['ogg', 'mp3', 'aac', 'wav']
	};
	// retreive a filename's extension
	function getExt(filename) {
		return filename.split('.').pop().toLowerCase();
	};

	return {
		load: function(assetList, completed, progress) {
			var itemsLoaded = 0;
			var itemsToLoad = 0;
			function advance() {
				itemsLoaded++;
				if (progress instanceof Function)
					progress(itemsLoaded, itemsToLoad);
				if (itemsLoaded === itemsToLoad && completed instanceof Function)
					completed();
			}
			iter(assetList, function(key, asset) {
				itemsToLoad++;
			});
			iter(assetList, function(key, asset) {
				if (asset instanceof Array) {
					var filenames = [];
					for (var i = 0; i < asset.length; i++) {
						var audioItem = asset[i];
						var ext = getExt(audioItem);
						if (formats.audio.indexOf(ext) > -1)
							filenames.push(audioItem);
					}
					loadedAssets[key] = new Howl({
						urls: filenames,
						autoplay: false,
						loop: false,
						volume: 1,
						onload: advance,
						onloaderror: advance
					});
				}
				else {
					var ext = getExt(asset);
					if (formats.image.indexOf(ext) > -1) {
						var loadImage = loadedAssets[key] = new Image();
						loadImage.src = asset;
						loadImage.addEventListener('load', advance, false);
					}
					else if (formats.data.indexOf(ext) > -1) {
						var xhr = new XMLHttpRequest();
						xhr.open('get', asset, true);
						xhr.send(null);
						xhr.onreadystatechange = function() {
							if (xhr.readyState === 4) {
								if (xhr.status === 200) {
									var data;
									var response = xhr.responseText;
									try { // assume JSON by default
										data = JSON.parse(response);
									} catch(e) { // default to text
										data = response;
									} finally {
										loadedAssets[key] = data;
										advance();
									}
								}
								else if (xhr.status === 404) {
									if (notfound instanceof Function)
										notfound();
								}
							}
						};
					}
				}
			});
		},
		get: function(key) {
			return loadedAssets[key];
		},
		acquire: function(object, assetList) {
			// inflate object with assets
			var nassets = assetList.length;
			for (var i = 0; i < nassets; i++) {
				var assetKey = assetList[i];
				var item = assetKey.split('_')[1];
				object[item] = loadedAssets[assetKey];
			}
		}
	};
}());

// transition class
function Transition(start, end, duration, update, finished, easing) {
	// ensure positive, non-zero duration
	if (duration <= 0)
		return;
	// default easing
	if (easing === undefined)
		easing = 'linear';
	// select direction
	var dir = false;
	if (start >= end) {
		var tmp = start;
		start = end;
		end = tmp;
		dir = true;
	}
	// calculate offset and prepare values so we can interpret them
	var offset = 0;
	offset = Math.min(start, end);
	end = Math.abs(start - end);
	start = 0;
	// select easing function
	var easingf = function() {
		switch (easing) {
			case 'linear':
				return function(elapsed) {
					return start + (end - start) * (elapsed / duration);
				};
			case 'quadin':
				return function(elapsed) {
					return end * (elapsed /= duration) * elapsed + start;
				};
			case 'quadout':
				return function(elapsed) {
					return -end * (elapsed /= duration) * (elapsed - 2) + start;
				};
		}
	}();
	// timeframe constant	
	var delay = 5;
	// transition timeout
	var ttr = null;
	// perform transition
	function doTransition(elapsed) {
		var progress = elapsed / duration;
		var value = Math.floor(easingf(elapsed));
		if (update instanceof Function) {
			var rval = ((dir) ? (end - value) : value) + offset;
			update(rval);
		}
		if (progress < 1) {
			ttr = setTimeout(function() {
				doTransition(elapsed + delay);
			}, delay);
		}
		else if (finished instanceof Function) {
			finished();
			ttr = null;
		}
	}
	// stop transition
	this.stop = function() {
		clearTimeout(ttr);
		ttr = null;
	};
	// start transition
	this.start = function() {
		if (ttr === null)
			doTransition(0);
	};
	// restart transition
	this.restart = function() {
		if (ttr === null) {
			clearTimeout(ttr);
			ttr = null;
		}
		doTransition(0);
	};
	// fetch transition state	
	this.isActive = function() {
		return (ttr !== null);
	};
}

// render class
function Render(ctx) {
	// alpha handling
	this.setAlpha = function(alpha) {
		if (alpha === undefined)
			alpha = 1.0;
		else
			alpha = Math.min(1, Math.max(0, alpha));
		ctx.globalAlpha = alpha;
	};
	this.useAlpha = function(alpha, drawcalls) {
		this.setAlpha(alpha);
		drawcalls();
		this.setAlpha();
	};
	// rotate around a point
	this.rotate = function(angle, point, callback) {
		ctx.save();
		ctx.translate(point[0], point[1]);
		ctx.rotate(angle * Math.PI / 180);
		ctx.translate(-point[0], -point[1]);
		callback();
		ctx.restore();
	};
	// primitives
	this.rectFill = function(x, y, w, h, fillStyle) {
		if (fillStyle === undefined)
			fillStyle = '#fff';
		ctx.fillStyle = fillStyle;
		ctx.fillRect(x, y, w, h);
	};
	this.circleFill = function(x, y, r, fillStyle) {
		if (fillStyle === undefined)
			fillStyle = '#fff';
		ctx.fillStyle = fillStyle;
		ctx.beginPath();
		ctx.arc(x, y, r, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
	};
	this.polygon = function(points, fillStyle) {
		if (fillStyle === undefined)
			fillStyle = '#fff';
		ctx.fillStyle = fillStyle;
		ctx.beginPath();
		ctx.moveTo(points[0][0], points[0][1]);
		var npoints = points.length;
		for (var i = 1; i < npoints; i++) {
			var p = points[i];
			ctx.lineTo(p[0], p[1]);
		}
		ctx.closePath();
		ctx.fill();
	};
	this.outlinePolygon = function(points, fillStyle, thickness) {
		if (fillStyle === undefined)
			fillStyle = '#fff';
		if (thickness === undefined)
			thickness = 0.5;
		ctx.strokeStyle = fillStyle;
		ctx.lineWidth = thickness;
		var npoints = points.length;
		for (var i = 0; i < npoints; i++) {
			var p = points[i];
			var next_i = (i < npoints - 1) ? i + 1 : 0;
			var pn = points[next_i];
			ctx.beginPath(); 
			ctx.moveTo(p[0], p[1]);
			ctx.lineTo(pn[0], pn[1]);
			ctx.stroke();
		}
	};
	// graphics
	this.image = function(gfx, x, y, w, h) {
		if (w !== undefined && h !== undefined)
			ctx.drawImage(gfx, x, y, w, h);
		else
			ctx.drawImage(gfx, x, y);
	};
	this.tile = function(gfx, x, y, w, h, sx, sy) {
		ctx.drawImage(gfx, sx, sy, w, h, x, y, w, h);
	};
	this.text = function(text, x, y, fillStyle, textAlign, font) {
		if (fillStyle === undefined)
			fillStyle = '#fff';
		if (textAlign === undefined)
			textAlign = 'left';
		if (font === undefined)
			font = '12px sans-serif';
		ctx.textBaseline = 'top';
		ctx.fillStyle = fillStyle;
		ctx.textAlign = textAlign;
		ctx.font = font;
		ctx.fillText(text, x, y);
	};
}

var render; // global renderer

// input module
var Input = function() {
	// reference to element capturing the input
	var element;

	// input agent constants
	var MOUSE = 0;
	var TOUCH = 1;

	// translates event coordinates to game coordinates
	function translateCoords(e, agent) {
		var ratio = Math.max(element.width / window.innerWidth, element.height / window.innerHeight);
		var bounds = element.getBoundingClientRect();

		var px = (agent === TOUCH) ? e.changedTouches[0].clientX : e.clientX;
		var py = (agent === TOUCH) ? e.changedTouches[0].clientY : e.clientY;

		return {
			x: Math.floor((px - bounds.left) * ratio),
			y: Math.floor((py - bounds.top) * ratio)
		};
	};
	
	// event callback lists
	var cbPress = [];
	var cbMove = [];
	var cbRelease = [];

	// event handlers
	function pressEvent(e, agent) {
		if (agent === TOUCH && e.touches.length > 1)
			return;
		
		if (e.preventDefault) e.preventDefault();
		if (agent === MOUSE) {
			var button = e.which || e.button;
			if (button !== 1)
				return;
		}
		var coords = translateCoords(e, agent);
		for (var i = 0; i < cbPress.length; i++)
			cbPress[i](coords);
		return false;
	};

	function moveEvent(e, agent) {
		if (agent === TOUCH && e.touches.length > 1)
			return;
		
		if (e.preventDefault) e.preventDefault();
		var coords = translateCoords(e, agent);
		for (var i = 0; i < cbMove.length; i++)
			cbMove[i](coords);
		return false;
	};

	function releaseEvent(e, agent) {
		if (agent === TOUCH && e.touches.length > 1)
			return;
		
		if (e.preventDefault) e.preventDefault();
		if (agent === MOUSE) {
			var button = e.which || e.button;
			if (button !== 1)
				return;
		}
		var coords = translateCoords(e, agent);
		for (var i = 0; i < cbRelease.length; i++)
			cbRelease[i](coords);
		return false;
	};

	return {
		// initializes the input module on given element
		init: function(el) {
			element = el;
			// attach event listeners
			el.addEventListener('mousedown', function(e) { pressEvent(e, MOUSE); }, false);
			el.addEventListener('touchstart', function(e) { pressEvent(e, TOUCH); }, false);
			window.addEventListener('mousemove', function(e) { moveEvent(e, MOUSE); }, false);
			window.addEventListener('touchmove', function(e) { moveEvent(e, TOUCH); }, false);
			window.addEventListener('mouseup', function(e) { releaseEvent(e, MOUSE); }, false);
			window.addEventListener('touchend', function(e) { releaseEvent(e, TOUCH); }, false);
		},
		// register a callback function
		register: function(eventType, callback) {
			if (eventType === 'press')
				cbPress.push(callback);
			else if (eventType === 'move')
				cbMove.push(callback);
			else if (eventType === 'release')
				cbRelease.push(callback);
		}
	};
}();

// loadscreen state
var LoadScreen = (function() {
	var gfx = {};
	
	var title_y = 190;
	var title_alpha = 0;
	var hl_alpha = 0;
	
	var t_delay = 200;
	
	var bar_halfw = 0;
	var tip_size = 8;
	var bar_h = 8;
	var bar_y = 250;
	var bar_color = '#7f7f7f';
	
	var progress = 0;
	
	var overlay_alpha = 0;
	var anim_progress = null;
	
	return {
		init: function() {
			Assets.acquire(gfx, [
				'gfx_title', 'gfx_titlehl'
			]); 
		},
		draw: function() {
			render.useAlpha(title_alpha, function() {
				render.image(gfx.title, 0, title_y);
			});
			render.useAlpha(hl_alpha, function() {
				render.image(gfx.titlehl, 0, title_y);
			});
			if (bar_halfw > 0) {
				render.polygon([
					[200 - bar_halfw - tip_size, bar_y],
					[200 - bar_halfw, bar_y],
					[200 - bar_halfw, bar_y + bar_h] 
				], bar_color);
				render.rectFill(200 - bar_halfw - 0.5, bar_y, bar_halfw * 2 + 1, bar_h, bar_color);
				render.polygon([
					[200 + bar_halfw + tip_size, bar_y],
					[200 + bar_halfw, bar_y],
					[200 + bar_halfw, bar_y + bar_h]
				], bar_color);
			}
			render.useAlpha(overlay_alpha, function() {
				render.rectFill(0, 160, 400, 90, '#222');
			});
		},
		intro: function(callback) {
			(new Transition(190, 180, t_delay, function(value) {
				title_y = value;
				bar_y = 60 + value;
			}, null, 'quadin')).start();
			(new Transition(0, 100, t_delay, function(value) {
				title_alpha = value / 100;
			}, function() {
				if (callback instanceof Function)
					callback();
				setTimeout(function() {
					(new Transition(0, 100, t_delay * 3, function(value) {
						hl_alpha = value / 100;
					}, null, 'linear')).start();
				}, t_delay);
				
			}, 'quadin')).start();
		},
		update: function(items, nitems) {
			var barw_from = 50 * progress;
			progress = items / nitems;
			var barw_to = 50 * progress;
			if (anim_progress) {
				anim_progress.stop();
			}
			anim_progress = new Transition(barw_from, barw_to, t_delay, function(value) {
				bar_halfw = value;
			}, function() {
				anim_progress = null;
			}, 'linear');
			anim_progress.start();
		},
		finish: function(callback) {
			(new Transition(0, 100, t_delay * 2, function(value) {
				overlay_alpha = value / 100;
			}, callback, 'linear')).start();
		}
	};
	
}());

// game state
var Game = (function() {
		
	var colors; // color list
	
	var levelData;
	var levelCount;
	var currentLevel; // current level index
	
	var cellSize; // cell size in pixels
	var gridDim; // grid dimension
	
	var dotSize; // guideline dot size
	
	var pieces; // list of game pieces
	var n_pieces; // number of pieces
	
	var playing = false;
	var lockInput = true; // lock all input
	var victory = false;
	
	// victory effect
	var victory_offset = 0;
	var victory_alpha = 0;
	var victorymsg_rot = 0;
	var victory_interval = null;
	
	var t_delay = 180;
	
	// resources
	var gfx = {};
	var sfx = {};
	
	// local configuration
	var CFG_KEY = 'powerblocks';
	var localConfig = {
		unlocked: 0,
		audio: true,
		won: false
	}; 
	
	function saveConfig() {
		localStorage.setItem(CFG_KEY, JSON.stringify(localConfig));
	}
	
	function loadConfig() {
		var cfg = localStorage.getItem(CFG_KEY);
		if (cfg) {
			localConfig = JSON.parse(cfg);
		}
	}
	
	var Board = (function() {
		var border = 10;
		var x = 60;
		var y = 60;
		var w = 280;
		var h = 280;
		var alpha = 0;

		var gridData;
		var board_gfx;
		
		var hl_effect = {
			enabled: false,
			x: 0,
			y: 0,
			w: 0,
			h: 0,
			alpha: 0
		};
		
		function createBoardGfx() {
			board_gfx = document.createElement('canvas');
			var board_ctx = board_gfx.getContext('2d');
			var board_render = new Render(board_ctx);
			var total_w = w + border * 2;
			var total_h = h + border * 2;
			board_gfx.width = total_w;
			board_gfx.height = total_h;
			var center = cellSize / 2;
			var bx, by;
			board_render.rectFill(0, 0, total_w, total_h, '#303030');
			board_render.rectFill(border, border, w, h, '#252525');
			for (by = 0; by < gridDim; by++) {
				for (bx = 0; bx < gridDim; bx++) {
					var cell_x = border + bx * cellSize;
					var cell_y = border + by * cellSize;
					board_render.circleFill(cell_x + center, cell_y + center, dotSize, '#494949');
				}
			}
		}
		
		return {
			draw: function() {
				if (hl_effect.enabled) {
					render.useAlpha(hl_effect.alpha, function() {
						render.rectFill(hl_effect.x, hl_effect.y, hl_effect.w, hl_effect.h, '#ffb238');
					});
				}
				render.useAlpha(alpha, function() {
					render.image(board_gfx, x - border, y - border);
				});
			},
			createBoard: function(data) {
				gridData = data;
				createBoardGfx();
			},
			show: function(callback) {
				(new Transition(0, 100, t_delay, function(value) {
					alpha = value / 100;
				}, callback, 'quadin')).start();
			},
			hide: function(callback) {
				(new Transition(100, 0, t_delay, function(value) {
					alpha = value / 100;
				}, callback, 'quadout')).start();
			},
			highlight: function() {
				// highlight effect
				function update_fx(factor) {
					var expand_by = expansion * factor;
					hl_effect.x = x - expand_by;
					hl_effect.y = y - expand_by;
					hl_effect.w = w + expand_by * 2;
					hl_effect.h = h + expand_by * 2;
					hl_effect.alpha = 1 - factor;
				}
				update_fx(0.3);
				hl_effect.enabled = true;
				var expansion = 30;
				(new Transition(30, 100, 1000, function(value) {
					var factor = value / 100;
					update_fx(factor);
				}, function() {
					hl_effect.enabled = false;
				}, 'linear')).start();
			},
			isComplete: function() {
				// check for victory condition
				var bx, by, bi;
				for (by = 0; by < gridDim; by++) {
					for (bx = 0; bx < gridDim; bx++) {
						for (bi = 0; bi < 4; bi++) {
							if (gridData[bx][by][bi] === 0)
								return false;
						}
					}
				}
				return true;
			},
			fitPiece: function(piece) {
				// align piece to board
				var rx = piece.x - x;
				var ry = piece.y - y;
				var clip = cellSize / 2;
				if (rx >= -clip && ry >= -clip &&
					rx + piece.width < w + clip	&&
					ry + piece.height < h + clip) {
					
					var i = Math.floor((rx + clip) / cellSize);
					var j = Math.floor((ry + clip) / cellSize);

					if (i >= 0 && j >= 0 &&
						i + piece.grid_w - 1 < gridDim &&
						j + piece.grid_h - 1 < gridDim) {

						// check if cells are unoccupied
						var cellsFree = true;

						var px, py, pi;
						checkCells:
						for (py = 0; py < piece.grid_h; py++) {
							for (px = 0; px < piece.grid_w; px++) {
								var bx = i + px;
								var by = j + py;
								for (pi = 0; pi < 4; pi++) {
									if (piece.grid[px][py][pi] > 0 && gridData[bx][by][pi] !== 0) {
										cellsFree = false;
										break checkCells;
									}
								}
							}
						}
						
						if (cellsFree) {
							// move piece
							piece.x = Math.floor(x + i * cellSize);
							piece.y = Math.floor(y + j * cellSize);
							// set grid values
							for (py = 0; py < piece.grid_h; py++) {
								for (px = 0; px < piece.grid_w; px++) {
									var bx = i + px;
									var by = j + py;
									for (pi = 0; pi < 4; pi++) {
										var p_value = piece.grid[px][py][pi];
										if (p_value > 0 && gridData[bx][by][pi] === 0) {
											gridData[bx][by][pi] = p_value;
										}
									}
								}
							}
							// set placed flag
							piece.placed = true;
							// remember grid position
							piece.boardpos.x = i;
							piece.boardpos.y = j;
							return true;
						}
					}
				}
				return false;
			},
			liftPiece: function(piece) {
				// remove values for lifted piece
				var px, px, pi;
				for (py = 0; py < piece.grid_h; py++) {
					for (px = 0; px < piece.grid_w; px++) {
						var bx = piece.boardpos.x + px;
						var by = piece.boardpos.y + py;
						for (pi = 0; pi < 4; pi++) {
							var p_value = piece.grid[px][py][pi];
							if (p_value > 0) {
								gridData[bx][by][pi] = 0;
							}
						}
					}
				}
				
				// remove grid position values
				piece.boardpos.x = -1;
				piece.boardpos.y = -1;
				// remove the placed flag
				piece.placed = false;
			}
		};
	}());
	
	// piece class
	function GamePiece(grid) {
		var self = this;
		// properties
		self.grid = grid;
		self.grid_w = grid.length;
		self.grid_h = grid[0].length;
		self.width = self.grid_w * cellSize;
		self.height = self.grid_h * cellSize;
		
		var min_x = 20;
		var max_x = 380 - self.width;
		
		self.x = 200 - Math.floor(self.width / 2);
		self.y = -self.height;

		self.placed = false;
		self.boardpos = {
			x: -1,
			y: -1
		};
		
		var dots_alpha = 0;
		
		function changeDotsAlpha(value) {
			dots_alpha = value / 100;
		}
		
		var showDotsAnim = new Transition(0, 100, 50, changeDotsAlpha, null, 'quadin');
		var hideDotsAnim = new Transition(100, 0, 120, changeDotsAlpha, null, 'quadout');
				
		// create a pre-rendered piece
		var piece_gfx;
		var dots_gfx;
		
		(function() {
			piece_gfx = document.createElement('canvas');
			var piece_ctx = piece_gfx.getContext('2d');
			var piece_render = new Render(piece_ctx);
			dots_gfx = document.createElement('canvas');
			var dots_ctx = dots_gfx.getContext('2d');
			var dots_render = new Render(dots_ctx);
			
			piece_gfx.width = dots_gfx.width = self.width;
			piece_gfx.height = dots_gfx.height = self.height;

			var center = cellSize / 2;

			var color_found = false;
			var piece_color;

			var x, y;
			for (y = 0; y < self.grid_h; y++) {
				for (x = 0; x < self.grid_w; x++) {
					var cell = self.grid[x][y];
					var c = [
						cell[0] > 0,
						cell[1] > 0,
						cell[2] > 0,
						cell[3] > 0
					];
					// skip blank cells
					if (!c[0] && !c[1] && !c[2] && !c[3])
						continue;
					if (!color_found) {
						for (var i = 0; i < 4; i++) {
							var value = cell[i];
							if (value > 0) {
								color_found = true;
								piece_color = colors[value - 1];
								break;
							}
						}
					}
					// render each combination separately to achieve a uniform look
					// with no antialiasing between joined diagonals
					var polygon = [];
					if (c[0] && c[1] && c[2] && c[3]) {
						// square
						polygon.push(
							[0, 0],
							[cellSize, 0],
							[cellSize, cellSize],
							[0, cellSize]
						);
					}
					else if (c[0] && !c[1] && !c[2] && !c[3]) {
						// triangle top
						polygon.push(
							[0, 0],
							[cellSize, 0],
							[center, center]	
						);
					}
					else if (!c[0] && c[1] && !c[2] && !c[3]) {
						// triangle left
						polygon.push(
							[0, 0],
							[center, center],
							[0, cellSize]
						);
					}
					else if (!c[0] && !c[1] && c[2] && !c[3]) {
						// triangle right
						polygon.push(
							[cellSize, 0],
							[center, center],
							[cellSize, cellSize]
						);
					}
					else if (!c[0] && !c[1] && !c[2] && c[3]) {
						// triangle bottom
						polygon.push(
							[0, cellSize],
							[center, center],
							[cellSize, cellSize]
						);
					}
					else if (c[0] && c[1] && !c[2] && !c[3]) {
						// top left corner
						polygon.push(
							[0, 0],
							[cellSize, 0],
							[0, cellSize]
						);
					}
					else if (c[0] && !c[1] && c[2] && !c[3]) {
						// top right corner
						polygon.push(
							[0, 0],
							[cellSize, 0],
							[cellSize, cellSize]
						);
					}
					else if (!c[0] && c[1] && !c[2] && c[3]) {
						// bottom left corner
						polygon.push(
							[0, 0],
							[cellSize, cellSize],
							[0, cellSize]
						);
					}
					else if (!c[0] && !c[1] && c[2] && c[3]) {
						// bottom right corner
						polygon.push(
							[0, cellSize],
							[cellSize, 0],
							[cellSize, cellSize]
						);
					}
					else if (!c[0] && c[1] && c[2] && c[3]) {
						// top face tooth
						polygon.push(
							[0, 0],
							[center, center],
							[cellSize, 0],
							[cellSize, cellSize],
							[0, cellSize]
						);
					}
					else if (c[0] && !c[1] && c[2] && c[3]) {
						// left face tooth
						polygon.push(
							[0, 0],
							[cellSize, 0],
							[cellSize, cellSize],
							[0, cellSize],
							[center, center]
						);
					}
					else if (c[0] && c[1] && !c[2] && c[3]) {
						// right face tooth
						polygon.push(
							[0, 0],
							[cellSize, 0],
							[center, center],
							[cellSize, cellSize],
							[0, cellSize]
						);
					}
					else if (c[0] && c[1] && c[2] && !c[3]) {
						// bottom face tooth
						polygon.push(
							[0, 0],
							[cellSize, 0],
							[cellSize, cellSize],
							[center, center],
							[0, cellSize]
						);
					}

					var piece_x = x * cellSize;
					var piece_y = y * cellSize;
						
					// translate polygon coordinates
					var render_poly = [];
					polygon.forEach(function(point) {
						render_poly.push([
							piece_x + point[0],
							piece_y + point[1]
						]);
					});
					// render polygon
					piece_render.polygon(render_poly, piece_color);
					// render outline to smooth jagged lines
					piece_render.outlinePolygon(render_poly, piece_color, 1);
					
					// render guideline dots
					if (!(c[0] && c[1] && c[2] && c[3])) {
						dots_render.circleFill(piece_x + center, piece_y + center, dotSize, piece_color);
						dots_render.useAlpha(0.55, function() {
							dots_render.circleFill(piece_x + center, piece_y + center, dotSize, '#fff');
						});
					}
				}
			}
		}());
		
		self.showDots = function() {
			hideDotsAnim.stop();
			showDotsAnim.restart();
		};
		
		self.hideDots = function() {
			showDotsAnim.stop();
			hideDotsAnim.restart();
		};
		
		self.draw = function() {
			render.image(piece_gfx, self.x, self.y);
			if (dots_alpha > 0) {
				render.useAlpha(dots_alpha, function() {
					render.image(dots_gfx, self.x, self.y);
				});
			}
		};
		
		self.tapInside = function(coords) {
			// check for taps within piece
			var x_norm = coords.x - self.x;
			var y_norm = coords.y - self.y;
			
			if (x_norm >= 0 && y_norm >= 0 &&
				x_norm < self.width &&
				y_norm < self.height) {
				
				var cell_x = Math.floor(x_norm / cellSize);
				var cell_y = Math.floor(y_norm / cellSize);
				
				if (cell_x >= 0 && cell_y >= 0 &&
					cell_x < self.grid_w && cell_y < self.grid_h) {
						
					var rel_x = x_norm - cell_x * cellSize;
					var rel_y = y_norm - cell_y * cellSize;
					
					var c1 = (rel_y > cellSize - rel_x);
					var c2 = (rel_y < rel_x);

					var i;
					
					if (!c1 && c2)
						i = 0;
					else if (!c1 && !c2)
						i = 1;
					else if (c1 && c2)
						i = 2;
					else if (c1 && !c2)
						i = 3;
					
					var grid_value = grid[cell_x][cell_y][i];
					
					if (grid_value > 0) {
						return true;
					}
				}
			}
			return false;
		};
		
		self.move = function(coord_x, coord_y, drag_x, drag_y) {			
			if (coord_x >= 5 && coord_x < 395) {
				self.x = coord_x - drag_x;
			}
			if (coord_y >= 5 && coord_y < 650) {
				self.y = coord_y - drag_y;
			}
		};
	}
	
	function createGrid(fillValue, dim_y, dim_x) {
		// create a blank grid
		fillValue = fillValue || 0;
		dim_y = dim_y || gridDim;
		dim_x = dim_x || gridDim;
		var output = [];
		var x, y, i;
		for (y = 0; y < dim_y; y++) {
			var col = [];
			for (x = 0; x < dim_x; x++) {
				var values = [];
				for (i = 0; i < 4; i++) {
					values.push(fillValue);
				}
				col.push(values);
			}
			output.push(col);
		}
		return output;
	}
	
	function reduceGrid(original) {
		// outputs a reduced grid containing the piece
		var min_x = gridDim;
		var max_x = 0;
		var min_y = gridDim;
		var max_y = 0;
		
		var x, y;
		for (y = 0; y < gridDim; y++) {
			for (x = 0; x < gridDim; x++) {
				var cell = original[x][y];
				var hasValue = (
					cell[0] > 0 ||
					cell[1] > 0 ||
					cell[2] > 0 ||
					cell[3] > 0
				);
				if (hasValue) {
					if (x < min_x)
						min_x = x;
					if (x > max_x)
						max_x = x;
					if (y < min_y)
						min_y = y;
					if (y > max_y)
						max_y = y;
				}
			}
		}
		var grid_w = max_x - min_x + 1;
		var grid_h = max_y - min_y + 1;
		
		var output = createGrid(0, grid_w, grid_h);
		
		for (y = 0; y < grid_h; y++) {
			for (x = 0; x < grid_w; x++) {
				var rx = x + min_x;
				var ry = y + min_y;
				var cell = original[rx][ry];
				var hasValue = (
					cell[0] > 0 ||
					cell[1] > 0 ||
					cell[2] > 0 ||
					cell[3] > 0
				);
				if (hasValue) {
					output[x][y] = original[rx][ry].slice();
				}
			}
		}
		return output;
	}
	
	function createPieces(level) {
		// generate individual pieces
		pieces = [];
		// create a temporary grid of flags
		var flag_grid = createGrid(-1);
		
		// traverse the grid and collect all neighbouring subpieces of same color
		function findSubpieces(x, y, i, color, pieceGrid) {
			if (flag_grid[x][y][i] === -1 && level[x][y][i] === color) {
				flag_grid[x][y][i] = 1;
				// fill in subpiece value
				pieceGrid[x][y][i] = color;
				// find neighbouring subpieces
				var neighbours;
				switch (i) {
					case 0:
						neighbours = [
							[x, y, 1],
							[x, y, 2],
							[x, y - 1, 3]
						];
						break;
					case 1:
						neighbours = [
							[x, y, 0],
							[x, y, 3],
							[x - 1, y, 2]
						];
						break;
					case 2:
						neighbours = [
							[x, y, 0],
							[x, y, 3],
							[x + 1, y, 1]
						];
						break;
					case 3:
						neighbours = [
							[x, y, 1],
							[x, y, 2],
							[x, y + 1, 0]
						];
						break;
				}
				neighbours.forEach(function(item) {
					var next_x = item[0];
					var next_y = item[1];
					var next_i = item[2];
					if (next_x >= 0 && next_y >= 0 && next_x < gridDim && next_y < gridDim) {
						findSubpieces(next_x, next_y, next_i, color, pieceGrid);
					}
				});
			}
		}
		
		var x, y, i;
		for (y = 0; y < gridDim; y++) {
			for (x = 0; x < gridDim; x++) {
				for (i = 0; i < 4; i++) {
					if (flag_grid[x][y][i] === -1) {
						// collect a new piece
						var pieceGrid = createGrid();
						var color = level[x][y][i];
						findSubpieces(x, y, i, color, pieceGrid);
						// reduce piece grid
						var gridNorm = reduceGrid(pieceGrid);
						// create a new piece and add to collection
						pieces.push(new GamePiece(gridNorm));
					}
				}
			}
		}
		
		n_pieces = pieces.length;
		
		// randomize order
		shuffle(pieces);
	}
	
	function loadLevel(index) {
		currentLevel = index;
		var level = levelData[index];
		gridDim = level.length; // grid dimension
		cellSize = 280 / gridDim; // cell size in px
		dotSize = (gridDim < 7) ? 5 : 4;
		victory = false;
		// set initial board values
		Board.createBoard(createGrid());
		// create puzzle pieces
		createPieces(level);
	}
	
	function levelIntro() {
		// fade in game board
		Board.show(function() {
			// animate pieces
			pieces.forEach(function(item, index) {
				var item_max_x = 360 - item.width;
				var item_new_x = Math.floor(index / (n_pieces - 1) * item_max_x) + 20; 
				var item_new_y = getRandInt(370, 650 - item.height);
				(new Transition(item.x, item_new_x, 500, function(value) {
					item.x = value;
				}, null, 'quadin')).start();
				(new Transition(item.y, item_new_y, 500, function(value) {
					item.y = value;
				}, null, 'quadin')).start(); 
			});
			// enable input
			lockInput = false;
			// enable game
			playing = true;
			// play sfx
			setTimeout(function() {
				if (localConfig.audio)
					sfx.intro.play();
			}, 380);
		});
	}
	
	function victoryAnimation() {
		Board.highlight();
		var offset_from = 30;
		victory_alpha = 0;
		victory_offset = offset_from;
		victory_msg_rot = 0;
		var delay = 600;
		lockInput = true;
		(new Transition(offset_from, 0, delay, function(value) {
			victory_offset = value;
		}, null, 'quadout')).start();
		(new Transition(0, 100, delay, function(value) {
			victory_alpha = value / 100;
		}, function() {
			lockInput = false;
			
			var rot_i = 0;
			victory_interval = setInterval(function() {
				victorymsg_rot = Math.sin(++rot_i) * 2;
			}, 100);
			
		}, 'quadin')).start();
	}
	
	function stopVictoryInterval() {
		if (victory_interval !== null) {
			clearInterval(victory_interval);
			victory_interval = null;
		}
	}
	
	function levelOutro(callback) {
		lockInput = true;
		Board.hide();
		var delay = 500;
		pieces.forEach(function(item) {
			var to_x = 200 - Math.floor(item.width / 2);
			var to_y = -item.height - 50;
			(new Transition(item.x, to_x, delay, function(value) {
				item.x = value;
			}, null, 'quadout')).start();
			(new Transition(item.y, to_y, delay, function(value) {
				item.y = value;
			}, null, 'quadout')).start();
		});
		(new Transition(100, 0, delay, function(value) {
			victory_alpha = value / 100;
		}, function() {
			stopVictoryInterval();
			setTimeout(function() {
				if (callback instanceof Function)
					callback();
			}, 100);
		}, 'quadout')).start();
	}
	
	var MenuBar = (function() {
		
		var menu_y;
		
		var handle_h = 30;
		var body_h = 120;
		
		var max_y = 700 - handle_h;
		var min_y = max_y - body_h;
		
		var mid_y = (max_y + min_y) / 2;
		
		var alpha = 0;
		
		var activeAnim = null;
		var anim_delay = 160;
		
		var menuOpen = false;
		
		function expandMenu(callback) {
			if (menu_y === min_y) {
				if (callback instanceof Function)
					callback();
			}
			else {
				activeAnim = new Transition(menu_y, min_y, anim_delay, function(value) {
					menu_y = value;
				}, function() {
					activeAnim = null;
					if (callback instanceof Function)
						callback();
				}, 'quadin');
				activeAnim.start();
			}
		}
		
		function closeMenu(callback) {
			if (menu_y === max_y) {
				if (callback instanceof Function)
					callback();
			}
			else {
				activeAnim = new Transition(menu_y, max_y, anim_delay, function(value) {
					menu_y = value;
				}, function() {
					activeAnim = null;
					if (callback instanceof Function)
						callback();
				}, 'quadout');
				activeAnim.start();
			}
		}
		
		function stopAnim() {
			// stop any ongoing animations
			if (activeAnim !== null) {
				activeAnim.stop();
				activeAnim = null;
			}
		}
		
		var MenuHandle = (function() {
			var holding = false;
			var drag_y;
			
			function tapHandle(coords) {
				return pointInRect(coords.x, coords.y, 0, menu_y, 400, handle_h);
			}
			
			function tapOutside(coords) {
				return !pointInRect(coords.x, coords.y, 0, menu_y, 400, handle_h + body_h);
			}
			
			function enableGame() {
				menuOpen = false;
				// enable game input
				if (!victory)
					playing = true;
			}
			
			function userEvents() {
				Input.register('press', function(coords) {
					if (lockInput)
						return;
					if (tapHandle(coords)) {
						if (!menuOpen) {
							MenuBar.setup();
						}
						stopAnim();
						// start dragging the menu
						drag_y = coords.y - menu_y;
						holding = true;
						// disable game input
						playing = false;
					}
					else if (menuOpen && tapOutside(coords) && activeAnim === null) {
						closeMenu(enableGame);
					}
				});
				Input.register('move', function(coords) {
					if (lockInput)
						return;
					if (holding) {
						menu_y = coords.y - drag_y;
						if (menu_y < min_y)
							menu_y = min_y;
						else if (menu_y > max_y)
							menu_y = max_y;
					}
				});
				Input.register('release', function(coords) {
					if (lockInput)
						return;
					if (holding) {
						holding = false;
						var hot_y = (menuOpen)
							? mid_y - body_h / 3
							: mid_y + body_h / 3;
						if (menu_y < hot_y) {
							expandMenu(function() {
								menuOpen = true;
							});
						}
						else if (menu_y >= hot_y) {
							closeMenu(enableGame);
						}
					}
				});
			}
			
			return {
				init: function() {
					// register user events
					userEvents();
				},
				draw: function() {
					render.rectFill(0, menu_y, 400, handle_h, (holding) ? '#2c2c2c' : '#333');
					render.tile(gfx.menuicon, 176, menu_y, 47, 33, 0, (holding) ? 33 : 0);
				}
			};
		}());
		
		var MenuBody = (function() {
			var progress_w = 0;
			var progress_text = '';
			
			var icon_tile_x = 0;
			
			var selectedLevel;
			
			function updateInfo() {
				progress_w = 380 * selectedLevel / (levelCount - 1);
				progress_text = (selectedLevel + 1) + ' / ' + levelCount;
				if (selectedLevel === levelCount - 1 && localConfig.won || selectedLevel < localConfig.unlocked) {
					icon_tile_x = 40;
				} 
				else if (selectedLevel === localConfig.unlocked) {
					icon_tile_x = 0;
				}
				else {
					icon_tile_x = 80;
				}
			}
			
			// button class
			function MenuButton(props) {
				var self = this;
				
				var size = 55;
				var bg_color = '#333';
				var hl_color = '#202020';
				
				var pressed = false;
				var highlighted = false;
				
				self.altMode = false;
				
				function tapInside(coords) {
					// check for taps within button
					return pointInRect(coords.x, coords.y, props.x, menu_y + handle_h + props.y, size, size);
				}
				
				function pushEvent() {
					if (props.onPush instanceof Function)
						props.onPush();
				}
				
				var repeatTimer = null;
				
				function clearRepeat() {
					if (repeatTimer !== null) {
						clearInterval(repeatTimer);
						repeatTimer = null;
					}
				}
				
				function doRepeatEvent() {
					// repeat push events, slowly shortening the delay between events
					pushEvent();
					clearRepeat();
					var skip_first = 7;
					var repeat = 0;
					var delay_from = 100;
					var delay_to = 30;
					function timedEvent(delay) {
						repeatTimer = setTimeout(function() {
							var next_delay = delay;
							if (++repeat >= skip_first) {
								pushEvent();
								if (delay > delay_to)
									next_delay -= 2;
							}
							timedEvent(next_delay);
						}, delay);
					}
					timedEvent(delay_from);
				}

				Input.register('press', function(coords) {
					if (menuOpen) {
						if (tapInside(coords)) {
							if (props.repeatMode === true) {
								doRepeatEvent();
							}
							pressed = highlighted = true;
						}
					}
				});
				Input.register('move', function(coords) {
					if (menuOpen) {
						if (pressed) {
							highlighted = tapInside(coords);
							if (props.repeatMode === true) {
								if (repeatTimer !== null && !highlighted) {
									clearRepeat();
								}
								else if (repeatTimer === null && highlighted) {
									doRepeatEvent();
								}
							}
						}
					}
				});
				Input.register('release', function(coords) {
					if (menuOpen) {
						if (props.repeatMode === true) {
							clearRepeat();
						}
						if (pressed) {
							if (props.repeatMode !== true && highlighted) {
								pushEvent();
							}
							pressed = highlighted = false;
						}
					}
				});

				self.draw = function() {
					var x = props.x;
					var y = menu_y + handle_h + props.y;
					var tile;
					if (self.altMode) {
						tile = (highlighted) ? props.altIconHl : props.altIcon;
					}
					else {
						tile = (highlighted) ? props.iconHl : props.icon;
					}
					var background = (highlighted) ? hl_color : bg_color;
					var tile_x = tile[0] * size;
					var tile_y = tile[1] * size;
					render.rectFill(x, y, size, size, background);
					render.tile(gfx.buttonicons, x, y, size, size, tile_x, tile_y);
				};
			}
			
			var ui = {};
			var buttons;
			
			function createUI() {
				buttons = [
					ui.buttonPlay = new MenuButton({
						x: 10,
						y: 10,
						icon: [0, 0],
						iconHl: [0, 1],
						onPush: function() {
								if (selectedLevel <= localConfig.unlocked) {
									closeMenu(function() {
										menuOpen = false;
									});
									levelOutro(function() {
											loadLevel(selectedLevel);
											levelIntro();
										});
								}
						}
					}),
					ui.buttonPrevious = new MenuButton({
						x: 140,
						y: 10,
						icon: [1, 0],
						iconHl: [1, 1],
						repeatMode: true,
						onPush: function() {
							if (selectedLevel > 0) {
								selectedLevel--;
								updateInfo();
							}
						}
					}),
					ui.buttonNext = new MenuButton({
						x: 205,
						y: 10,
						icon: [2, 0],
						iconHl: [2, 1],
						repeatMode: true,
						onPush: function() {
							if (selectedLevel < levelCount - 1) {
								selectedLevel++;
								updateInfo();
							}
						}
					}),
					ui.buttonSound = new MenuButton({
						x: 270,
						y: 10,
						icon: [3, 0],
						iconHl: [3, 1],
						altIcon: [4, 0],
						altIconHl: [4, 1],
						onPush: function() {
							localConfig.audio = !localConfig.audio;
							updateSoundButton();
							saveConfig();
						}
					}),
					ui.buttonExpand = new MenuButton({
						x: 335,
						y: 10,
						icon: [5, 0],
						iconHl: [5, 1],
						altIcon: [6, 0],
						altIconHl: [6, 1],
						onPush: function() {
							if (screenfull.enabled) {
								screenfull.toggle();
								updateExpandButton();
							}
						}
					})
				];
			}
			
			function updateSoundButton() {
				ui.buttonSound.altMode = !localConfig.audio;
			}
			
			function updateExpandButton() {
				ui.buttonExpand.altMode = (screenfull.isFullscreen);
			}
			
			return {
				init: function() {
					createUI();
					updateSoundButton();
					// register fullscreen event
					if (screenfull.enabled) {
						document.addEventListener(screenfull.raw.fullscreenchange, updateExpandButton);
					}
				},
				draw: function() {
					render.rectFill(0, menu_y + handle_h, 400, body_h, '#282828');
					buttons.forEach(function(item) {
						item.draw();
					});
					var icon_y = menu_y + handle_h + 17;
					render.tile(gfx.stateicons, 82, icon_y, 40, 40, icon_tile_x, 0); 
					var progress_y = menu_y + handle_h + 75;
					var label_y = progress_y + 18;
					render.rectFill(10, progress_y, 380, 10, '#202020');
					render.rectFill(10, progress_y, progress_w, 10, '#f86227');
					render.text(progress_text, 200, label_y, '#ddd', 'center', '15px sans-serif');
				},
				setup: function(levelIndex) {
					selectedLevel = levelIndex;
					updateInfo();
				}
			}
		}());
		
		return {
			init: function() {
				// initialize components
				MenuHandle.init();
				MenuBody.init();
				menu_y = max_y;
			},
			draw: function() {
				render.useAlpha(alpha, function() {
					MenuHandle.draw();
					if (menu_y < max_y) {
						MenuBody.draw();
					}
				});
			},
			showIntro: function(callback) {
				menu_y = min_y;
				(new Transition(0, 100, 180, function(value) {
					alpha = value / 100;
				}, function() {
					setTimeout(function() {
						closeMenu(callback);
					}, 180);
				})).start();
			},
			setup: function() {
				MenuBody.setup(currentLevel);				
			},
			isOpen: function() {
				return menuOpen;
			}
		};
	}());
	
	function gameUserEvents() {
		var dragging = false;
		var drag_piece = null;
		var drag_x;
		var drag_y;
		
		Input.register('press', function(coords) {
			if (lockInput)
				return;
			if (victory) {
				if (!MenuBar.isOpen() && pointInRect(coords.x, coords.y, 0, 0, 400, 650)) {
					if (currentLevel < levelCount - 1) {
						levelOutro(function() {
							loadLevel(currentLevel + 1);
							levelIntro();
						});
					}
				}
			}
			else if (playing) {
				if (!dragging) {
					// find clicked piece
					var i = n_pieces;
					while (i--) {
						var piece = pieces[i];
						if (piece.tapInside(coords)) {
							dragging = true;
							drag_piece = piece;
							drag_x = coords.x - piece.x;
							drag_y = coords.y - piece.y;
							// push selected piece to the front of the list
							pieces.push(pieces.splice(i, 1)[0]);
							// lift board values if piece is positioned
							if (piece.placed) {
								Board.liftPiece(piece);
							}
							// show piece dots
							drag_piece.showDots();
							break;
						}
					}
				}
			}
		});
		Input.register('move', function(coords) {
			if (lockInput)
				return;
			if (playing) {
				if (dragging) {
					drag_piece.move(coords.x, coords.y, drag_x, drag_y);
				}
			}
		});
		Input.register('release', function(coords) {
			if (lockInput)
				return;
			if (playing) {
				if (dragging) {
					if (Board.fitPiece(drag_piece)) {						
						// push selected piece to the back of the list to uncover
						// any piece that might be sitting on top
						pieces.unshift(pieces.pop());
						// check for victory condition
						if (Board.isComplete()) {
							// disable user input
							playing = false;
							victory = true;
							// unlock next level
							if (currentLevel === localConfig.unlocked) {
								if (currentLevel === levelCount - 1) {
									localConfig.won = true;
								}
								else {
									localConfig.unlocked++;
								}
								saveConfig();
							}
							// start victory animation
							victoryAnimation();
							// play sfx
							if (localConfig.audio)
								sfx.victory.play();
						}
						else {
							// play sfx
							if (localConfig.audio)
								sfx.piece.play();
						}
					}
					// hide drag piece dots
					dragging = false;
					drag_piece.hideDots();
					drag_piece = null;
				}
			}
		});
	}
	
	return {
		init: function() {
			// get assets
			Assets.acquire(gfx, [
				'gfx_menuicon',
				'gfx_buttonicons',
				'gfx_stateicons',
				'gfx_victory',
				'gfx_victorymsg'
			]);
			Assets.acquire(sfx, [
				'sfx_intro',
				'sfx_piece',
				'sfx_victory'
			]);
			// load local configuration
			loadConfig();
			// import levels
			var levels_compressed = Assets.get('data_levels');
			var n_compressed = levels_compressed.length;
			levelData = [];
			levelCount = 0;
			for (var n = 0; n < n_compressed; n++) {
				var levels_decompressed = LZString.decompressFromBase64(levels_compressed[n]);
				try {
					var data = JSON.parse(levels_decompressed);
					levelData.push(data);
					levelCount++;
				}
				catch(e) {}
			}
			// import colors
			colors = Assets.get('data_colors');
			// initialize menu bar
			MenuBar.init();
			// fix config inconsistencies due to editing levels
			if (localConfig.unlocked >= levelCount - 1) {
				localConfig.unlocked = levelCount - 1;
				localConfig.won = true;
				saveConfig();
			}
			else if (localConfig.unlocked < levelCount - 1 && localConfig.won) {
				localConfig.won = false;
				localConfig.unlocked++;
				saveConfig();
			}
			// load initial level
			loadLevel(localConfig.unlocked);
			// refresh menubar innterface before showing it
			MenuBar.setup();
			// register game user events
			gameUserEvents();
			// show menu intro and start level intro sequence
			MenuBar.showIntro(levelIntro);
		},
		draw: function() {
			// paint game board
			Board.draw();
			// paint pieces
			for (var i = 0; i < n_pieces; i++) {
				pieces[i].draw();
			}
			// draw victory labels
			if (victory) {
				render.useAlpha(victory_alpha, function() {
					render.image(gfx.victory, 119, 430 + victory_offset);
					if (currentLevel < levelCount - 1) {
						render.rotate(victorymsg_rot, [200, 514 + victory_offset], function() {
							render.image(gfx.victorymsg, 119, 500 + victory_offset);
						});
					}
				});
			}
			// paint menu
			MenuBar.draw();
		},
		cheat: function() {
			if (levelCount !== undefined) {
				localConfig.unlocked = levelCount - 1;
				localConfig.won = true;
				saveConfig();
			}
		}
	};
}());

// resource lists
var resources = {
	// assets required to initiate the loadscreen
	primary: {
		gfx_title: 'gfx/title.png',
		gfx_titlehl: 'gfx/title_hl.png'
	},
	// game assets
	main: {
		gfx_menuicon: 'gfx/menu_icon.png',
		gfx_buttonicons: 'gfx/button_icons.png',
		gfx_stateicons: 'gfx/state_icons.png',
		gfx_victory: 'gfx/victory.png',
		gfx_victorymsg: 'gfx/victory_msg.png',
		data_colors: 'data/colors.json',
		data_levels: 'data/levels.json',
		sfx_intro: ['sfx/intro.ogg', 'sfx/intro.aac', 'sfx/intro.wav'],
		sfx_piece: ['sfx/piece.ogg', 'sfx/piece.aac', 'sfx/piece.wav'],
		sfx_victory: ['sfx/victory.ogg', 'sfx/victory.aac', 'sfx/victory.wav']
	}
};

// core module
var Core = (function() {
	
	var canvas; // reference to canvas element
	var ctx; // render context
	var state; // reference to current state
	var win_w, win_h; // window size
	
	var requestAnimFrame = (
		window.requestAnimationFrame       ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
		window.oRequestAnimationFrame      ||
		window.msRequestAnimationFrame     ||
		function (callback) {
			window.setTimeout(callback, 1000 / 60);
		}
	);
	
	function refreshSize() {
		var dw = window.innerWidth;
		var dh = window.innerHeight;
		if (dw !== win_w || dh !== win_h) {
			// update viewport
			win_w = dw;
			win_h = dh;
			var cw = canvas.width;
			var ch = canvas.height;
			var ratio = cw / ch;
			var width = dh * ratio;
			var height;
			if (width > dw) {
				ratio = ch / cw;
				width = dw;
				height = dw * ratio;
			}
			else {
				height = dh;
			}
			canvas.style.width = width + 'px';
			canvas.style.height = height + 'px';
		}
		setTimeout(refreshSize, 30);
	}
	
	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		state.draw();
		requestAnimFrame(draw);
	}
	
	return {
		init: function() {
			// initialization
			canvas = document.getElementById('powerblocks');
			ctx = canvas.getContext('2d');
			render = new Render(ctx);
			Input.init(canvas);
			// load primary assets
			Assets.load(resources.primary, function() {
				// initiate loadscreen
				(state = LoadScreen).init();
				// enter draw loop and size refresh cycle
				refreshSize();
				draw();
				// run loadscreen intro
				LoadScreen.intro(function() {
					// load main assets
					Assets.load(resources.main, function() {
						// all assets loaded
						// introduce a tiny delay
						setTimeout(function() {
							// run loadscreen outro
							LoadScreen.finish(function() {
								// start game
								(state = Game).init();
							});
						}, 1000);
					}, LoadScreen.update);
				});
			});
		},
		setState: function(next) {
			state = next;
		}
	};
	
}());

window.addEventListener('load', Core.init, false);

return {
	unlockAll: function() {
		Game.cheat();
	}
};

}());