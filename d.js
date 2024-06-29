document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // You can replace this with your own logic for handling the login credentials
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
  });
  