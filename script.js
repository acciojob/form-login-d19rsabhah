function getFormvalue() {
    //Write your code here
	   event.preventDefault(); // Prevent form submission

    // Get the form element
    let form = document.getElementById("form1");

    // Retrieve the values of 'fname' and 'lname' input fields
    let firstName = form.elements["fname"].value;
    let lastName = form.elements["lname"].value;

    // Display the full name in an alert
    alert(firstName + " " + lastName);
}
