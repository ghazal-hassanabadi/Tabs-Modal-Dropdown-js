const tabContainer = document.querySelector(".tab");

const allTabButtons = document.querySelectorAll(".tablinks");

const tabSection = document.querySelectorAll("#tab1, #tab2, #tab3");

  tabContainer.addEventListener("click", function(e) {


    if (!e.target.classList.contains("tablinks")) {
    return;
}

    
        
        const tabId = e.target.getAttribute("data-tab");


        allTabButtons.forEach(function(button) {
          button.classList.remove("active");

        });

        e.target.classList.add("active");

        tabSection.forEach(function(section) {
          section.classList.remove("active");
          

        });

     

        const selectedTab = document.getElementById(tabId);



        selectedTab.classList.add("active");

});


/**----------------Modal------------- */

const openModalBtn = document.querySelector("#openModalBtn")

const closeModalBtn = document.querySelector("#closeModalBtn")


const modalBox = document.querySelector("#modalBox")

const modalOverlay = document.querySelector("#modalOverlay")



openModalBtn.addEventListener("click", 
  function(){

    modalOverlay.classList.remove("hidden");
    modalBox.classList.remove("hidden");


  }
)


closeModalBtn.addEventListener("click", 
  function(){ 

    modalOverlay.classList.add("hidden");
    modalBox.classList.add("hidden");
    
  }
)


modalOverlay.addEventListener("click", 
  function(){

    modalOverlay.classList.add("hidden");
    modalBox.classList.add("hidden");
    
  }
)


document.addEventListener ("keydown" , 
  function(e){

    if (e.key === "Escape"){

          modalOverlay.classList.add("hidden");
          modalBox.classList.add("hidden");
    }

   
  }
)

/*sign */

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

const confirmPasswordInput = document.getElementById("confirmPassword");
const confirmPasswordError = document.getElementById("confirmPasswordError");

const form = document.getElementById("signupForm");



const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

const passwordIcon = togglePassword.querySelector("i");
const confirmPasswordIcon = toggleConfirmPassword.querySelector("i");

const successMessage = document.getElementById("successMessage");


function isEmailValid() {
  return emailInput.checkValidity();
}

function isPasswordValid() {
  return passwordInput.value.length >= 6;
}

function doPasswordsMatch() {
  return confirmPasswordInput.value === passwordInput.value;
}

emailInput.addEventListener("input",
     function() {

        if (isEmailValid())
             {
           emailError.textContent = "";
             }

         else {
           emailError.textContent = "Please enter a valid email";   
              }     
  


}



 
);


passwordInput.addEventListener("input", 
    function() {

      if (isPasswordValid())
        {
         passwordError.textContent = "";
        }
     else {
         passwordError.textContent = "Password must be at least 6 characters";
          }

}

);


confirmPasswordInput.addEventListener("input", 
    function() {

      if (doPasswordsMatch())
        {
          confirmPasswordError.textContent = "";
        } 
      else {
         confirmPasswordError.textContent = "Passwords do not match";
           }

}

);


form.addEventListener("submit", 
    function(event) {
       event.preventDefault();

       if (isEmailValid() && isPasswordValid() && doPasswordsMatch())

          {
            successMessage.textContent = "ثبت نام موفق بود";
          
        }
         else {
          console.log("لطفاً فیلدها را درست پر کنید");
        }
}

);









togglePassword.addEventListener("click", 
    function() {

  if (passwordInput.type === "password") 
    {
       passwordInput.type = "text";
       passwordIcon.classList.remove("fa-eye");
       passwordIcon.classList.add("fa-eye-slash");
  }
   else {
       passwordInput.type = "password";
       passwordIcon.classList.remove("fa-eye-slash");
       passwordIcon.classList.add("fa-eye");
  }

}

);


toggleConfirmPassword.addEventListener("click", 
    function() {

  if (confirmPasswordInput.type === "password")
     {
       confirmPasswordInput.type = "text";
       confirmPasswordIcon.classList.remove("fa-eye");
       confirmPasswordIcon.classList.add("fa-eye-slash");
     }
   else {
        confirmPasswordInput.type = "password";
        confirmPasswordIcon.classList.remove("fa-eye-slash");
        confirmPasswordIcon.classList.add("fa-eye");
        }

}

);


/*-------------------Dropdown---------------*/


const dropdownWrapper = document.querySelector("#dropdownWrapper")
const dropdownList = document.querySelector("#dropdownList")
const dropdownBtn = document.querySelector("#dropdownBtn")


dropdownBtn.addEventListener("click" , 
  function(){

    
    dropdownList.classList.toggle("active")
  }
)


document.addEventListener ("click" , 
  function(e){
    if(!dropdownWrapper.contains(e.target)){

      dropdownList.classList.remove("active");
    }
  }
)





