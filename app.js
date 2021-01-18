const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    
   // res.send('<p> home page </p>'); // need not to write  res.setHeader('Content-Type', 'text/html');
   res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    
  //  res.send('<p> About page </p>'); // need not to write  res.setHeader('Content-Type', 'text/html');
res.sendFile('./views/about.html', {root: __dirname});
});


// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});

}); // it will fire that 404 page if above results will not match the user's request.
// and it always has to be at bottom, if  it will be on the top,
// then it will always redirect to 404 page no matter, if user try to go to a valid page.