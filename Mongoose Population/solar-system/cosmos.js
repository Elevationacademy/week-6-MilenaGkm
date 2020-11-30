const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/mongoose-pop-cosmos", { useNewUrlParser: true, useUnifiedTopology: true })

const Schema = mongoose.Schema


const PlanetarySystemSchema = new Schema({
	planets: [{type: Schema.Types.ObjectId, ref: 'Planet'}],
	starName: String
})

const PlanetSchema = new Schema({
	name: String,
	system: {type: Schema.Types.ObjectId, ref: 'PlanetarySystem'},
	visitors: [{type: Schema.Types.ObjectId, ref: 'Visitor'}]
})

const VisitorSchema = new Schema({
	name: String,
	homePlanet: {type: Schema.Types.ObjectId, ref: 'Planet'},
	visitedPlanets: [{type: Schema.Types.ObjectId, ref: 'Planet'}]
})


const PlanetarySystem = mongoose.model('PlanetarySystem', PlanetarySystemSchema)
const Planet = mongoose.model('Planet', PlanetSchema)
const Visitor = mongoose.model('Visitor', VisitorSchema)


let SolarSystem = new PlanetarySystem ({
	planets: [],
	starName: 'Sun'
})



let p1 = new Planet({
	name: 'Mercury',
	system: SolarSystem,
	visitors: []
})

let p2 = new Planet({
	name: 'Venus',
	system: SolarSystem,
	visitors: []
})

let p3 = new Planet({
	name: 'Earth',
	system: SolarSystem,
	visitors: []
})

let p4 = new Planet({
	name: 'Mars',
	system: SolarSystem,
	visitors: []
})

let p5 = new Planet({
	name: 'Jupiter',
	system: SolarSystem,
	visitors: []
})

let p6 = new Planet({
	name: 'Saturn',
	system: SolarSystem,
	visitors: []
})

let p7 = new Planet({
	name: 'Uranus',
	system: SolarSystem,
	visitors: []
})

let p8 = new Planet({
	name: 'Neptune',
	system: SolarSystem,
	visitors: []
})



let v1 = new Visitor({
	name: 'Jake',
	homePlanet: p3,
	visitedPlanets: []
})

let v2 = new Visitor({
	name: 'Mitch',
	homePlanet: p3,
	visitedPlanets: []
})

let v3 = new Visitor({
	name: 'Ella',
	homePlanet: p3,
	visitedPlanets: []
})

let v4 = new Visitor({
	name: 'Luke',
	homePlanet: p4,
	visitedPlanets: []
})

let v5 = new Visitor({
	name: 'Fipo',
	homePlanet: p1,
	visitedPlanets: []
})

let v6 = new Visitor({
	name: 'Igvon',
	homePlanet: p5,
	visitedPlanets: []
})

let v7 = new Visitor({
	name: 'Don KeyD Ik',
	homePlanet: p7,
	visitedPlanets: []
})



// SolarSystem.planets.push(p1, p2, p3, p4, p5, p6, p7, p8)

// p1.visitors.push(v1, v3, v4, v7)
// p2.visitors.push(v1, v2, v3, v4, v5, v6, v7)
// p3.visitors.push(v5, v7)
// p4.visitors.push(v2, v6, v7)
// p5.visitors.push(v3, v4, v5, v7)
// p6.visitors.push(v1, v2, v3, v4, v5, v6, v7)
// p8.visitors.push(v5, v6, v7)

// v1.visitedPlanets.push(p1, p2, p6)
// v2.visitedPlanets.push(p2, p4, p6)
// v3.visitedPlanets.push(p1, p2, p5, p6)
// v4.visitedPlanets.push(p1, p2, p5, p6)
// v5.visitedPlanets.push(p2, p3, p5, p6, p8)
// v6.visitedPlanets.push(p2, p4, p6, p8)
// v7.visitedPlanets.push(p1, p2, p3, p4, p5, p6, p8)

// SolarSystem.save()

// p1.save()
// p2.save()
// p3.save()
// p4.save()
// p5.save()
// p6.save()
// p7.save()
// p8.save()

// v1.save()
// v2.save()
// v3.save()
// v4.save()
// v5.save()
// v6.save()
// v7.save()


Visitor.findOne({}, function(err, visitor) {
	visitor.populate('visitedPlanets', function() {
		console.log(visitor.visitedPlanets);
	})
})

Planet.findOne({}, function(err, planet) {
	planet.populate('visitors', function() {
		console.log(planet.visitors);
	})
})

// Planet.findOne({name: 'Neptune'})
// 	.populate('visitors').exec( function(err,visitors) {
// 		console.log(visitors);
// })

PlanetarySystem.findOne({})
	.populate({
		path: 'planets',
		populate: {
			path: 'visitors'
		}
	})
	.exec(function(err, system) {
		console.log(system.planets);
	})