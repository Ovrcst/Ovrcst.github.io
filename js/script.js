const home = document.getElementById('home');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
let page1,page2,page3;

document.getElementById('toP2').addEventListener('click', (e)=>{
    toPageTwo();
});

home.addEventListener('click', ()=>{
    toPageOne();    
});

projects.addEventListener('click', (e)=>{
    toPageTwo();
});

contact.addEventListener('click', ()=>{
    toPageThree();
})

document.getElementById('trial-button').addEventListener('click', ()=>{
    toTrialWorks();
});

function toTrialWorks(){
    document.getElementById('trial-works').scrollIntoView();
}

function toPageTwo(){
    document.getElementById('worksOne').scrollIntoView();
    projects.classList.add('active');
    home.classList.remove('active');
    contact.classList.remove('active');
    page1=false; page2=true; page3=false;
    animateAgain();
}

function toPageOne(){
    document.getElementById('pageOne').scrollIntoView();
    projects.classList.remove('active');
    home.classList.add('active');
    contact.classList.remove('active');
    page1=true; page2=false; page3=false;
    studentAppear();
}

function toPageThree(){
    document.getElementById('pageThree').scrollIntoView();
    projects.classList.remove('active');
    home.classList.remove('active');
    contact.classList.add('active');
    page1=false; page2=false; page3=true;
    animateAgain();
}

document.addEventListener('keydown', (e)=>{
    switch (e.keyCode) {
        case 37:
            if(page2){
                toPageOne();
            }
            else if(page3){
                toPageTwo();
            }
            break;
        case 39:
            if(page1){
                toPageTwo();
            }
            else if(page2){
                toPageThree();
            }
            break;
    }
})

window.fitText( document.getElementById('contact-message-id'),0.9)