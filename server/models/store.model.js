const mongoose = require('mongoose');

const StoreSchema = mongoose.Schema(
  {
    name:{
        type: String,
        required: [true, 'name of the store is required or things will happen'],
        minlength: [3, 'name of the store must be longer then 3 characters' ],
    },
    number:{
        type: Number,
        required: [true, 'number of the store is required or things will happen'],
        minlength: [3, 'number of the store must be longer then 3 characters' ],
    },
    isOpen:{
        type: Boolean,
        required: [true, 'Must Select an Option'],
    }
  },
  { timestamps: true }
);

const Store = mongoose.model('Store', StoreSchema); //name of collection goes here

module.exports = Store;