document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById('appointmentForm');
    const backToTopButton = document.getElementById('backToTop');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            alert('Your appointment has been scheduled successfully! We will contact you shortly to confirm the details.');
            
            const confirmationMessage = document.createElement('div');
            confirmationMessage.className = 'confirmation-message';
            confirmationMessage.innerHTML = '<i class="fas fa-check-circle"></i> Your appointment has been scheduled successfully! We will contact you shortly to confirm the details.';
            this.appendChild(confirmationMessage);
            
            this.reset();
        });
    }

    // Show/hide back-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
});

// Function to scroll back to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Sign 
function toggleForms() {
    let signInForm = document.getElementById("signInForm");
    let signUpForm = document.getElementById("signUpForm");
    if (signInForm.style.display === "none") {
        signInForm.style.display = "block";
        signUpForm.style.display = "none";
    } else {
        signInForm.style.display = "none";
        signUpForm.style.display = "block";
    }
}

function signIn() {
    let email = document.getElementById("signInEmail").value;
    let password = document.getElementById("signInPassword").value;
    
    if (email && password) {
        alert("Sign In Successful!");
    } else {
        alert("Please enter valid credentials.");
    }
}

function signUp() {
    let name = document.getElementById("signUpName").value;
    let email = document.getElementById("signUpEmail").value;
    let password = document.getElementById("signUpPassword").value;
    
    if (name && email && password) {
        alert("Sign Up Successful!");
        toggleForms(); 
    } else {
        alert("Please fill all fields.");
    }

}


document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json") // تحميل البيانات من الملف
        .then(response => response.json())
        .then(data => {
            displayDoctors(data);

            // البحث عند الكتابة في مربع البحث
            document.getElementById("search").addEventListener("input", function () {
                let query = this.value.toLowerCase();
                let filtered = data.filter(doctor =>
                    doctor.name.toLowerCase().includes(query) ||
                    doctor.specialization.toLowerCase().includes(query)
                );
                displayDoctors(filtered);
            });
        });
});

// دالة لعرض قائمة الأطباء
function displayDoctors(doctors) {
    let container = document.getElementById("doctorsList");
    container.innerHTML = "";
    doctors.forEach(doctor => {
        let div = document.createElement("div");
        div.classList.add("doctor-card");
        div.innerHTML = `<h3>${doctor.name}</h3>
                         <p>التخصص: ${doctor.specialization}</p>
                         <p>الهاتف: ${doctor.phone}</p>`;
        container.appendChild(div);
    });
}
