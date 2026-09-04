
function scrollToAppointment() {
    document.getElementById("appointment").scrollIntoView({
        behavior: "smooth"
    });
}


// ===============================
// SELECT DOCTOR
// ===============================

function selectDoctor(doctorName) {

    document.getElementById("doctor").value = doctorName;

    scrollToAppointment();
}


// ===============================
// DOCTOR SEARCH
// ===============================

function searchDoctors() {

    let search =
        document.getElementById("doctorSearch").value.toLowerCase();

    let doctors =
        document.querySelectorAll(".doctor-item");

    doctors.forEach(function (doctor) {

        let name =
            doctor.innerText.toLowerCase();

        if (name.includes(search)) {
            doctor.style.display = "block";
        } else {
            doctor.style.display = "none";
        }

    });
}


// ===============================
// APPOINTMENT FORM
// ===============================

document
    .getElementById("appointmentForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name =
            document.getElementById("patientName").value;

        let phone =
            document.getElementById("phone").value;

        let department =
            document.getElementById("department").value;

        let doctor =
            document.getElementById("doctor").value;

        let date =
            document.getElementById("appointmentDate").value;

        let message =
            document.getElementById("appointmentMessage");


        // Check empty fields

        if (
            name === "" ||
            phone === "" ||
            department === "" ||
            doctor === "" ||
            date === ""
        ) {

            message.innerHTML =
                "Please fill all fields.";

            message.className =
                "alert alert-danger mt-4";

            return;
        }


        // Success message

        message.innerHTML =
            "Appointment booked successfully for " +
            name +
            " with " +
            doctor +
            ".";

        message.className =
            "alert alert-success mt-4";


        // Clear form

        this.reset();

    });


// ===============================
// SET MINIMUM APPOINTMENT DATE
// ===============================

let today = new Date();

let year = today.getFullYear();

let month =
    String(today.getMonth() + 1).padStart(2, "0");

let day =
    String(today.getDate()).padStart(2, "0");

let currentDate =
    year + "-" + month + "-" + day;

document.getElementById("appointmentDate").min =
    currentDate;


// ===============================
// WELCOME MESSAGE
// ===============================

console.log(
    "Welcome to MedCare Hospital Website!"
);