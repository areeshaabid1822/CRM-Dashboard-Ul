



document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".crmEmpMenuBtn");
const sidebar = document.querySelector(".crmEmpSideBar");

if (menuBtn && sidebar) {

    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        sidebar.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (
            window.innerWidth <= 768 &&
            !sidebar.contains(e.target) &&
            !menuBtn.contains(e.target)
        ) {
            sidebar.classList.remove("active");
        }
    });

}
    // ==========================
    // NOTIFICATION POPUP
    // ==========================
    const bell = document.querySelector(".fa-bell");

    if (bell) {

        bell.addEventListener("click", () => {

            const oldPopup = document.querySelector(".notif-popup");
            if (oldPopup) oldPopup.remove();

            const popup = document.createElement("div");

            popup.className = "notif-popup";

            popup.innerHTML = `
                <h3>Notifications 🔔</h3>

                <ul>
                    <li>✅ New Customer Added</li>
                    <li>📩 New Lead Assigned</li>
                    <li>💰 Payment Received</li>
                    <li>📅 Meeting Today at 3 PM</li>
                </ul>

                <button id="closeNotif">Close</button>
            `;

            document.body.appendChild(popup);

            document.getElementById("closeNotif").onclick = () => {
                popup.remove();
            };

        });

    }

});


// ==========================
// LOGIN
// ==========================
function login() {

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (!email || !password) return;

    if (email.value.trim() === "" || password.value.trim() === "") {

        alert("Please enter Email and Password.");
        return;
    }

    // Demo Login
    if (
        email.value === "admin@gmail.com" &&
        password.value === "1234"
    ) {

        alert("Login Successful!");

        window.location.href = "index.html";

    } else {

        alert("Invalid Email or Password!");

    }

}


// ==========================
// LOGOUT
// ==========================
function logout() {

    if (confirm("Are you sure you want to logout?")) {

        alert("Logout Successful!");

        window.location.href = "login.html";

    }

}


// ==========================
// FORGOT PASSWORD
// ==========================
function sendResetLink() {

    const email = document.querySelector(".auth-box input");

    if (!email) return;

    if (email.value.trim() === "") {

        alert("Please enter your email.");

        return;

    }

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

    if (!pattern.test(email.value)) {

        alert("Enter a valid email.");

        return;

    }

    alert("Password reset link sent successfully!");

    email.value = "";

}
document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("loginBtn");

    if (loginBtn) {
        loginBtn.addEventListener("click", login);
    }

});




document.addEventListener("DOMContentLoaded", () => {

    
    // 
    // ===============================
    // ACTIVE MENU
    // ===============================

    const menuLinks = document.querySelectorAll(".crmEmpMenuList li");

    menuLinks.forEach((item) => {

        item.addEventListener("click", () => {

            menuLinks.forEach(link => {
                link.classList.remove("crmEmpActivePage");
            });

            item.classList.add("crmEmpActivePage");

        });

    });

    // ===============================
    // BUTTON EFFECT
    // ===============================

    const allButtons = document.querySelectorAll("button");

    allButtons.forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "scale(1.05)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "scale(1)";

        });

    });

    // ===============================
    // CARD HOVER
    // ===============================

    const cards = document.querySelectorAll(".crmEmpCard");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0 15px 35px rgba(37,99,235,.4)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "";
        });

    });

});


// ===============================
// CREATE TASK FORM
// ===============================

const createTaskForm = document.querySelector(".crmCreateTaskForm");

if (createTaskForm) {

    createTaskForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const taskName = this.querySelector("input[type='text']");
        const employee = this.querySelector("select");

        if (taskName.value.trim() === "") {
            alert("Please enter Task Name");
            taskName.focus();
            return;
        }

        if (employee.selectedIndex === 0) {
            alert("Please select an Employee");
            employee.focus();
            return;
        }

        alert("✅ Task Created Successfully!");

        this.reset();

    });

}

// ===============================
// INPUT ANIMATION
// ===============================

const formInputs = document.querySelectorAll(
".crmCreateInput input,.crmCreateInput select,.crmCreateInput textarea"
);

formInputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.style.transform = "scale(1.02)";

    });

    input.addEventListener("blur", () => {

        input.style.transform = "scale(1)";

    });

});
// ==========================
// CUSTOM SUCCESS POPUP
// ==========================

const taskForm = document.querySelector(".crmCreateTaskForm");

if (taskForm) {

    taskForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const popup = document.createElement("div");

        popup.className = "crmPopup";

        popup.innerHTML = `
            <div class="crmPopupBox">
                <i class="fa-solid fa-circle-check"></i>
                <h2>Success!</h2>
                <p>Task Created Successfully.</p>
                <button class="crmPopupBtn">OK</button>
            </div>
        `;

        document.body.appendChild(popup);

        popup.querySelector(".crmPopupBtn").addEventListener("click", () => {
            popup.remove();
            taskForm.reset();
        });

    });

}

document.addEventListener("DOMContentLoaded", () => {

  // create cursor elements
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");

  const dot = document.createElement("div");
  dot.classList.add("cursor-dot");

  document.body.appendChild(cursor);
  document.body.appendChild(dot);

  // move cursor
  document.addEventListener("mousemove", (e) => {

    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    dot.style.left = x + "px";
    dot.style.top = y + "px";
  });

});