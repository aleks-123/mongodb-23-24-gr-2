const mongoose = require('mongoose');

exports.connectToDatabase = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://aleksandar:YRzFP7MITu4YfYZo@cluster0.dle0u6v.mongodb.net/vtorChas?retryWrites=true&w=majority'
    );
    console.log('Successfully connected to database!');
  } catch (err) {
    console.log(err);
  }
};
