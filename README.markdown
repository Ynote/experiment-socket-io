> This project has moved to https://gitlab.com/ynote_hk/experiment-socket-io.

# Experiment Socket.IO

> Experiment from 2013

This is a small project that intends to test Socket.IO.

This is a presentation backbone created with [reveal.js](https://github.com/hakimel/reveal.js). It comes with Socket.IO to allow multiple users/devices to control the same presentation.
Reveal.js already comes with a plugin for this purpose (multiplex). This is a personal project to learn how to write a Socket.IO server.

## Installation
Clone the repository and execute:
```
$ npm install
```
Then, execute:
```
$ bower install
```

## Setup
Create a `local_conf.json` file to setup your local conf. It must contains a admin login and password:
```
{
    "adminUser" : "your_admin_login",
    "adminPwd"  : "your_admin_password"
}
```

In `public/js/init.js`, change the connection of Socket.IO:
```
var socket = io.connect('http://your_localhost');
```

Run Grunt:
```
$ grunt
```

#### Security
When a user cannot login as admin, he will be redirected to `views/public.html` instead of `views/admin.html`. The public view has no connection to Socket.IO and so, cannot be controlled.

## Todo
* Authorize only one master on the admin presentation
* Create an html partial for slides
* Remove localhost data from `public/js/init.js` and put it into `local_conf`
* Add a personal theme to RevealJs

Based on [this tutorial](http://www.sitepoint.com/create-multi-user-presentation-reveal-js)
