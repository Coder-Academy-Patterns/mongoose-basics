// Imports
const mongoose = require('mongoose')

// Connect to local database
mongoose.connect('mongodb://localhost/test')

// Create a new model
const Cat = mongoose.model('Cat', { name: String, favoriteFood: String, age: Number })

// Find all cats
Cat.find((error, items) => {
    // Bad path
    if (error) {
        console.error(error.message)
    }
    // Good path
    else {
        console.log('Found', items)
    }
})

// Creating a cat
Cat.create({
    name: 'Fluffy',
    favoriteFood: 'Snickers',
    age: 11
}, (error, cat) => {
    if (error) {
        console.error(error.message)
    }
    else {
        console.log('Created', cat)
    }
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