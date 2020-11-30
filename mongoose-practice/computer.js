const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/computerDB', { useNewUrlParser: true, useUnifiedTopology: true })

const Schema = mongoose.Schema

const computerSchema = new Schema({
	maker: String,
	price: Number
})

const Computer = mongoose.model('Computer', computerSchema)

let c1 = new Computer({maker: "Asus", price: 850})
let c2 = new Computer({maker: "Apple", price: 9001})
let c3 = new Computer({maker: "Lenovo", price: 350})

// c1.save()
// c2.save()
// c3.save()

Computer.find({}, function(err, res) {
	console.log(res);
})