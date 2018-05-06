module.exports = function() {
	var shuffle = require("shuffle-array");
	var base 	= require('../application/base.js');
	var resultado;
	var random;

	var Controller = {
		frases: function() {
			resultado = shuffle.pick(base.base(), { 'picks': 1 });
			return resultado;
		},
		paragrafos: function() {
			resultado = shuffle.pick(base.base(), { 'picks': 5 });
			resultado = resultado.join(" ");
			return resultado;
		},
		textao: function(quantidade) {
			var quantidade = parseInt(quantidade);
			resultado = shuffle.pick(base.base(), { 'picks': quantidade });
			resultado = resultado.join(" ");
			return resultado;
		},
		
		get: {
			index: function(request, response) {
				random  = Controller.frases();
				response.render("index", { "frases" : random });
			},
			frases: function(request, response) {
				random  = Controller.frases();
				response.render("generator", { "frases" : random });
			},
			paragrafos: function(request, response) {
				random  = Controller.paragrafos();
				response.render("generator", { "paragrafos" : random });
			},
			textao: function(request, response) {
				random  = Controller.textao(30);
				response.render("generator", { "textao" : random });
			},
			sobre: function(request, response) {
				random  = Controller.frases();
				response.render("sobre", { "frases" : random });
			}
		},

		post: {
			textao: function(request, response) {
				var quantidade = request.body.quantidade;
				random  = Controller.textao(quantidade);
				response.render("generator", { "textao" : random });
			}
		}
	};
	return Controller;
};