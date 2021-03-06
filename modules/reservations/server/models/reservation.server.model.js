'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Reservation Schema
 */
var ReservationSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill in your name',
    trim: true
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  program: {
    type: String,
  },
  company: {
    type: String,
  },
  title: {
    type: String,
  },
  membership: {
    type: String,
    required: 'Membership has to be chosen'
  },
  drinkpackage: {
    type: String,
    required: 'Drink package has to be chosen'
  },
  foodpref: [{
    type: String
  }],
  other: {
    type: String
  },
  gender: {
    type: String,
    required: 'Please fill in your gender'
  },
  desiredPrograms: [{
    type: String
  }],
  price: {
    type: Number,
    default: 0
  },
  payed: {
    type: Boolean,
    default: false
  },
  ocr: {
    type: String,
    default: 'YOUR_NAME'
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  honorary: {
    type: Boolean,
    default: false
  },
  enrolled: {
    type: Boolean,
    default: false
  },
  reserve: {
    type: Boolean,
    default: false
  },
  pending: {
    type: Boolean,
    default: false
  },
  pendingdeadline: {
    type: Date,
    default: new Date()
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Reservation', ReservationSchema);
