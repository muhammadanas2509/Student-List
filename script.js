const addButton = document.getElementById('addButton');
const deleteAllButton = document.getElementById('deleteAllButton');
const studentTableBody = document.getElementById('studentTableBody');

let students = [];

addButton.addEventListener('click', () => {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const age = document.getElementById('age').value;
    const qualification = document.getElementById('qualification').value;
    const id = document.getElementById('id').value;

    if (firstname && lastname && age && qualification && id) {
        const student = { firstname, lastname, age, qualification, id };
        students.push(student);
        updateTable();
        clearInputs();
    } else {
        alert('Please fill all fields');
    }
});

deleteAllButton.addEventListener('click', () => {
    students = [];
    updateTable();
});

function updateTable() {
    studentTableBody.innerHTML = '';
    let serialNumber = 1; // Reset serial number

    students.forEach(student => {
        student.serialNumber = serialNumber; // Assign new serial number
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.serialNumber}</td>
            <td>${student.firstname}</td>
            <td>${student.lastname}</td>
            <td>${student.age}</td>
            <td>${student.qualification}</td>
            <td>${student.id}</td>
            <td>
                <button id="editBtn"onclick="editStudent(${student.serialNumber})">Edit</button>
                <button id="deleteBtn" onclick="deleteStudent(${student.serialNumber})">Delete</button>
            </td>
        `;
        studentTableBody.appendChild(row);
        serialNumber++;
    });
}

function editStudent(serialNumber) {
    const student = students.find(s => s.serialNumber === serialNumber);
    if (student) {
        document.getElementById('firstname').value = student.firstname;
        document.getElementById('lastname').value = student.lastname;
        document.getElementById('age').value += student.age;
        document.getElementById('qualification').value = student.qualification;
        document.getElementById('id').value += student.id;
        deleteStudent(serialNumber);
    }
}

function deleteStudent(serialNumber) {
    students = students.filter(student => student.serialNumber !== serialNumber);
    updateTable(); // Reassign serial numbers and update the table
}

function clearInputs() {
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('age').value = '';
    document.getElementById('qualification').value = '';
    document.getElementById('id').value = '';
}
