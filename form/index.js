const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('public'))

app.get('test_server', function(req, res, next){

    res.send(
        
            <div>
                <h1>Submit Form Data in Node.js</h1>
                <div>
                    <div>Sample Form</div>
                    <div>
                        <form method="POST" action="/">
                            <div>
                                <label>First Name:</label>
                                <input type="text" name="first_name" id="first_name" class="form-control"/>
                            </div>
                            <div>
                                <label>Last Name:</label>
                                <input type="text" name="last_name" id="last_name" class="form-control"/>
                            </div>
                            <div>
                                <label>Email Address:</label>
                                <input type="text" name="email_address" id="email_address" class="form-control"/>
                            </div>
                            <div>
                                <label>Email Address:</label>
                                <input type="submit" name="submit_button" id="submit_button" class="btn btn-primary" value="Add"/>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
       
    );

});

app.listen(8000, '127.0.0.1', () => {
    console.log('Server has started!');
});