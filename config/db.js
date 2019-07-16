const mongoose = require('mongoose');
const config = require('config');
const dbUrl = config.get('mongoURI');

const connectDB = async () => {
	try {
		await mongoose.connect(dbUrl, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false
		});

		console.log('MongoDB is connected....');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;

// I added these 3 properties to the connect method parameters to avoid some bugs
