



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
   const bell = document.getElementById("crmNotifyBtn");

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

function login() {

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (!email || !password) return;

    if (email.value.trim() === "" || password.value.trim() === "") {

        alert("Please enter Email and Password.");
        return;
    }

    
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



function logout() {

    if (confirm("Are you sure you want to logout?")) {

        alert("Logout Successful!");

        window.location.href = "login.html";

    }

}


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

    
    

    const menuLinks = document.querySelectorAll(".crmEmpMenuList li");

    menuLinks.forEach((item) => {

        item.addEventListener("click", () => {

            menuLinks.forEach(link => {
                link.classList.remove("crmEmpActivePage");
            });

            item.classList.add("crmEmpActivePage");

        });

    });



    const allButtons = document.querySelectorAll("button");

    allButtons.forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "scale(1.05)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "scale(1)";

        });

    });

    

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


  const cursor = document.createElement("div");
  cursor.classList.add("cursor");

  const dot = document.createElement("div");
  dot.classList.add("cursor-dot");

  document.body.appendChild(cursor);
  document.body.appendChild(dot);

  
  document.addEventListener("mousemove", (e) => {

    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    dot.style.left = x + "px";
    dot.style.top = y + "px";
  });

});



document.addEventListener("DOMContentLoaded", () => {

    const t4Days = document.querySelectorAll(".t4-calendar-dates span");

    t4Days.forEach(day => {

        day.addEventListener("click", () => {

            t4Days.forEach(d => d.classList.remove("t4-active-day"));

            day.classList.add("t4-active-day");

        });

    });

   

    const t4NewBtn = document.querySelector(".t4-create-btn");

    if (t4NewBtn) {

        t4NewBtn.addEventListener("click", () => {

            alert("New Meeting feature will be added soon.");

        });

    }

    

    const t4Cards = document.querySelectorAll(".t4-card-box");

    t4Cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-5px)";

            card.style.transition = ".3s";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0px)";

        });

    });

});


document.addEventListener("DOMContentLoaded", () => {

   

    const t4calDays = document.querySelectorAll(".t4cal-days span");

    t4calDays.forEach(day => {

        day.addEventListener("click", () => {

            t4calDays.forEach(d => {
                d.classList.remove("t4cal-active");
            });

            day.classList.add("t4cal-active");

        });

    });

    
    const t4calBtn = document.querySelector(".t4cal-add-btn");

    if (t4calBtn) {

        t4calBtn.addEventListener("click", () => {

            alert("Add Event feature will be available soon!");

        });

    }

    

    const t4calCards = document.querySelectorAll(
        ".t4cal-calendar-card, .t4cal-event-card, .t4cal-upcoming-card"
    );

    t4calCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";
            card.style.transition = ".35s ease";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0px)";

        });

    });

    

    const t4Rows = document.querySelectorAll(".t4cal-table tbody tr");

    t4Rows.forEach(row => {

        row.addEventListener("click", () => {

            t4Rows.forEach(r => r.classList.remove("t4cal-selected"));

            row.classList.add("t4cal-selected");

        });

    });

});
document.addEventListener("DOMContentLoaded", () => {

    const t4notBtn = document.querySelector(".t4not-btn");
    const t4notCards = document.querySelectorAll(".t4not-card");

    if (t4notBtn) {

        t4notBtn.addEventListener("click", () => {

            t4notCards.forEach(card => {

                card.classList.remove("unread");

            });

            t4notBtn.innerHTML = "✓ All Notifications Read";

        });

    }

    
    t4notCards.forEach(card => {

        card.addEventListener("click", () => {

            card.classList.remove("unread");

            card.style.transform = "scale(.98)";

            setTimeout(() => {

                card.style.transform = "translateY(0px)";

            },150);

        });

    });


    t4notCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transition=".35s";

            card.style.boxShadow="0 20px 40px rgba(37,99,235,.30)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.boxShadow="";

        });

    });

    

    t4notCards.forEach((card,index)=>{

        card.style.opacity="0";

        card.style.transform="translateY(30px)";

        setTimeout(()=>{

            card.style.opacity="1";

            card.style.transform="translateY(0)";

            card.style.transition=".5s ease";

        },index*180);

    });

});



document.addEventListener("DOMContentLoaded",()=>{

const btn=document.getElementById("crmProfileBtn");

const menu=document.getElementById("crmProfileMenu");

if(btn){

btn.addEventListener("click",(e)=>{

e.stopPropagation();

menu.classList.toggle("show");

});

document.addEventListener("click",()=>{

menu.classList.remove("show");

});

}

});


document.addEventListener("DOMContentLoaded", () => {

    const rows = document.querySelectorAll(".activity-box tbody tr");

    rows.forEach(row => {

        row.addEventListener("click", () => {

            rows.forEach(r => r.classList.remove("selected-row"));

            row.classList.add("selected-row");

        });

    });

    const pageBtns = document.querySelectorAll(".crmPageBtn");

    pageBtns.forEach(btn => {

        btn.addEventListener("click", () => {

            pageBtns.forEach(b => b.classList.remove("active"));

            if (
                btn.innerText !== "Previous" &&
                btn.innerText !== "Next"
            ) {
                btn.classList.add("active");
            }

        });

    });

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });

    });

});

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

let hidden = false;

document.addEventListener("mousemove", (e) => {
    const isInput = e.target.closest("input, textarea, select");

    if (isInput) {
        if (!hidden) {
            cursor.style.opacity = "0";
            dot.style.opacity = "0";
            hidden = true;
        }
        return;
    }

    if (hidden) {
        cursor.style.opacity = "1";
        dot.style.opacity = "1";
        hidden = false;
    }

    const x = e.clientX;
    const y = e.clientY;

    cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
});

document.addEventListener("mousedown", (e) => {
    if (e.target.closest("input, textarea, select")) {
        cursor.style.opacity = "0";
        dot.style.opacity = "0";
    }
});







const crmEditBtn = document.querySelector(".crmEditProfileBtn");

if (crmEditBtn) {

    crmEditBtn.addEventListener("click", function () {

        this.innerHTML = '<i class="fa-solid fa-check"></i> Saved';

        this.style.background = "#27ae60";

        setTimeout(() => {

            this.innerHTML = '<i class="fa-solid fa-pen"></i> Edit Profile';

            this.style.background = "#00bcd4";

        }, 2000);

    });

}




const crmCards = document.querySelectorAll(".crmProfileCard");

crmCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});




const crmSkills = document.querySelectorAll(".crmSkillBox span");

crmSkills.forEach(skill => {

    skill.addEventListener("click", () => {

        skill.classList.toggle("crmSkillActive");

    });

});




const crmProfileImg = document.querySelector(".crmProfileImage img");

if (crmProfileImg) {

    crmProfileImg.addEventListener("click", () => {

        crmProfileImg.style.transform = "scale(1.15) rotate(8deg)";

        setTimeout(() => {

            crmProfileImg.style.transform = "";

        }, 500);

    });

}




const crmActivity = document.querySelectorAll(".crmActivityList li");

crmActivity.forEach((item, index) => {

    item.style.opacity = "0";

    item.style.transform = "translateX(-30px)";

    setTimeout(() => {

        item.style.opacity = "1";

        item.style.transform = "translateX(0)";

    }, 300 * index);

});




window.addEventListener("load", () => {

    console.log("Welcome to Nexora CRM Profile");

});

d
   