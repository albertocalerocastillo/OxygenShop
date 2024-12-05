document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("newsletter-popup");
    const closeButton = document.getElementById("close-popup");
    const form = document.getElementById("newsletter-form");
    const thanksms = document.getElementById("thanks");
    const emailInput = document.getElementById("email");

    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (!sessionStorage.getItem("newsletterDismissed")) {
        setTimeout(() => {
            if (!sessionStorage.getItem("newsletterDismissed")) {
                popup.showModal();
            }
        }, 5000);
    }

    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        if (scrolled > 0.25 && !popup.open && !sessionStorage.getItem("newsletterDismissed")) {
            popup.showModal();
        }
    });

    const closePopup = () => {
        popup.close();
        sessionStorage.setItem("newsletterDismissed", "true");
    };

    closeButton.addEventListener("click", closePopup);
    popup.addEventListener("click", (event) => {
        if (event.target === popup) closePopup();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closePopup();
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const emailValue = emailInput.value.trim();
        console.log("Email ingresado:", emailValue);

        if (!emailRegex.test(emailValue)) {
            alert("Formato de correo inválido.");
            return;  
        }

        alert("Correo válido, espere...");

        fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: emailValue }),
        })
            .then((response) => {
                if (!response.ok) throw new Error("Error subscribing");
                return response.json();
            })
            .then(() => {
                form.style.display = "none"; 
                thanksms.style.display = "block";
            })
            .catch((error) => {
                alert("There was an error. Please try again later.");
                console.error(error);
            });
    });
});