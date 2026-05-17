// Student Constructor Function
function Student(name, age, course) {
    this.id = Date.now() + Math.floor(Math.random() * 1000);
    this.name = name;
    this.age = age;
    this.course = course;
}

// Object Methods for Student
Student.prototype.introduce = function() {
    return `Hi, I'm ${this.name}, I'm ${this.age} years old and I'm studying ${this.course}.`;
};

Student.prototype.getCourseDetails = function() {
    const courseInfo = {
        'Computer Science': 'Programming, Algorithms, and Software Development',
        'Business Administration': 'Management, Marketing, and Business Strategy',
        'Engineering': 'Mathematics, Physics, and Applied Sciences',
        'Mathematics': 'Calculus, Algebra, and Mathematical Theory',
        'Physics': 'Mechanics, Thermodynamics, and Quantum Physics',
        'Chemistry': 'Organic, Inorganic, and Physical Chemistry',
        'Biology': 'Life Sciences, Genetics, and Ecology',
        'Literature': 'English Literature, Poetry, and Creative Writing'
    };
    
    return `${this.course}: ${courseInfo[this.course] || 'Course details not available'}`;
};

// Array to store students
let students = [];

// DOM Elements
const studentForm = document.getElementById('studentForm');
const studentsList = document.getElementById('studentsList');
const totalStudentsEl = document.getElementById('totalStudents');
const clockEl = document.getElementById('clock');
const dateEl = document.getElementById('date');

// Digital Clock functionality
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: false });
    const date = now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    clockEl.textContent = time;
    dateEl.textContent = date;
}

// Study Timer functionality
let timerInterval = null;
let timerSeconds = 25 * 60;
let isTimerRunning = false;

const timerDisplay = document.getElementById('timer');
const startTimerBtn = document.getElementById('startTimer');
const resetTimerBtn = document.getElementById('resetTimer');
const pauseTimerBtn = document.getElementById('pauseTimer');

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        timerInterval = setInterval(() => {
            timerSeconds--;
            updateTimerDisplay();
            
            if (timerSeconds <= 0) {
                clearInterval(timerInterval);
                isTimerRunning = false;
                showAlert('Study session completed!', 'success');
            }
        }, 1000);
    }
}

function pauseTimer() {
    if (isTimerRunning) {
        clearInterval(timerInterval);
        isTimerRunning = false;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    timerSeconds = 25 * 60;
    updateTimerDisplay();
}

// Render students list
function renderStudents() {
    if (students.length === 0) {
        studentsList.innerHTML = '<p style="color: #999; text-align: center; font-size: 0.9rem;">No students yet ✨</p>';
        totalStudentsEl.textContent = '0';
        return;
    }

    totalStudentsEl.textContent = students.length;
    
    studentsList.innerHTML = students.map(student => `
        <div class="student-card" data-id="${student.id}">
            <h3>${student.name}</h3>
            <p>Age: ${student.age}</p>
            <p>Course: ${student.course}</p>
            <div class="student-actions">
                <button class="btn btn-small btn-introduce" onclick="showIntroduction(${student.id})">Introduce</button>
                <button class="btn btn-small btn-course" onclick="showCourseDetails(${student.id})">Course Details</button>
                <button class="btn btn-small btn-delete" onclick="deleteStudent(${student.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

// Show introduction for a student
function showIntroduction(id) {
    const student = students.find(s => s.id === id);
    if (student) {
        showAlert(student.introduce(), 'info');
    }
}

// Show course details for a student
function showCourseDetails(id) {
    const student = students.find(s => s.id === id);
    if (student) {
        showAlert(student.getCourseDetails(), 'info');
    }
}

// Delete a student
function deleteStudent(id) {
    students = students.filter(s => s.id !== id);
    renderStudents();
    showAlert('Student deleted successfully!', 'success');
}

// Show alert
function showAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// Form submission
studentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const course = document.getElementById('course').value;
    
    if (name && age && course) {
        const student = new Student(name, age, course);
        students.push(student);
        
        renderStudents();
        studentForm.reset();
        showAlert('Student added successfully!', 'success');
    }
});

// Event listeners for timer
startTimerBtn.addEventListener('click', startTimer);
resetTimerBtn.addEventListener('click', resetTimer);
pauseTimerBtn.addEventListener('click', pauseTimer);

// Initialize
updateClock();
setInterval(updateClock, 1000);
updateTimerDisplay();
renderStudents();