//Mohammed Vazhanthodi - 301301707

//importing express framework
const express = require('express');
const app = express();
//importing hbs templating engine
const hbs = require('hbs');
//node.js inbuilt module to work with files and directories
const path = require('path');

const port = process.env.PORT || 3000;

//Sets the directory where the views (HTML templates) are located.
const static_path = path.join(__dirname, '../views');

//Specifies the directory for Handlebars partials, which are reusable template components
const partials_path = path.join(__dirname, '../views/partials');

//Sets Handlebars as the view engine for rendering templates.
app.set('view engine', 'hbs');

//sets the directory where views are located
app.set('views', static_path);

//for serving CSS, JavaScript, images, and other assets.
app.use('/public', express.static(path.join(__dirname, "../public")));

// for serving CSS and js files from the Bootstrap library.
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));

//registering Handlebars partials, allowing you to use reusable components in your templates.
hbs.registerPartials(partials_path);

//deefining roots and rendering template
app.get('/', (req, res) => {
    res.render("home")
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.get('/services', (req, res) => {
    res.render("services");
});

app.get('/projects', (req, res) => {
    res.render("projects");
});

app.get('/contact', (req, res) => {
    res.render("contact");
});

//Starting the server
app.listen(port, () => {
    console.log(`listing to the port at ${port}`);
})