/*
const MongoClient = require('mongodb').MongoClient


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dudu_rikoto:<password>@cluster0.ex2iamx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/



const readline = require('readline'); // creating our first real web server, capable of accepting a request and sending response
const fs = require('fs');

// The first thing to do in order to create a server in nodejs is to import a package called HTTP using require function
// and pass a module called http and it is going to return an object
const http = require('http');

//Two things to be done before building a web server - create server - start the server

// Step 1: create a server - insert a callback function - this function will be executed everytime a new request hit the server

// The finction recieve two areguments a request and a response
// The server created is an object so we pass it to a varaible called say app

const HTML = fs.readFileSync('./public/index.html', 'utf-8')
const HTML1 = fs.readFileSync('./public/aboutme.html', 'utf-8')
const HTML2 = fs.readFileSync('./public/albums.html', 'utf-8')
const artist = JSON.parse(fs.readFileSync('./public/music.json', 'utf-8'))
const productListHtml = fs.readFileSync('./public/product-list.html', 'utf-8')

let musicalbum = artist.map((prox) => {
    let output = productListHtml.replace('{{%genre%}}', prox.Genre);
    output = output.replace('{{%artist%}}', prox.Artist);
    output = output.replace('{{%album%}}', prox.Album);
    output = output.replace('{{%year%}}', prox.Year);
    output = output.replace('{{%review%}}', prox.Review);
    output = output.replace('{{%artistimage%}}', prox.ArtistImage);

    return output;
});

const app = http.createServer((req, res) => {
    let path = req.url;

    if(path === '/' || path.toLocaleLowerCase === '/home'){
        res.writeHead(200, {'Header-Content' : 'text/html', 'my-Header' : 'Hurray!'});
        res.end(HTML);
    }else if(path.toLocaleLowerCase() === '/about'){
        res.writeHead(200, {'Header-Content' : 'text/html', 'my-Header' : 'Hurray!'});
        res.end(HTML1);
    }else if(path.toLocaleLowerCase() === '/album'){
        res.writeHead(200, {'Header-Content' : 'text/html', 'my-Header' : 'Hurray!'});
        res.end(HTML2);
    } else if(path.toLocaleLowerCase() === '/artist'){
        let artistresponse = productListHtml.replace(productListHtml, musicalbum.join(','));
        res.writeHead(200, {'Header-Content' : 'text/html', 'my-Header' : 'Hurray my music list!'});
       res.end(artistresponse)
       //console.log(musicalbum.join(','));
       //console.log(artist);

    }else{
        res.writeHead(404, {'Header-Content' : 'text/html', 'my-Header' : 'Hurray!'});
        res.end('<h1>Error 404: Page not found!</h1>');
    }
    
    console.log('A new request recieved.');
    //res.end(HTML);
    //console.log(req);
    //console.log(res);
});

// Step 2: start a server - we call a method called listen - its the port no., localhost, and a callback function

app.listen(8080, '127.0.0.1', () => {
    console.log('Server has started!');
});

