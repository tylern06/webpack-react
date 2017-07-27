## What is Webpack?

Webpack is an open-source JavaScript module bundler. A module can consist of HTML, CSS, JS and even images. Each module would make up a different component of your website.

For example, if we had a image carousel on our page, we would create folder named carousel and in that folder we would have the HTML, the CSS for styling the carousel, the JavaScript that makes that carousel run and even the images that will be used for that carousel. Then we would have Webpack take care of importing all of our files into our project.

That image carousel would be considered a module.

The main use for Webpack is to be able to bundle different modules and import them into your project easily. Both of these front-end frameworks use a component-based design so Webpack fits in very nicely. We will be talking more about what a component-based design is in a future tab.

## Packages
- babel-loader: Will take care of translating and loading our Javascript files.
- css-loader and style-loader: Will take care of loading our CSS files.
- url-loader: Will take care of loading our images.
- html-loader: Will take care of loading our html.
- webpack-dev-server: Will replace browser-sync
- style-loader: converts the css into inline stylesheets
- css-loader: translates CSS into CommonJS
- sass-loader: compiles Sass to CSS
- react-router: will let us render specific components based on the URL
## babel-preset-env
If you pass no options to env it essentially works like es2015, es2016, es2017 all together.

## babel-preset-react-es2015
Babel to understand JSX, which allows us to define our HTML directly in our Javascript file

## Compile Webpack
Run 'webpack' from terminal

## To start the project
Run 'npm run start' from terminal
