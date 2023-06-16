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
 * Install express
 * A, Add to express
 * B, Config extension
 * C, Config views folder (only if src is used)
 * D, Create folder layout with file main for main parts of html 
 * Add partials folder (creating in folder views partials folder)
 - E, Render home page (in router and making home.html to home.hbs)
 * F, Fix static paths (to fix it can rename public folder to static or remove  
    static in main.hbs from: src="/static/images/ and from: /static/css/styles.css)
  * Rework link to <!-- Link to Home Page --> simply like this <!--('<a href="/">' -->   
    and also this <!-- <a class="home" href="/">") -->
7. A, Add controllers folder with home controller(create Controllers folder in src with file home Controller) 
 - B, Moving render home from routers file to homeController file
8. Add database 
 * Install mongoose (npm i mongoose)
 * A, Connect data base (IN INDEX)
9. Authentication
 * A, Add user controller (in folder controller file userController)
 * B, Add controllers to file routes
 * C, Render login page (in file userController)
 - Make file "users" in folder views and move login.html
 - Edit login page by removing all accept 'main' and rename to hbs
 * fix header navigation to login and register simply by making link for Login    
   looks like this (href="/users/login" and Register "href="/users/register" and Logout "href="/users/logout"")
 * D, Render register page in file user controller
 - Also we need to move register.html to folder user, edit register by delete all accept main and rename to hbs
10. A, Add user model (create folder models in src with file User.js)
 * B, Add unique index for username
 * C, Validate repeat (password IN User.js)
11. Add user manager (create folder managers in src with file userManager.js)
 * A, Add login and register methods (empty)
 * B, Require in user controller (in userController.js)
12. A, Modify login and register forms (in login.hbs and register.hbs) 
13. A, Add login and register post actions (in userController.js)
14. A, Implement user manager login and register in (userController.js)
  * Add register method
  * Add login method
  * B, Validate if user already exists(in User.js and userManager.js)
15. Hash password
  * Install bcrypt(npm i bcrypt)
  * A, Hash password
16. Login
  * A, Find user by username (in userManager.js)
  * B, Validate password with hash (in userManager.js)
17. Generate jwt token
  * install jsonwebtoken(npm i jsonwebtoken)
  * A, promisify jsonwebtoken (optional) (making in src folder lib with file jwt.js)
  * B, Generate token in manager.login(in userManager.js after in userController.js)
18. Return token in cookie
  * Install cookie parser(npm i cookie-parser)
  * A, Config cookie parser(in index.js)
  * B, Set cookie with token(in userController.js)