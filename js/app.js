

/**
 * Define Global Variables
 * 
*/
const link = document.createElement("a");
const newList = document.createElement("li");
const navList = document.querySelector("#navbar__list");
const allSections = document.querySelectorAll("section");
const navMenu = document.querySelector(".navbar__menu");
const navData = document.querySelectorAll("data-nav");

/**
 * End Global Variables
 

// build the nav/** */

navigationMenu();

// Add class 'active' to section when near top of viewport
const observer = new IntersectionObserver((entries,observer) => {
   entries.forEach(entry => {
    if (entry.isIntersecting)
        {
        console.log("in the view")
        entry.target.classList.add("your-active-class");
        }
    else{
            console.log("out of the view");
            entry.target.classList.remove("your-active-class");
        }
  });
});
    allSections.forEach(section => 
        {
    observer.observe(section);
        });
    



// Scroll to section on link click
    function navigationMenu ()
        {
            for (let i=0; i<document.querySelectorAll("section").length;i++)
            {
                const link = document.createElement("a");
                const newList = document.createElement("li");
                link.setAttribute("class","navbar__menu menu__link")
                link.setAttribute("data-nav","section"+i); 
                link.textContent = "section "+(i+1); 
                newList.appendChild(link);   
                link.addEventListener('click',function(){
                    allSections[i].scrollIntoView({behavior:"smooth"});
                });
                navList.appendChild(newList);
            
                
            }
        }




 












