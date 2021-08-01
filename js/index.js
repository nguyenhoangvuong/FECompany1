const nav = document.querySelector('.header__nav')
const header = document.querySelector('.header__nav')
window.addEventListener('scroll',()=>{
    const scrollHeight = window.pageYOffset
    if(scrollHeight > 180){
        nav.classList.add('fix')
        header.style.zIndex = "1000"
    }
    else{
        nav.classList.remove('fix')
    }
})


const hamburger = document.querySelector('.hamburger-icon')
const navList = document.querySelector('div.grid.wide.header__nav')

hamburger.addEventListener('click',()=>{
    navList.classList.toggle('open')
})



const scroll = ScrollReveal({
    distance:"100px",
    duration:2000,
});

scroll.reveal(`.title_h1,.header__text-title,.system__address-list`,{
    origin:"left",
});
scroll.reveal(`.project__container-img img,.img-doitac`,{
    origin:"left",
    interval:200
});
scroll.reveal(`p,h4,strong`,{
    origin:"top",
});
scroll.reveal(`.introduce__body-second,.text-align,.fields-item,.relationship-img`,{
    origin:"bottom",
});
scroll.reveal(`.responsibility-body-img img,.ban_do`,{
    origin:"right",
    interval:200
});

