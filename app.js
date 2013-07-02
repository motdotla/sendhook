var request     = require('request');
var nconf       = require('nconf');
nconf.argv().env().file({ file: "config.json" });


var e           = module.exports;
e.ENV           = process.env.NODE_ENV || 'development';


PINGHOOK_TO             = process.env.PINGHOOK_TO || nconf.get("PINGHOOK_TO");
PINGHOOK_FROM           = process.env.PINGHOOK_FROM || nconf.get("PINGHOOK_FROM");
var sendgrid_username   = process.env.SENDGRID_USERNAME || nconf.get("SENDGRID_USERNAME");
var sendgrid_password   = process.env.SENDGRID_PASSWORD || nconf.get("SENDGRID_PASSWORD");


var sendgrid    = require('sendgrid').SendGrid;
SendGrid        = new sendgrid(sendgrid_username, sendgrid_password);


var port        = parseInt(process.env.PORT) || 3000;
var Hapi        = require('hapi');
server          = new Hapi.Server(+port, '0.0.0.0', { cors: true });
require('./routes');
server.start();


