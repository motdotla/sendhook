# pinghook

Notify yourself of various services' webhook events via email/sms.

## Getting Started

### Development

```
$ mv config.example.json config.json
```

Set your settings in config.json and then run:

```
$ node app.js
```

### Production

```
$ heroku create
$ heroku addons:add sendgrid:starter
$ heroku config:set PINGHOOK_TO=toemail PINGHOOK_FROM=fromemail
$ git push heroku master
$ curl -X POST http://yoursubdomain.herokuapp.com/example
```

After you are done with that - go hook up your webhooks to the service you want to notify yourself of with their webhooks.

## Services Supported

* example
