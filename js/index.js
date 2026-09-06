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




