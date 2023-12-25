const bar = document.querySelector('.bar');
const nav = document.querySelector('.menu');
const iclose = document.querySelector('.cross');
const menu_item = document.querySelectorAll('menu_link');


bar.addEventListener('click', () => {
    nav.classList.toggle('active');
});

iclose.addEventListener('click',() => {
    nav.classList.remove('active');
});

menu_item.forEach((menu_item)=>{
    menu_item.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
})

// change background header
function scrollHeader(){
    const header = document.getElementById('.header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);

// hero type effect

const typed = document.querySelector('.typed');

if(typed){
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

// scroll section active link

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(section =>{
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        let sectionId = section.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href *= ' + sectionId + ']').classList.add('active-link');
        }
        else{
            document.querySelector('.menu a[href *= ' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll' , scrollActive);

// resume scroll

const pages = document.querySelectorAll('.page');
const resume = document.querySelector('.resume');

function resumeActive(){
    const scrollY = window.pageYOffset;

    pages.forEach(page =>{
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop - 50;

        let sectionId = page.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.resume_tabs a[href *= ' + sectionId + ']').classList.add('current');
        }
        else{
            document.querySelector('.resume_tabs a[href *= ' + sectionId + ']').classList.remove('current');
        }
    })
}
window.addEventListener('scroll' , resumeActive);
