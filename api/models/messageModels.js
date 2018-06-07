'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({

    Text: {
        type: String,
        required: "message must have a text"
    },
    send_date: {
        type: Date,
        default: Date.now
    }

});