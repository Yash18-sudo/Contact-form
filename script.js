function sendEmail()
{ 
    Email.send({
      SecureToken:"405c5b46-32cf-403a-a18b-4ab17c53478e",
      To: 'yashbahuguna397@gmail.com',
      From : "yashbahuguna397@gmail.com",
      Subject : "Client Query",
      Body : "Name: " + document.getElementById("name.value") 
      + " <br> Email: " + document.getElementById("email").value 
      +  " <br> Phone no. : " + document.getElementById("phone").value 
      + " <br> Message: " + document.getElementById("message").value

    }).then(
    message => {
      if(message == 'OK')
      {
        swal("Good job!", "Your Data is Successfully Received", "success");
      }
      else{
        swal("Something Went Wrong", "Your Data is not received", "error");
      }
    }
);
}