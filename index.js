

// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Person = require('./person'); 

// // Load environment variables from .env file
// dotenv.config();

// // Retrieve the MongoDB URI from environment variables
// const mongoURI = process.env.MONGO_URI;

// // Connect to MongoDB
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB successfully');

//     // Creating new person
//     const newPerson = new Person({
//       name: 'Rohz Albert',
//       age: 23,
//       favoriteFoods: ['Pizza', 'Burgers', 'Ice Cream']
//     });

//     // Saving to database
//     return newPerson.save();
//   })
//   .then((person) => {
//     console.log('Person saved successfully:', person);
//     mongoose.connection.close(); // Close the connection after saving
//   })
//   .catch((err) => {
//     console.error('Error:', err);
//     mongoose.connection.close(); // Close the connection in case of an error
//   });






// Create Many Records with model.create()

// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Person = require('./person'); 

// // Load environment variables from .env file
// dotenv.config();

// // Retrieve the MongoDB URI from environment variables
// const mongoURI = process.env.MONGO_URI;

// // Array of people to be created
// const arrayOfPeople = [
//   { name: 'John Doe', age: 25, favoriteFoods: ['Pizza', 'Pasta'] },
//   { name: 'Jane Smith', age: 30, favoriteFoods: ['Sushi', 'Steak'] },
//   { name: 'Emily Johnson', age: 22, favoriteFoods: ['Burgers', 'Fries'] },
//   { name: 'Michael Brown', age: 35, favoriteFoods: ['Salad', 'Soup'] },
//   { name: 'Sarah Wilson', age: 28, favoriteFoods: ['Ice Cream', 'Cake'] }
// ];

// // Async function to connect to MongoDB and create multiple records
// async function createPeople() {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('Connected to MongoDB successfully');

//     const people = await Person.create(arrayOfPeople);
//     console.log('People created successfully:', people);

//     // Close the connection after saving
//     await mongoose.connection.close();
//   } catch (err) {
//     console.error('Error:', err);
//     await mongoose.connection.close(); // Close the connection in case of an error
//   }
// }

// // Call the function to create and save multiple records
// createPeople();




// Use model.find() to Search Your Database

// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Person = require('./person'); 

// // Load environment variables from .env file
// dotenv.config();

// // Retrieve the MongoDB URI from environment variables
// const mongoURI = process.env.MONGO_URI;

// // Async function to connect to MongoDB and search for people by name
// async function findPeopleByName(name) {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('Connected to MongoDB successfully');

//     // Find all people with the given name
//     const people = await Person.find({ name: name });
//     console.log('People found:', people);

//     // Close the connection after searching
//     await mongoose.connection.close();
//   } catch (err) {
//     console.error('Error:', err);
//     // Close the connection in case of an error
//     await mongoose.connection.close();
//   }
// }

// // Call the function to find people by name
// findPeopleByName('John Doe'); 




// Use model.findOne() to Return a Single Matching Document from Your Database

// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Person = require('./person'); 

// // Load environment variables from .env file
// dotenv.config();

// // Retrieve the MongoDB URI from environment variables
// const mongoURI = process.env.MONGO_URI;

// // Async function to connect to MongoDB and find one person by favorite food
// async function findPersonByFavoriteFood(food) {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('Connected to MongoDB successfully');

//     // Find one person with the specified favorite food
//     const person = await Person.findOne({ favoriteFoods: food });
    
//     if (person) {
//       console.log('Person found:', person);
//     } else {
//       console.log('No person found with favorite food:', food);
//     }

//     // Close the connection after searching
//     await mongoose.connection.close();
//   } catch (err) {
//     console.error('Error:', err);
//     // Close the connection in case of an error
//     await mongoose.connection.close();
//   }
// }

// // Call the function to find a person by favorite food
// findPersonByFavoriteFood('Pizza'); 





// Use model.findById() to Search Your Database By _id

// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Person = require('./person'); 

// // Load environment variables from .env file
// dotenv.config();

// // Retrieve the MongoDB URI from environment variables
// const mongoURI = process.env.MONGO_URI;

// // Async function to connect to MongoDB and find a person by _id
// async function findPersonById(personId) {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('Connected to MongoDB successfully');

//     // Find one person by _id
//     const person = await Person.findById(personId);
    
//     if (person) {
//       console.log('Person found:', person);
//     } else {
//       console.log('No person found with _id:', personId);
//     }

//     // Close the connection after searching
//     await mongoose.connection.close();
//   } catch (err) {
//     console.error('Error:', err);
//     // Close the connection in case of an error
//     await mongoose.connection.close();
//   }
// }

// // Call the function to find a person by _id
// findPersonById('666ce146e42f55d6b7c35316'); 





// Perform Classic Updates by Running Find, Edit, then Save

// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Person = require('./person'); 

// // Load environment variables from .env file
// dotenv.config();

// // Retrieve the MongoDB URI from environment variables
// const mongoURI = process.env.MONGO_URI;

// // Async function to connect to MongoDB, find a person by _id, update their favoriteFoods, and save the document
// async function updateFavoriteFoods(personId) {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('Connected to MongoDB successfully');

