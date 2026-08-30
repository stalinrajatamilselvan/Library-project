// =====================================
// CHECK LOGIN STATUS
// =====================================

const currentUser =
    JSON.parse(
        localStorage.getItem("currentUser")
    );


// =====================================
// PROTECT DASHBOARD
// =====================================

if (!currentUser) {

    alert(
        "Please login to access the dashboard."
    );

    window.location.href = "login.html";

}


// =====================================
// DISPLAY USER INFORMATION
// =====================================

else {

    // Display name in header
    document
        .getElementById("dashboardUserName")
        .textContent =
        currentUser.name || "Admin";


    // Display name
    document
        .getElementById("userName")
        .textContent =
        currentUser.name || "Admin";


    // Display email
    document
        .getElementById("userEmail")
        .textContent =
        currentUser.email || "-";


    // Display role
    document
        .getElementById("dashboardUserRole")
        .textContent =
        currentUser.role || "User";

}


// =====================================
// LOGOUT
// =====================================

document
    .getElementById("logoutBtn")
    .addEventListener("click", function () {

        // Remove logged-in user
        localStorage.removeItem("currentUser");


        alert(
            "You have been logged out."
        );


        // Go to Login Page
        window.location.href = "../LOGIN/login.html";

    });


// =====================================
// BOOKS BUTTON
// =====================================

document
    .getElementById("booksBtn")
    .addEventListener("click", function () {

        alert(
            "Books Management will be added here."
        );

    });


// =====================================
// PROFILE BUTTON
// =====================================

document
    .getElementById("profileBtn")
    .addEventListener("click", function () {

        alert(
            "Profile Management will be added here."
        );

    });