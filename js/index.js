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




/*-------------------Dropdown---------------*/


const dropdownWrapper = document.querySelector("#dropdownWrapper")
const dropdownList = document.querySelector("#dropdownList")
const dropdownBtn = document.querySelector("#dropdownBtn")








