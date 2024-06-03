const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 8000;

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

app.post('/', (req, res) => {
	console.log(req.body);
	fs.writeFile('output.json', JSON.stringify(req.body), (err) => {
		if (err) {
			console.error(err);
			res.status(500).send('Internal Server Error');
		} else {
			res.send('Data received');
		}
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
