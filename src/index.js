import "./style/index.scss"
import * as bootstrap from 'bootstrap'
import * as fontello from '../src/icons/fontello-92bd0fad/css/fontello.css'
import $ from 'jquery';
import 'slick-carousel';

let men = {
    "yo":11,
    "job":"jobless",
    "preference":"whatIsThat",


}
console.log(men)
$(".slick-slider").slick({
    slidesToShow: 3,
    infinite:true,
    slidesToScroll: 3,
    autoplay: false,
      dots: true,
      arrows: false,
      responsive: [
        {
        breakpoint:768,
        settings:{
            arrows: true,
            dots: false,
            variableWidth: true,
            slidesToShow: 2,
            slidesToScroll: 2,
                },
    },
    {
      breakpoint:576,
      settings:{
        arrows: true,
         dots: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
                },
    },
    {
      breakpoint:320,
      settings:{
        arrows: true,
         dots: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
               }, 
    }]
   });

let slickActive = document.querySelectorAll('.OurAwesomePortfolio .slick-dots li')  

slickActive.forEach(item =>{
    if(item.classList.contains('slick-active')){
        item.classList.remove('slick-active');
    }
    item.addEventListener('click',function(){
        item.classList.add('slick-active')
    })

})


 let burgerMenu = document.querySelector('.header__burgerMenu');
 let navBody = document.querySelector('.navBody');
 let navLinks = document.querySelectorAll('.header__link');
 function burgerClick(){
     
if(burgerMenu){
        
    burgerMenu.addEventListener('click',function(e){
            document.body.classList.toggle('lock');
            burgerMenu.classList.toggle('active');
            navBody.classList.toggle('active');
        
    
            
        })
    }
    navLinks.forEach(item =>{
            item.addEventListener('click',function(e){
                console.log(e.target.classList)
                if(e.target.classList.contains('header__link')){
                    document.body.classList.remove('lock');
                    burgerMenu.classList.remove('active');
                    navBody.classList.remove('active');
                    
                }
            })
        })
}

burgerMenu.addEventListener('click',burgerClick());