let students  = [
    {ID: "SV2274801030021", images:"b1.jpg" ,Name: "John Doe", Majors: "Computer Science", Project: "E-commerce website", Grade: "8.5"},
    {ID: "SV2274801030022", images:"b2.jpg",Name: "Jane Smith", Majors: "Software Engineering", Project: "Big data analysis", Grade: "9.0"},
    {ID: "SV2274801030023", images:"b3.jpg",Name: "Michael Johnson", Majors: "Information Systems", Project: "Student management system", Grade: "7.5"},
    {ID: "SV2274801030024", images:"b4.png",Name: "Emily Davis", Majors: "Computer Networks", Project: "LAN setup", Grade: "8.0"},
    {ID: "SV2274801030025", images:"b5.jpg",Name: "David Wilson", Majors: "Artificial Intelligence", Project: "AI system", Grade: "9.5"},
    {ID: "SV2274801030026", images:"b6.png",Name: "Sarah Miller", Majors: "Information Security", Project: "Network attack prevention", Grade: "8.5"},
    {ID: "SV2274801030027", images:"b7.png",Name: "Robert Brown", Majors: "Interface Design", Project: "Website design", Grade:"7.0"},
    {ID: "SV2274801030028", images:"b8.jpg",Name: "Jessica Moore", Majors: "Data Analysis", Project: "House price prediction", Grade: "9.0"},
    {ID: "SV2274801030029", images:"b9.jpg",Name: "William Taylor", Majors: "Data Science", Project: "Text classification", Grade: "8.0"},
    {ID: "SV2274801030030", images:"b10.jpg",Name: "Linda Anderson", Majors: "Data Engineering", Project: "Recommendation system", Grade: "9.5"},
    {ID: "SV2274801030031", images:"g1.jpg",Name: "Richard Thomas", Majors: "Software Engineering", Project: "Mobile application", Grade: "8.5"},
    {ID: "SV2274801030032", images:"g2.jpg",Name: "Patricia Jackson", Majors: "Information Systems", Project: "HR management", Grade: "9.0"},
    {ID: "SV2274801030033", images:"g3.jpg",Name: "James White", Majors: "Computer Networks", Project: "WAN setup", Grade: "7.5"},
    {ID: "SV2274801030034", images:"g4.png",Name: "Jennifer Harris", Majors: "Artificial Intelligence", Project: "AI for self-driving cars", Grade: "8.0"},
    {ID: "SV2274801030035", images:"g5.jpg",Name: "Charles Martin", Majors: "Information Security", Project: "Network attack prevention for businesses", Grade: "9.5"},
    {ID: "SV2274801030036", images:"g6.png",Name: "Dorothy Thompson", Majors: "Interface Design", Project: "Mobile application design", Grade: "8.5"},
    {ID: "SV2274801030037", images:"g7.jpg",Name: "Daniel Garcia", Majors: "Data Analysis", Project: "Stock price prediction", Grade: "7.0"},
    {ID: "SV2274801030038", images:"g8.jpg",Name: "Mary Martinez", Majors: "Data Science", Project: "Image classification", Grade: "9.0"},
    {ID: "SV2274801030039", images:"g9.jpg",Name: "Joseph Robinson", Majors: "Data Engineering", Project: "Movie recommendation system", Grade: "8.0"},
    {ID: "SV2274801030040", images:"g10.png",Name: "Susan Clark", Majors: "Computer Science", Project: "News website", Grade: "9.5"}
  ];

