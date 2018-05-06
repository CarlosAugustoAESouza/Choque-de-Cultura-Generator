module.exports = function(app) {
	var controller = app.controllers.random;
	
	app.get('/', controller.get.index);
	app.get('/frases', controller.get.frases);
	app.get('/paragrafos', controller.get.paragrafos);
	app.get('/textao', controller.get.textao);
	app.get('/sobre', controller.get.sobre);

	app.post('/textao', controller.post.textao);
};