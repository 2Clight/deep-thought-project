const journeyBoard= document.querySelector('.journey-board');
const arrow=document.querySelector('.arrow');
const number=document.querySelector('.number');
const heading=document.querySelector('.explore-jo');
const listElements=document.querySelectorAll('.list-element');
const noticeBoard=document.querySelector('.notice-board');
const closeBtn= document.querySelector('.close-btn')
// to control the journey board and its elements
function collapse(){
    arrow.classList.toggle('rotate-icon');
    journeyBoard.classList.toggle('reveal');
    number.classList.toggle('invisible');
    heading.classList.toggle('revealing');
    // adding class list-show to each list element
    listElements.forEach(element => {
        element.classList.add('li-show');
    });
    
}

// pairing it with the notification button from the navbar to toggle the notification on or off
closeBtn.addEventListener('click', function(){
    noticeBoard.classList.add('hide-notice');
    noticeBoard.classList.add('show-notification')
})

const notification=document.querySelector('.notification');

notification.addEventListener('click', function(){
    noticeBoard.classList.toggle("show-notification");
    noticeBoard.classList.remove("hide-notice");

})



// to loop throught the 3 elements on card 4 and collapse or reveal them
document.addEventListener("DOMContentLoaded", function() {
    
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
           
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
                this.firstChild.classList.remove("rotate-icon");
            } else {
                content.style.display = "block";
                this.firstChild.classList.add("rotate-icon");
            }
           
        });
    }
    
})

// to fetch the json file
fetch("data.json")
.then(response => response.json())
.then(data => showInfo(data));

// to insert the json files into the html elements
function showInfo(data){
    
    let explore= document.querySelector('.explore');
    let technical=document.querySelector('.tech-title');
    let video=document.querySelector('.vid');
   
   
    video.innerHTML=`<iframe class="vid" width="100%" height="300" src="${data.tasks[0].assets[0].asset_content}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> `;
    explore.innerHTML=`${data.tasks[0].task_title}`;
    technical.innerHTML=`${data.tasks[0].assets[0].asset_title}`;

    let managementTypes = document.querySelectorAll('.management-types li');

            // picking out assets
            let assets = data.tasks[0].assets;

            // Looping through each management type and replacing the innerHtml 
            managementTypes.forEach((item, index) => {
                if (index < assets.length) {
                    item.innerHTML = assets[index].asset_title;
                }
            });
    let cardTitles = document.querySelectorAll('.container h4');
    let cardDescription= document.querySelectorAll('.description')
           cardTitles.forEach((title, i) => {
            if (i < assets.length) {
                title.innerHTML = assets[i].asset_title;
            }
        });
        // adding the description for each element and setting text description in bold
        cardDescription.forEach((description, i) => {
            if (i < assets.length) {
                description.innerHTML = `<span class="bold"> Description: </span>` + assets[i].asset_description;
            }
        });
    
}