function output(studentsList) {
    let html = `
    <a href="./pages/index.html">Trang chủ</a>

        <table style="width: 100%; border-collapse:collapse;">
            <tr>
                <th style="border: 1px solid black; padding: 8px;">ID</th>
                <th style="border: 1px solid black; padding: 8px;">images</th>
                <th style="border: 1px solid black; padding: 8px;">Name</th>
                <th style="border: 1px solid black; padding: 8px;">Majors</th>
                <th style="border: 1px solid black; padding: 8px;">Project</th>
                <th style="border: 1px solid black; padding: 8px;">Grade</th>
            </tr>`;

    studentsList.forEach(students => {
        html += `<tr>
                    <td style="border: 1px solid black; padding: 8px;">${students.ID}</td>
                    <td style="border: 1px solid black; padding: 8px; max-width:10px;">
                        <img src="${students.images}" alt="Ảnh ${students.images}" style="max-width:100px;">
                    </td>
                    <td style="border: 1px solid black; padding: 8px;">${students.Name}</td>
                    <td style="border: 1px solid black; padding: 8px;">${students.Majors}</td>
                    <td style="border: 1px solid black; padding: 8px;">${students.Project}</td>
                    <td style="border: 1px solid black; padding: 8px;">${students.Grade}</td>
                 </tr>`;
    });

    html += `</table>`;
    return html;
}
function update(newStudent) {
    students.push(newStudent); 
    fs.writeFile('students.js', `let students = ${JSON.stringify(students)};`, (err) => {
        if (err) throw err;
        console.log('Data updated!');
    });
}
function generateId() {
    let maxId = 0;
    for(let i = 0; i < student.length; i++){
        const studentId = parseInt(students[i].ID.slice(3));
        if(studentId > maxId) {
            maxId = studentId;
        }
    }
    return 'SV22748010300' + String(maxId + 1).padStart(2, '0');
  }
  function update(newStudent) {
      students.push(newStudent); // Thêm sinh viên mới vào danh sách
      // Lưu danh sách sinh viên vào file
      fs.writeFile('students.js', `let students = ${JSON.stringify(students)};`, (err) => {
          if (err) throw err;
          console.log('Data updated!');
      });
  }



function searchStudents(keyword) {
    const result = students.filter(student => {
        return (
            student.ID.toLowerCase().includes(keyword.toLowerCase()) ||
            student.Name.toLowerCase().includes(keyword.toLowerCase()) ||
            student.Majors.toLowerCase().includes(keyword.toLowerCase()) ||
            student.Project.toLowerCase().includes(keyword.toLowerCase()) ||
            student.Grade.toLowerCase().includes(keyword.toLowerCase())
        );
    });

    let html = `
    <div class="search-form" style = "max-width: 500px; margin: auto; text-align: center;">
        <h2>Search Students</h2>
        <form action="/search" method="post">
            <input type="text" name="keyword" placeholder="Enter keyword...">
            <button type="submit">Search</button>
        </form>
    </div>
        <table style="width: 100%; border-collapse:collapse;">
            <tr>
                <th style="border: 1px solid black; padding: 8px;">ID</th>
                <th style="border: 1px solid black; padding: 8px;">images</th>
                <th style="border: 1px solid black; padding: 8px;">Name</th>
                <th style="border: 1px solid black; padding: 8px;">Majors</th>
                <th style="border: 1px solid black; padding: 8px;">Project</th>
                <th style="border: 1px solid black; padding: 8px;">Grade</th>
            </tr>`;

    result.forEach(students => {
        html += `<tr>
                    <td style="border: 1px solid black; padding: 8px;">${students.ID}</td>
                    <td style="border: 1px solid black; padding: 8px; max-width:10px;">
                        <img src="${students.images}" alt="Ảnh ${students.images}" style="max-width:100px;">
                    </td>
                    <td style="border: 1px solid black; padding: 8px;">${students.Name}</td>
                    <td style="border: 1px solid black; padding: 8px;">${students.Majors}</td>
                    <td style="border: 1px solid black; padding: 8px;">${students.Project}</td>
                    <td style="border: 1px solid black; padding: 8px;">${students.Grade}</td>
                 </tr>`;
    });

    html += `</table>`;
    return html;
}

function deleteStudent(studentId) {
    const index = students.findIndex(student => student.ID === studentId);
    if (index !== -1) {
        students.splice(index, 1);
        return true; // Xóa thành công
    }
    return false; // Không tìm thấy sinh viên để xóa
}

function updateStudent(studentId, newName, newMajors, newProject, newGrade) {
    const student = students.find(student => student.ID === studentId);
    if (student) {
        student.Name = newName;
        student.Majors = newMajors;
        student.Project = newProject;
        student.Grade = newGrade;
        return true; // Cập nhật thành công
    }
    return false; // Không tìm thấy sinh viên để cập nhật
}

module.exports = {
    output,
    update,
    searchStudents,
    generateId,
    deleteStudent,
    updateStudent,
    students,
};


//app.listen(port, () => console.log(`Server running at http://127.0.0.1:${port}/`));
