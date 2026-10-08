/* =====================================================
   MOBILE NAVBAR
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


/* Close mobile menu after clicking a link */

const navItems = document.querySelectorAll(".nav-link");

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuBtn.textContent = "☰";

    });

});


/* =====================================================
   ROBOT EYES FOLLOW MOUSE
===================================================== */

const robotArea = document.querySelector(".robot-area");

const pupils = document.querySelectorAll(".eye-pupil");

robotArea.addEventListener("mousemove", (event) => {

    const rect = robotArea.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    let x = (mouseX - centerX) / centerX;
    let y = (mouseY - centerY) / centerY;

    /*
        Limit the movement so the pupil
        stays inside the eye.
    */

    x = Math.max(-1, Math.min(1, x));
    y = Math.max(-1, Math.min(1, y));

    const moveX = x * 8;
    const moveY = y * 8;

    pupils.forEach((pupil) => {

        pupil.style.transform =
            `translate(${moveX}px, ${moveY}px)`;

    });

});


/* Reset eyes when mouse leaves robot */

robotArea.addEventListener("mouseleave", () => {

    pupils.forEach((pupil) => {

        pupil.style.transform = "translate(0, 0)";

    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const sections =
    document.querySelectorAll("main section");

const sectionObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute("id");

                    navItems.forEach((link) => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${currentId}`
                        ) {
                            link.classList.add("active");
                        }

                    });

                }

            });

        },

        {
            threshold: 0.45
        }

    );


sections.forEach((section) => {

    sectionObserver.observe(section);

});


/* =====================================================
   FAQ ACCORDION
===================================================== */

const faqItems =
    document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question =
        item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const isActive =
            item.classList.contains("active");


        /* Close all FAQ items */

        faqItems.forEach((faq) => {

            faq.classList.remove("active");

        });


        /* Open clicked item */

        if (!isActive) {

            item.classList.add("active");

        }

    });

});


/* =====================================================
   LOGIN BUTTON
===================================================== */

const loginBtn =
    document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {

    alert(
        "Login functionality can be connected to your backend later."
    );

});


/* =====================================================
   PROJECT BUTTONS
===================================================== */

const projectButtons =
    document.querySelectorAll(".open-btn");

projectButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        alert(
            `Project ${index + 1} will be connected here.`
        );

    });

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        alert("Please fill in all fields.");

        return;
    }


    alert(
        `Thank you ${name}! Your message has been received.`
    );


    contactForm.reset();

});


/* =====================================================
   LOGIN / NAVBAR BUTTON ACCESSIBILITY
===================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        navLinks.classList.remove("open");

        menuBtn.textContent = "☰";

    }

});