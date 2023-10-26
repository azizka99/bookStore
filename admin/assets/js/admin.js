const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const close_menu = document.querySelector('.close-menu');
const mobile_page1 = document.querySelector('.mobile-page-1');
const mobile_page2 = document.querySelector('.mobile-page-2');
const mobile_page3 = document.querySelector('.mobile-page-3');
const mobile_page4 = document.querySelector('.mobile-page-4');
const mobile_page5 = document.querySelector('.mobile-page-5');
const mobile_page6 = document.querySelector('.mobile-page-6');

var menuAciqdirmi = false;

menu_btn.addEventListener('click',function(){
        mobile_menu.classList.remove('close')
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        menuAciqdirmi = true;
}) 

close_menu.addEventListener('click',function(){
    if(menuAciqdirmi = true){
        mobile_menu.classList.remove('is-active');
        mobile_menu.classList.toggle('close');
        menu_btn.classList.remove('is-active');
    menuAciqdirmi = false;
    }
}) 

mobile_page1.addEventListener('click',function(){
    if(menuAciqdirmi = true){
        mobile_menu.classList.remove('is-active');
        mobile_menu.classList.add('close');
        menu_btn.classList.remove('is-active');
    } menuAciqdirmi = false;
})

mobile_page2.addEventListener('click',function(){
    if(menuAciqdirmi = true){
        mobile_menu.classList.remove('is-active');
        mobile_menu.classList.add('close');
        menu_btn.classList.remove('is-active');
    } menuAciqdirmi = false;
})

mobile_page3.addEventListener('click',function(){
    if(menuAciqdirmi = true){
        mobile_menu.classList.remove('is-active');
        mobile_menu.classList.add('close');
        menu_btn.classList.remove('is-active');
    } menuAciqdirmi = false;
})

mobile_page4.addEventListener('click',function(){
    if(menuAciqdirmi = true){
        mobile_menu.classList.remove('is-active');
        mobile_menu.classList.add('close');
        menu_btn.classList.remove('is-active');
    } menuAciqdirmi = false;
})

mobile_page5.addEventListener('click',function(){
    if(menuAciqdirmi = true){
        mobile_menu.classList.remove('is-active');
        mobile_menu.classList.add('close');
        menu_btn.classList.remove('is-active');
    } menuAciqdirmi = false;
})

mobile_page6.addEventListener('click',function(){
    if(menuAciqdirmi = true){
        mobile_menu.classList.remove('is-active');
        mobile_menu.classList.add('close');
        menu_btn.classList.remove('is-active');
    } menuAciqdirmi = false;
})