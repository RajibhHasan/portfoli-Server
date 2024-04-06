const express = require("express");
require("dotenv").config();
const os = require('os');







const app = express();
const {
	MongoClient,
	ServerApiVersion
} = require('mongodb');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');




const mongoose = require('mongoose');

const Comment = require("./routers/emailRouter.js");
const cors = require("cors");
const notFoundHandler = require("./controler/notFound.js");
const smsRouter = require("./routers/smsRouter.js");
const logoRouter = require("./routers/logoRouter.js");

const postRouter = require("./routers/postRouter.js");
const UserRouter= require("./routers/UserRouter.js");


// home route
app.get("/", (req, res) => {
	res.json({
		message: "Hello frend try to end point "
	});
});
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());
app.use(cors());
app.use(express.static('public'))
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.use(Comment);
app.use(smsRouter);
app.use(logoRouter)
app.use(UserRouter)
app.use(postRouter)
app.use(notFoundHandler);

const uri = process.env.DATABASE_URL






async function run() {
	mongoose.connect(uri)
	.then(() => {
		console.log('MongoDB Connected')

	})
	.catch(err => console.error('Error connecting to MongoDB', err));

}















app.listen(process.env.PORT, async () => {
	console.log("App is runing:5175");
	await run();
const networkInterfaces = os.networkInterfaces();

// Find the IPv4 address of the first network interface that is not internal or loopback
const ipAddress = Object.values(networkInterfaces)
    .flat()
    .find(interface => !interface.internal && interface.family === 'IPv4')
    .address;

console.log('Server IP Address:', ipAddress);

});