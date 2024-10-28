const loginCheck = (event) => {
    event.preventDefault(); 
    const form = event.target; 

   
    if (form.checkValidity()) {
        const email = form.email.value; 
        const password = form.password.value; 

        alert("Успешно выполнен вход!");
       
        setTimeout(() => {
            window.location.href = 'index.html'; 
        }, 1000);
    } else {
        
        form.reportValidity(); 
    }
};
