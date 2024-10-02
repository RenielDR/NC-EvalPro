// Function to toggle sidebar collapse
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('main-content');
    
    if (window.innerWidth <= 600) {
        // Handle mobile view
        sidebar.classList.toggle('open');
        content.classList.toggle('with-sidebar'); // Adjust content when sidebar is open
    } else {
        // Handle larger screens
        sidebar.classList.toggle('collapsed');
    }
}

function showContent(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => sec.classList.remove('active'));

    // Show the selected section
    document.getElementById(section).classList.add('active');

    // Hide the sidebar on mobile after clicking an item
    if (window.innerWidth <= 600) {
        var sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('open'); // Hide the sidebar
    }
}

// Function for logout (placeholder function)
function logout() {
    alert("You have been logged out.");
    // Logic for logging out can be added here
}

function addClass() {
    let classList = document.getElementById('class-list');
    let newRow = document.createElement('tr');
    let rowCount = classList.rows.length + 1;

    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td contenteditable="true">New Class</td>
        <td class="action-buttons">
            <button class="edit-btn" onclick="editClass(${rowCount})">✏️</button>
            <button class="delete-btn" onclick="deleteClass(${rowCount})">🗑️</button>
        </td>
    `;
    classList.appendChild(newRow);
}

function editClass(id) {
    let row = document.querySelector(`#class-list tr:nth-child(${id}) td:nth-child(2)`);
    row.contentEditable = true;
    row.focus();
}

function deleteClass(id) {
    let row = document.querySelector(`#class-list tr:nth-child(${id})`);
    row.remove();
}

// Function to add a new subject row
function addSubject() {
    let subjectList = document.getElementById('subject-list');
    let newRow = document.createElement('tr');
    let rowCount = subjectList.rows.length + 1;

    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td contenteditable="true">New Code</td>
        <td contenteditable="true">New Subject</td>
        <td contenteditable="true">Description</td>
        <td class="action-buttons">
            <button class="edit-btn" onclick="editSubject(${rowCount})">✏️</button>
            <button class="delete-btn" onclick="deleteSubject(${rowCount})">🗑️</button>
        </td>
    `;
    subjectList.appendChild(newRow);
}

// Function to edit a subject
function editSubject(id) {
    let row = document.querySelector(`#subject-list tr:nth-child(${id})`);
    let cells = row.querySelectorAll('td');

    cells.forEach(cell => {
        cell.contentEditable = true;
        cell.focus();
    });
}

// Function to delete a subject
function deleteSubject(id) {
    let row = document.querySelector(`#subject-list tr:nth-child(${id})`);
    row.remove();
}








function searchAcademicYear() {
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById("search-academic");
    filter = input.value.toLowerCase();
    table = document.getElementById("academicTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those that don't match the search query
    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none"; // Initially hide the row
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    tr[i].style.display = ""; // Show the row if there's a match
                    break; // Stop searching through columns for this row
                }
            }
        }
    }
}


function searchClasses() {
    let input = document.getElementById('search-classes').value.toLowerCase();
    let rows = document.querySelectorAll('#class-list tr');

    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(input) ? '' : 'none';
    });
}

function searchSubjects() {
    let input = document.getElementById('search-subjects').value.toLowerCase();
    let rows = document.querySelectorAll('#subject-list tr');

    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(input) ? '' : 'none';
    });
}
