const express = require('express');
const bodyParser = require('body-parser');
const port = 3000
const path = require('path');
const studentsModule = require('./public/javascripts/students');
const fs = require('fs');


const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const Client = new MongoClient(url);
const dbName = 'mydata';
const collectionName = 'students';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

studentsList = studentsModule.students;

const htmlPath = path.join(__dirname, 'public/pages');



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/pages/home.html');
});

app.get('/students', (req, res) => {
    res.sendFile(path.join(htmlPath, '/students.html'));
})

app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/pages/search.html'));
});

app.use(express.static(path.join(__dirname,'/public/images')));
app.get('/Show',(req,res) => {
    let html = studentsModule.output(studentsList)
    res.send(html)
})




app.post('/addstudents', (req,res) => {
    /*const ID = "SV22748010300" + String(studentsList.length + 1).padStart(2,"0");
    const images = req.body.images;
    const Name = req.body.Name;
    const Majors = req.body.Majors;
    const Project = req.body.Project;
    const Grade = req.body.Grade;
    const newStudent = {ID,images,Name,Majors,Project,Grade};
    studentsList.push(newStudent);
    fs.writeFile('./students.js', `let students = ${JSON.stringify(studentsList)}`, err => {
        if (err) {
          res.status(500).send('Error updating students.js');
        } else {
          res.redirect('/Show');
        }
      });*/
      const students = req.body;
     console.log(students);

  // Connect to MongoDB
  MongoClient.connect(url, (err, client) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error connecting to database' });
    }

    const db = client.dbName("mydata"); // Replace with your database name
    const collection = db.collectionName("students"); // Replace with your collection name

    // Insert users using insertMany()
    collection.insertMany(students, (insertErr, result) => {
      if (insertErr) {
        console.error(insertErr);
        return res.status(500).json({ message: 'Error inserting users' });
      }

      const message = `${result.insertedCount} users created successfully!`;
      res.json({ message: message });
    });

    client.close();
  });
});

app.get('/update', (req, res) => {
    res.sendFile(path.join(htmlPath, '/update.html'));
});

app.post('/update', (req, res) => {
    const studentId = req.body.studentId;
    const newName = req.body.newName;
    const newMajors = req.body.newMajors;
    const newProject = req.body.newProject;
    const newGrade = req.body.newGrade;
    const success = studentsModule.updateStudent(studentId, newName, newMajors, newProject, newGrade);
    if (success) {
        res.send('Student information updated successfully.');
    } else {
        res.send('Student not found or information cannot be updated.');
    }
});

//READ: có điều kiện
app.get('/', async (req, res) => {
    try {
        // kết nối tới MongoDB
        const client = await MongoClient.connect(url);
        console.log("Connected successfully to server");

        const db = client.dbName("mydata");
        
        // Read documents
        const collection = db.collectionName('students');
        const students = await collection.find({}).toArray();
        
        res.send(students);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    } finally {
        // Close connection
        Client.close();
    }
});

// CREATE: insertMany
app.post('/create', async (req, res) => {
    try {
        const data = req.body;
        
        // Connect to MongoDB
        const client = await MongoClient.connect(url);
        console.log("Connected successfully to server");

        const db = client.dbName("mydata");
        
        // Insert documents
        const collection = db.collectionName('students');
        await collection.insertMany(data);
        
        res.send("Data inserted successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    } finally {
        // Close connection
        Client.close();
    }
});

// UPDATE: updateMany
app.put('/update', async (req, res) => {
    try {
        const filter = req.body.filter;
        const update = req.body.update;
        
        // Connect to MongoDB
        const client = await MongoClient.connect(url);
        console.log("Connected successfully to server");

        const db = client.dbName("mydata");
        
        // Update documents
        const collection = db.collectionName('students');
        await collection.updateMany(filter, update);
        
        res.send("Data updated successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    } finally {
        // Close connection
        Client.close();
    }
});



app.listen(port, () => console.log(`Server running at http://127.0.0.1:${port}/`));

