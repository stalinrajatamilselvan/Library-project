// =====================================
// STATIC ADMIN USER
// =====================================

const adminUser = {

    email: "stalin@gmail.com",

    password: "stalin@123",

    role: "Admin"

};



// =====================================
// SCREEN NAVIGATION
// =====================================

function showScreen(screenId) {

    // Get all screens

    const screens =
        document.querySelectorAll(".screen");


    // Hide every screen

    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });


    // Show selected screen

    document
        .getElementById(screenId)
        .classList.add("active");

}



// =====================================
// LOGIN
// =====================================

document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        // Stop page refresh

        event.preventDefault();


        // Get entered values

        const email =
            document
                .getElementById("loginEmail")
                .value
                .trim();

        const password =
            document
                .getElementById("loginPassword")
                .value;


        const registeredUser =
            JSON.parse(localStorage.getItem("registeredUser")) || null;

        const isAdmin =
            email === adminUser.email &&
            password === adminUser.password;

        const isRegisteredUser =
            registeredUser &&
            email === registeredUser.email &&
            password === registeredUser.password;

        // Accept either the static admin or the locally registered user.
        if (isAdmin || isRegisteredUser) {

            const currentUser = isAdmin ? adminUser : registeredUser;

            document
                .getElementById("dashboardUserName")
                .textContent = currentUser.name || "Admin";

            document
                .getElementById("dashboardUserRole")
                .textContent = currentUser.role;

            alert(
                "Login successful! Welcome " +
                (currentUser.name || "Admin") + "."
            );


            // Open Admin Dashboard

            showScreen("dashboardScreen");


        } else {

            alert(
                "Invalid email or password!"
            );

        }

    });



// =====================================
// REGISTER USER
// =====================================

document
    .getElementById("registerForm")
    .addEventListener("submit", function(event) {

        // Stop page refresh

        event.preventDefault();


        // Get registration values

        const name =
            document
                .getElementById("userName")
                .value;

        const email =
            document
                .getElementById("userEmail")
                .value;

        const phone =
            document
                .getElementById("userPhone")
                .value;

        const address =
            document
                .getElementById("userAddress")
                .value;

        const password =
            document
                .getElementById("userPassword")
                .value;


        // Create user object

        const registeredUser = {

            name: name,

            email: email,

            phone: phone,

            address: address,

            password: password,

            role: "User"

        };


        // Save user in Local Storage

        localStorage.setItem(
            "registeredUser",
            JSON.stringify(registeredUser)
        );


        // Show success message

        alert(
            "Registration successful! Please login."
        );


        // Clear form

        document
            .getElementById("registerForm")
            .reset();


        // Go to Login Screen

        showScreen("loginScreen");

    });



// =====================================
// LOGOUT
// =====================================

function logout() {

    alert("You have been logged out.");

    showScreen("loginScreen");

}