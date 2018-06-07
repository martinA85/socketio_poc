'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoomSchema = new Schema({

    name: {
        type: String,
        required: "Chat room name missing"
    },
    create_date: {
        type: Date,
        default: Date.now
    }

});