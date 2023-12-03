	
	
	
	function saveToLocalStorage() {
		  // Get the user input
		  const namePrivate = document.querySelector('#namePrivate').value;
		  const emailPrivate = document.querySelector('#emailPrivate').value;
		  const phoneNumberPrivatePrivate = document.querySelector('#phoneNumberPrivatePrivate').value;
		  const birthdatePrivate = document.querySelector('#birthdatePrivate').value;
		  const genderPrivate = document.querySelector('#genderPrivate').value;

		  // Check if the input is not empty
		  if (userInput.trim() !== '') {
				// Store the input in local storage
				localStorage.setItem('namePrivate', namePrivate);
				localStorage.setItem('emailPrivate', emailPrivate);
				localStorage.setItem('phoneNumberPrivatePrivate', phoneNumberPrivatePrivate);
				localStorage.setItem('birthdatePrivate', birthdatePrivate);
				localStorage.setItem('genderPrivate', genderPrivate);

				// Optionally, you can also display a confirmation or perform other actions
				alert('User input saved to local storage: ' + namePrivate);
		  } else {
				// Display an error or handle the case when the input is empty
				alert('Please enter a value before saving.');
		  }
	 }