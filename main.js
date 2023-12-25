document.addEventListener("DOMContentLoaded", function () {
    const loginSection = document.getElementById("login-section");
    const homeSection = document.getElementById("home-section");

const loginUser = () => {
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Check if the entered credentials match the expected values
    if (enteredUsername === "sunita" && enteredPassword === "1234") {
        loginSection.style.display = "none";
        homeSection.style.display = "block";
         loginButton.style.height="30px"

        displayMedicationReminders();
        displayExerciseReminders();
        
        errorMessage.textContent = "";

        // Add a live clock in the Medication and Exercise sections
        addLiveClock("medication-reminders");
        addLiveClock("exercise-reminders");
    } else {
        // Invalid credentials, display an error message
        errorMessage.textContent = "username or password invalid :(";
    }
};

// Function to add a live clock to a specific section
const addLiveClock = (sectionId) => {
    const section = document.getElementById(sectionId);
    const clockContainer = document.createElement("div");
    clockContainer.id = "live-clock";
    section.insertBefore(clockContainer, section.firstChild);

    // Function to update the live clock
    const updateClock = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");

        clockContainer.textContent = `Current Time: ${hours}:${minutes}:${seconds}`;
    };

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Initial update
    updateClock();
};
    (document.getElementById("login-button")).addEventListener("click", loginUser);
   





   const displayMedicationReminders = () => {
    const medicationContainer = document.getElementById("medication-list");

    const medicationData = [
        { id: 1, name: "Azithromycin", time: "8:00 AM" },
        { id: 2, name: "Omeprazole", time: "12:00 PM" },
        // Add more medication items as needed
    ];





    medicationContainer.innerHTML = "";

    medicationData.forEach((medication) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = medication.name;
        row.appendChild(nameCell);

        const currentTimeCell = document.createElement("td");
        currentTimeCell.textContent = medication.time;
        row.appendChild(currentTimeCell);


        medicationContainer.appendChild(row);
    });
};





const displayExerciseReminders = () => {
    const exerciseContainer = document.getElementById("exercise-list");

    const exerciseData = [
        { name: "Morning Walk", time: "7:00 AM" },
        { name: "Stretching Exercise", time: "10:00 AM" },
        { name: "Meditation", time: "5:00 AM" },
        // Add more exercise data as needed
    ];
    exerciseContainer.innerHTML = "";

    exerciseData.forEach((exercise) => {
        const row = document.createElement("tr");

        // Create table cells for exercise name and time
        const nameCell = document.createElement("td");
        nameCell.textContent = exercise.name;
        row.appendChild(nameCell);

        const timeCell = document.createElement("td");
        timeCell.textContent = exercise.time;
        row.appendChild(timeCell);

        exerciseContainer.appendChild(row);
    });
};

    


displayExerciseReminders();
    const loginButton = document.getElementById("login-button");
    (document.getElementById("login-button")).addEventListener("click", loginUser);
});

