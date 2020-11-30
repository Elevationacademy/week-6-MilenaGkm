const mongoose = require('mongoose')

const Schema = mongoose.Schema

// const personSchema = new Schema({
// 	firstName: String,
// 	lastName: String,
// 	age: Number,
// 	address : addressSchema
// })
  
const personSchema = new Schema({
	firstName: String,
	lastName: String,
	age: Number,
  })
  

const Person = mongoose.model('person', personSchema)
module.exports = Person

// let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }) //purposefully ignoring the `address` field
// console.log(p1);
// p1.save()

// let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
// let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
// let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
// let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

// let allTheShooberts = [p2, p3, p4, p5]
// allTheShooberts.forEach(s => s.save())


// Person.find({}, function(err, res) {
// 	console.log(res);
// })
