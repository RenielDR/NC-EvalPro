// Function to toggle sidebar collapse
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('main-content');
    
    if (window.innerWidth <= 600) {
        // Handle mobile view
        sidebar.classList.toggle('open');
        
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





let totalQuestionCount = 0;  // Tracks total number of questions
let criteriaCount = 0;       // Tracks the number of criteria

// Function to add a new criteria
function addCriteria() {
    criteriaCount++;  // Increment the criteria count

    const questionnaireList = document.getElementById("questionnaire-list");

    // Create a div to hold the new criteria
    const criteriaDiv = document.createElement("div");
    criteriaDiv.classList.add("criteria-item");
    criteriaDiv.setAttribute("id", `criteria-${criteriaCount}`);
    criteriaDiv.innerHTML = `
        <h3>Criteria ${criteriaCount}:</h3>
        <select id="criteria-select-${criteriaCount}" name="criteria${criteriaCount}" required>
            <option value="">Select Criteria</option>
            <option value="Teaching Skills">Teaching Skills</option>
            <option value="Class Management">Class Management</option>
            <option value="Subject Knowledge">Subject Knowledge</option>
            <option value="Student Engagement">Student Engagement</option>
        </select>
        <div id="questions-for-criteria-${criteriaCount}"></div>
    `;

    // Append the new criteria to the list
    questionnaireList.appendChild(criteriaDiv);
}

// Function to add a new question under the last added criteria
function addQuestion() {
    if (criteriaCount === 0) {
        alert("Please add a criteria first!");
        return;
    }

    totalQuestionCount++;  // Increment the total question count for numbering

    const lastCriteriaDiv = document.getElementById(`questions-for-criteria-${criteriaCount}`);

    // Create a div to hold the new question and its radio buttons
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-item");
    questionDiv.innerHTML = `
        <label for="question${totalQuestionCount}">Question ${totalQuestionCount}:</label>
        <input type="text" id="question${totalQuestionCount}" name="question${totalQuestionCount}" placeholder="Enter your question here" required>

        <!-- Radio buttons for ratings -->
        <div class="radio-group">
            <label>
                <input type="radio" name="rating${totalQuestionCount}" value="5" required> 5 - Outstanding
            </label>
            <label>
                <input type="radio" name="rating${totalQuestionCount}" value="4"> 4 - Highly Satisfactory
            </label>
            <label>
                <input type="radio" name="rating${totalQuestionCount}" value="3"> 3 - Satisfactory
            </label>
            <label>
                <input type="radio" name="rating${totalQuestionCount}" value="2"> 2 - Needs Improvement
            </label>
            <label>
                <input type="radio" name="rating${totalQuestionCount}" value="1"> 1 - Poor
            </label>
        </div>
    `;

    // Append the new question to the last criteria
    lastCriteriaDiv.appendChild(questionDiv);
}

// Function to handle form submission
document.getElementById("questionnaireForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = new FormData(this);
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`); // Log each form entry (criteria, question, and rating)
    }

    // You can process or send this data to your server as needed
    alert("Questionnaire submitted successfully!");
});
