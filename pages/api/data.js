import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/data', (req, res) => {
	console.log(req.body); // Log the received data
	res.send('Data received');
});

app.listen(port, () => {
	console.log(`Server running at http://192.168.1.40:${port}/`);
});
