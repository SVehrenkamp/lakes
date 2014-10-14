Lakes
=====
MEANLakes is a Lake finder application built using the MEAN development stack and strongloop.  Users should be able to create an account, browse and search for lakes using a variety of filters, rate, review and favorite visited lakes.

Requirements
============
-MongoDB<br>
-Node.js<br>
-NPM<br>
-Strongloop<br>
-Bower<br>

Installation
============
First make sure that you have the above requirements installed.
From the command line import the mongoDB BSON dump into your mongoDB instance:<br>
```
mongorestore /path/to/repo/db/lakes
```
This will create a new database called 'lakes' and populate it with the collections and data provided.<br>
Next, make sure that you have strongloop installed globally<br>
```
npm install -g strongloop
```
or
```
sudo npm install -g strongloop
```
Once installed move to the client directory and install dependencies
```
cd client
bower install
```
After all the dependencies have been installed, navigate back to the root directory and start the server as follows:
```
slc run
```
The application is now running at ```http://localhost:3000```<br>
Navigate to this in your browser to view the main page of the app.<br>

REST API
========
A preconfigured REST API for the lakes collection is available to you as a service call made to ```http://localhost:3000/api/lakes/{params}```<br>
Alternatively, you can browse all the API endpoints for the lakes collection by navigating to ```http://localhost/explorer/#!/lakes```<br>

Authentication
==============
Coming soon!<br>

Client Directory
================
The client directory is where all of the front end application files live.  The ```index.html``` file is the entry point of the app where all dependencies are bootstrapped.<br>
The app uses Angular.js for a front end framework.  ``/js/app.js``` is where the app is instantiated and  all services, controllers and directives are registered.
