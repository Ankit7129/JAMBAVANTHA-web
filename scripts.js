document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    
    var form = e.target;
    var formData = new FormData(form);
    
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('formMessage').innerHTML = "Thank you for your submission! We'll get back to you soon.";
            document.getElementById('formMessage').style.display = "block";
            document.getElementById('formMessage').style.color = "green";
            form.reset(); // Clear the form fields after submission
        } else {
            document.getElementById('formMessage').innerHTML = "Oops! Something went wrong. Please try again.";
            document.getElementById('formMessage').style.display = "block";
            document.getElementById('formMessage').style.color = "red";
        }
    }).catch(error => {
        document.getElementById('formMessage').innerHTML = "Oops! There was a problem submitting the form.";
        document.getElementById('formMessage').style.display = "block";
        document.getElementById('formMessage').style.color = "red";
    });
});
