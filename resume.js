var navManuAnchorTags = document.querySelectorAll('.nav-manu a');
// console.log(navManuAnchorTags);
var scrollsmooth = document.getElementsByClassName("scroll");
var current = 0;

for (var i = 0; i < navManuAnchorTags.length; i++) {
    navManuAnchorTags[i].addEventListener("click", function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);
        var scroll1 = setInterval(function () {
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            // console.log(targetSectionCoordinates.top);
            if (targetSectionID == "contact") {
                if (targetSectionCoordinates.top <= 280) {
                    clearInterval(scroll1);
                    return;
                }
            }
            else if (targetSectionCoordinates.top <= 30) {
                clearInterval(scroll1);
                return;
            }
            window.scrollBy(0, 50);
        }, 20);
    });
}

var tapTotop = document.getElementsByClassName("tap-to-top");
// console.log(tapTotop);
for (var i = 0; i < tapTotop.length; i++) {
    tapTotop[i].addEventListener("click", function(event){
        event.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
    });
}


var skillsbar = document.querySelectorAll('.skill-progress>div');
// console.log(skillsbar);
// var skillcontainer = document.getElementsByClassName("skill-contant");
// console.log(skillcontainer);
window.addEventListener("scroll", checkscroll);
var animationDone = false;

function initialiseBars() {
    for(let bar of skillsbar) {
        bar.style.width = 0 + '%';
    }
}
initialiseBars();

function fillBars() {
    for(let bar of skillsbar) {
        let destinationWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth>destinationWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        },5);
    }
}
function checkscroll() {
    // console.log('hii');
    // var coordinates = skillcontainer.getBoundingClientRect();
    const elem = document.getElementById("skills");
    const coordinates = elem.getBoundingClientRect();
    if (!animationDone && coordinates.top <= window.innerHeight) {
        animationDone = true;
        // console.log("hii hellow");
        fillBars();
    }
    else if(coordinates.top > window.innerHeight) {
        animationDone = false;
        initialiseBars();
    }
}

const name  =document.getElementById('name');
const email  =document.getElementById('email');
const phone  =document.getElementById('phone');

const submit= document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("clicked");

    Email.send({
        SecureToken : "06b41583-6aeb-4585-8eb3-bfd9bca56a62",
        To : 'surajkumarkharwar444@gmail.com',
        From : "surajkumarkharwar444@gmail.com",
        Subject : "New massage from portfolio",
        Body : "Name: " + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Phone no: " + document.getElementById("phone").value
                + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Succesfully!"))
    ;
})


