const submitFeedback = () => {
    // Capture user data
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const userExperience = document.getElementById('userExperience').value;

    alert('Thank you for your valuable feedback')

    // Display captured data
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('productExperience').innerHTML = userExperience;

    // Make the display area visible
    document.getElementById('userInfo').style.display = 'block';

    // TODO: Make the display area visible only when all required fields have value
    const requiredFields = document.querySelectorAll('[required]');
    let allFieldsHaveValue = true;
  
    requiredFields.forEach((field) => {
      if (!field.value) {
        allFieldsHaveValue = false;
    
        document.getElementById('userInfo').style.display = 'none';

      }else {
        document.getElementById('userInfo').style.display = 'block';

      }})

};

// Target the submit button for execution when clicked
const submitBtn = document.getElementById('submitBtn');
submitBtn.onclick = submitFeedback;

// Execute submitFeedback() also with the 'Enter' key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        submitFeedback();
    }
}); 