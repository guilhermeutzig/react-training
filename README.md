# README.md

The objective of this project is to show a very basic React structure, creating forms and components with some simple AJAX Requests for a Fake API.

The issues seen in this project:

* React Structure
* Creation and definition of pages
* React Routes definition
* Creation and definition of components, passing 'props' and manipulating the 'state'
* Listing of components with dynamic content ('JSON')
* Clicks and DOM manipulations, changing features and classes
* Fake APIs with JSON Server
* AJAX Requests via Axios
* Manipulate LocalStorage and JSON Server to create a Login form

New ideias about structuring and libraries used are very welcome!

# Installation NPM

1.  Install `node`: https://nodejs.org/en/
2.  Clone project: `git clone https://github.com/guilhermeutzig/react-training.git`
3.  Run `npm install` on the root folder
4.  Start the project with `npm run dev`

# Installation Yarn

1.  Install `node`: https://nodejs.org/en/
2.  Install `yarn`: https://yarnpkg.com/lang/en/docs/install/#windows-stable
3.  Clone project: `git clone https://github.com/guilhermeutzig/react-training.git`
4.  Run `yarn` on the root folder
5.  Start the project with `yarn dev`

# How to run JSON Server to manipulate Fake API

Inside the folder `json/` we have two files: `icons.json` and `users.json`. Inside of each one, we have an array and this file will be the ones that JSON Server will use to generate our Fake API.

## Installing JSON Server

We need it globally installed on our machine, so simply run this command:

NPM: `npm install -g json-server`

Yarn: `yarn global add json-server`

After this, go to the folder `json/` inside the project and run the command:

`json-server --watch users.json`, this will start the fake API and will give you an URL to work with.
Probably it will be listed on console, but generally is `http://localhost:3000/users`.

It's done, now you can simply add a new user to the array or delete all. I made some simple validations comparing users from the fake API and what the user typed on the screen, so create your user and log in!

# Installed Libraries

* Babel to use ES6 sintax
* Bootstrap 4
* Sass
* File Loader
* React Router DOM
* Webpack
* Axios
* JSON Server

# In the future

I still plan to create a register form to this project, so you don't need to add on the JSON file.
