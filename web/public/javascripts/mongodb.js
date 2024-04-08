

//global variable
let dbCollection;
let Client;


async function connectToMongoDB(){
    try {
        await Client.connect;
        console. log('Connect to MongoDB successfully!!!');
    // Do further operations with the connected database
    }catch (err) {
        console.error ('Error:', err);
    }finally {
        if (Client) {
    // Close the connection to MongoDB
            await Client.close();
            console. log('MongoDB connection closed');
            }
        }
    }
    
    async function findstudents() {
        try {
            await Client.connect();
            console.log('Connect to MongoDB successfully!!!');
            studentsCollection = Client.db(dbName).collection (collectionName);
            const students = await studentsCollection.find().toArray();
            students.forEach(students => {
            console.log('ID: ', students.ID);
            console.log( 'Name: ', students.Name);
            console.log( 'images: ', students.images);
            console.log('Majors: ',students.Majors);
            console.log('Project: ',students.Project);
            console.log('Grade: ',students.Grade);
    
        });
       
    } catch (err) {
        console.error ('Error:', err);
    }finally {
        if (Client) {
        await Client.close();
        console.log( 'MongoDB connection closed');
            }
        }
    }
    
    async function addstudent (students) {
        try { 
        await Client.connect();
        console.log('Connect to MongoDB successfully!!!');
        // select collection
        studentsCollection = Client.db(dbName).collection(collectionName);
        const result = await studentscollection. insertone(students);
        console.log('Students added successfully!!!');
        } catch (err) {
        console.error ('Error: ', err);
        } finally {
        if (Client) {
        // Close the connection to MongoDB
        await Client.close();
        console.log( 'MongoDB connection closed');
           }
        }
    }