// import phantom from 'phantom';

let phantom = require("phantom");
let settings = require('../.settings.js');
let _ph, _page, _outObj;

phantom.create().then(ph => {
	_ph = ph;
	return _ph.createPage();
}).then(page => {
	_page = page;

	return _page.open(settings.url);
}).then(status => {
	console.log(status);
	return _page.property('content')
}).then(content => {
	console.log(content);
	_page.close();
	_ph.exit();
}).catch(e => console.log(e));
