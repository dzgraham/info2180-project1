document.addEventListener('DOMContentLoaded', function(){
    const allButtons = document.querySelectorAll('.btn');
    const sub_button = allButtons[1];
    const message = document.querySelector('.message');
    const emailSub = document.getElementById("email");

    sub_button.addEventListener("click", function(event){
        const  email = emailSub.value.trim();
        event.preventDefault();
        if((email==='') || ((!(email.includes("@"))) || (!(email.endsWith(".com"))) ||(email.includes("@.com")) || (email.startsWith("@")) )){
            message.style.color = 'red';
            message.textContent = "Please enter a valid email address"; 
        }else{
            message.style.color = 'blue';
            message.textContent = `Thank you! Your email address, ${email}, has been added to our mailing list!`;
        }
    })
});