//     // Find the person by _id
//     const person = await Person.findById(personId);
    
//     if (person) {
//       console.log('Person found:', person);
      
//       // Add "hamburger" to the list of the person's favoriteFoods
//       person.favoriteFoods.push('Hamburger');

//       // Mark the favoriteFoods array as modified if it's of Mixed type
//       person.markModified('favoriteFoods');

//       // Save the updated person document
//       const updatedPerson = await person.save();
//       console.log('Person updated successfully:', updatedPerson);
//     } else {
//       console.log('No person found with _id:', personId);
//     }

//     // Close the connection after updating
//     await mongoose.connection.close();
//   } catch (err) {
//     console.error('Error:', err);
//     // Close the connection in case of an error
//     await mongoose.connection.close();
//   }
// }

// // Call the function to find a person by _id and update favoriteFoods
// updateFavoriteFoods('666ce146e42f55d6b7c35316'); 





// Perform New Updates on a Document Using model.findOneAndUpdate()

// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Person = require('./person'); 

// // Load environment variables from .env file
// dotenv.config();

// // Retrieve the MongoDB URI from environment variables
// const mongoURI = process.env.MONGO_URI;

// // Async function to connect to MongoDB, find a person by name, and update their age
// async function updatePersonAge(personName) {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('Connected to MongoDB successfully');

//     // Find the person by name and update their age to 20
//     const updatedPerson = await Person.findOneAndUpdate(
//       { name: personName }, // Search criteria
//       { age: 20 }, // Update operation
//       { new: true } // Return the updated document
//     );

//     if (updatedPerson) {
//       console.log('Person updated successfully:', updatedPerson);
//     } else {
//       console.log('No person found with name:', personName);
//     }

//     // Close the connection after updating
//     await mongoose.connection.close();
//   } catch (err) {
//     console.error('Error:', err);
//     // Close the connection in case of an error
//     await mongoose.connection.close();
//   }
// }

// // Call the function to find a person by name and update  age
// updatePersonAge('Rohz Albert'); 





// Delete One Document Using model.findByIdAndRemove

// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Person = require('./person'); 

// // Load environment variables from .env file
// dotenv.config();

// // Retrieve the MongoDB URI from environment variables
// const mongoURI = process.env.MONGO_URI;

// // Async function to connect to MongoDB, find a person by _id, and remove them
// async function removePersonById(personId) {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('Connected to MongoDB successfully');

//     // Find the person by _id and remove them
//     const removedPerson = await Person.findByIdAndDelete(personId);

//     if (removedPerson) {
//       console.log('Person removed successfully:', removedPerson);
//     } else {
//       console.log('No person found with _id:', personId);
//     }

//     // Close the connection after removing
//     await mongoose.connection.close();
//   } catch (err) {
//     console.error('Error:', err);
//     // Close the connection in case of an error
//     await mongoose.connection.close();
//   }
// }

// // Call the function to find a person by _id and remove them
// removePersonById('666ce0acecc589da6cb04c98'); 




// MongoDB and Mongoose - Delete Many Documents with model.remove()

// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Person = require('./person'); 

// // Load environment variables from .env file
// dotenv.config();

// // Retrieve the MongoDB URI from environment variables
// const mongoURI = process.env.MONGO_URI;

// // Async function to connect to MongoDB, delete all people named "Mary", and handle the result
// async function deletePeopleNamedMary() {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('Connected to MongoDB successfully');

//     // Define the query to find all people named "Mary"
//     const query = { name: 'Mary' };

//     // Delete all documents that match the query
//     const result = await Person.deleteMany(query);

//     console.log('Delete operation result:', result);

//     // Close the connection after the operation
//     await mongoose.connection.close();
//   } catch (err) {
//     console.error('Error:', err);
//     // Close the connection in case of an error
//     await mongoose.connection.close();
//   }
// }

// // Call the function to delete all people named "Mary"
// deletePeopleNamedMary();





// Chain Search Query Helpers to Narrow Search Results

// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Person = require('./person'); 

// // Load environment variables from .env file
// dotenv.config();

// // Retrieve the MongoDB URI from environment variables
// const mongoURI = process.env.MONGO_URI;

// // Async function to connect to MongoDB, find people who like burritos, sort, limit, select, and execute the query
// async function findPeopleWhoLikeBurritos(done) {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('Connected to MongoDB successfully');

//     // Chain query helpers to find people who like burritos, sort by name, limit to 2, and exclude age
//     const people = await Person.find({ favoriteFoods: 'Burritos' })
//       .sort('name')
//       .limit(2)
//       .select('-age')
//       .exec();

//     console.log('People found:', people);

//     await mongoose.connection.close(); // Close the connection after the query
//     done(null, people); // Call the callback function with the data
//   } catch (err) {
//     console.error('Error:', err);
//     await mongoose.connection.close();
//     done(err, null); // Call the callback function with the error
//   }
// }

// // Define the callback function
// function done(err, data) {
//   if (err) {
//     console.error('Error:', err);
//   } else {
//     console.log('Data:', data);
//   }
// }

// // Call the function to find people who like burritos
// findPeopleWhoLikeBurritos(done);
