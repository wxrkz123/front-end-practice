// New data added to the table
function addContact() {
    var table = document.getElementById("contactTable");
    var length = table.rows.length;
    var row = table.insertRow(length);
    var nameCell = row.insertCell(0);
    var emailCell = row.insertCell(1);
    var phoneCell = row.insertCell(2);
    var actionCell = row.insertCell(3);
    
    nameCell.innerHTML = "NULL";
    emailCell.innerHTML = "NULL";
    phoneCell.innerHTML = "NULL";
    actionCell.innerHTML = '<button onclick="editContact(this)">Edit</button> <button onclick="deleteContact(this)">Delete</button>';
    alert("Contact added!")
}

function deleteContact(row) {
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById("contactTable").deleteRow(i);
    alert("Contact deleted!")
}

function editContact(row) {
    var i = row.parentNode.parentNode.rowIndex;
    var table = document.getElementById("contactTable");
    var nameCell = table.rows[i].cells[0];
    var emailCell = table.rows[i].cells[1];
    var phoneCell = table.rows[i].cells[2];

    var newName = prompt("Enter new name:", nameCell.innerHTML);
    var newEmail = prompt("Enter new email:", emailCell.innerHTML);
    var newPhone = prompt("Enter new phone number:", phoneCell.innerHTML);

    if (newName !== null) {
        nameCell.innerHTML = newName;
    }

    if (newEmail !== null) {
        emailCell.innerHTML = newEmail;
    }

    if (newPhone !== null) {
        phoneCell.innerHTML = newPhone;
    }

    alert("Contact updated!")
}