# Ionic Parse Starter

A starter app for Ionic with user integration against Parse. With this app you will be able to register new users, login, logout, and initiate a password reset request.

## Quickstart

### Parse setup

Create a free account over at [Parse](https://www.parse.com).

Copy your [Application ID](https://www.parse.com/apps/perspyre/edit#keys) and [Javascript Key](https://www.parse.com/apps/perspyre/edit#keys) into the `Parse.initialize` function in `www/js/app.js`.

Create the API endpoints for user logins and registrations by creating a User collection (https://parse.com/apps/[YOURAPPNAME]/collections).

### Ionic setup

Ensure you have [Node.js & NPM](http://nodejs.org/) installed and in your PATH.

Install the ionic command line tools by running `npm install -g ionic cordova`.

Run the project in your browser by running `ionic serve`.

## Additional resources

[Parse Docs](https://parse.com/docs)

[Ionic Docs](http://ionicframework.com/docs/)

## Credits

Made with love by [alevicki](https://github.com/alevicki)
