// The content of this file was generated by IBM Cloud
// No not modify it as it might get overridden

var serviceManager = require('./service-manager');

module.exports = function(app){
	require('./service-watson-conversation')(app, serviceManager);

};