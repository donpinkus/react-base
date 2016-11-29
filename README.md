## Setup

Setup requires *npm* and running the web server requires *node* and *npm* (Node Package Manager). 

Currently works with node v6.3.0 and npm v3.10.3.  Haven't checked with other versions yet :)

#### Step 1. Install dependencies.

Navigate to the root directory of this repo.
```
$ cd projectfolder
```

Install the dependencies. This will create a folder in your root directory called "node_modules" with all of this projects dependencies. The dependencies for this project are defined in "packages.json".
```
$ npm install
```

#### Step 2. Start the development webserver

This will start a development webserver on localhost:3000.  The command for "start" is also defined in packages.json.

```
$ npm start
```

#### Step 3. Open http://localhost:3000 

You should see your app here.  If you don't see anything, check your "npm start" terminal tab for error output, or the web browser's console. 

## Deploying

This project assumes you're just taking the index.html file + bundle.js, and moving that onto some other webserver. 

So build the bundle.js using `$ webpack`.


## Linting

```
npm run lint
```

## About the code

This was built using react-hot-boilerplate as its boilerplate.  So if you're curious about how to generally navigate a react app like this, all the docs and resources on react-hot-boilerplate can be very helpful.
