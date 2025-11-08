//student Interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Creating two  student objects

const student1: Student = {
    firstName: "John",
    lastName: "Doe",   
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

let studentsList: Student[] = [student1, student2];

// Creating a table to display student information
const table: HTMLTableElement = document.createElement("table");
const headerRow: HTMLTableRowElement = table.insertRow();
const headers: string[] = ["First Name", "Location"];
headers.forEach(headerText => {
    const headerCell: HTMLTableCellElement = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
});

// Creating rows for each student

studentsList.forEach(student => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});

document.body.appendChild(table);