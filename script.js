let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}


let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}




document.querySelectorAll('nav a, .projects-list a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href.startsWith('#')) {
            return;
        }

        e.preventDefault();

        const targetID = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetID);

        const offset = 80; 

        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});




const scriptURL = 'https://script.google.com/macros/s/AKfycbwf8ZopmIR8BL11ZHSVxfLpOhimqPRB63uflGjzmmxXydQcU-kAdbEgUyMbiC0QMGAS/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})