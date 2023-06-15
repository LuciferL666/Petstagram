# Info File

1. Initialize project and structure
 - npm init --yes
 - making folder src and inside making file index.js
2. Setup dev environment
 - npm i -D nodemon
3. Install and setup express
 - npm i express
 * B, Add static middleware
 * C, Add body parser
 * D, Add routes
4. Add static resources 
 - create public folder put inside css, images
5. Add views folder with ready htmls
 - create views folder put inside htmls files
6. Add express-handlebars view engine
 - npm i express-handlebars
 * Install
 * A, Add to express
 * B, Config extension
 * C, Config views folder (only if src is used)
 * D, Create folder layout with file main for main parts of html 
 * Add partials folder (creating in folder views partials folder)
 - E, Render home page (in router and making home.html to home.hbs)
 * F, Fix static paths (to fix it can rename public folder to static or remove static in main.hbs from: src="/static/images/ and from: /static/css/styles.css)
