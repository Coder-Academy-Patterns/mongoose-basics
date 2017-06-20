// Imports
const mongoose = require('mongoose')

// Connect to local database
mongoose.connect('mongodb://localhost/test')

// Create a new model
const Cat = mongoose.model('Cat', { name: String, favoriteFood: String, age: Number })

// Find all cats query
const catFindPromise = Cat.find()

// Running the query
Cat.find()
    // Good path
    .then(items => {
        console.log('Found', items)

        // Creating the cat
        return Cat.create({
            name: 'Feral',
            favoriteFood: 'Australian wildlife',
            age: 100
        })
    })
    .then(newCat => {
        // Update a cat
        return Cat.update({ name: 'Feral' }, { favoriteFood: 'Rehab Food' })
    })
    // When something bad happens, it will error
    .catch((error) => {
        // Then any error in creating
        console.error('Error in finding or creating or updating cats', error.message)
    })

// Update ALL cats named Fluffy, and increment their ages by 1
Cat.update(
    { name: 'Fluffy' }, // Conditions
    { $inc: { age: 1 } }, // Changes
    { multi: true }, // Options
    (error) => {
    if (error) {
        console.error(error.message)
    }
})

// Remove all cats named fluffy
// Cat.remove({ name: 'Fluffy' }, (error) => {
//     if (error) {
//         console.error(error.message)
//     }
// })

// // Update a cat
// Cat.findByIdAndUpdate('594872f655f7990e3c4bd2e0', {
//     //name: 'Fluffy',
//     favoriteFood: 'Sardines',
//     age: 12
// }, (error, updatedCat) => {
//     if (error) {
//         console.error(error.message)
//     }
//     else {
//         console.log('Updated', updatedCat)
//     }
// })

// // Remove a cat
// Cat.findByIdAndRemove('594872f655f7990e3c4bd2e0', (error, removedCat) => {
//     if (error) {
//         console.error(error.message)
//     }
//     else {
//         console.log('Removed', removedCat)
//     }
// })

// Allow our app to stop
mongoose.disconnect()