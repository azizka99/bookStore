import { ref, set, onValue, get, push } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from './firebase.js';



let btn = document.querySelector('#btn');
let alert = document.querySelector('#alert');

let userWrong= document.querySelector('#username');
let passWrong=document.querySelector('#password')


let snapshot =push(ref(db, '/admins'));
let key =snapshot.key;

set(ref(db, '/admins/'+key),{
    username: 'admin1',
    password: '123456',
    username: 'admin2',
    password: '123456',
    username: 'admin3',
    password: '123456'
})
btn.addEventListener('click', function(){
   
    let username= document.querySelector('#username').value;
    let password =document.querySelector('#password').value;

    get(ref(db, '/admins')).then(snapshot=>{
       const adminsJson= snapshot.val();
       let tapildi= false;
       
       for(let[key,admin]of Object.entries(adminsJson)){
           if(admin.username===username && admin.password===password){
               sessionStorage.setItem('admin_key', key);
               window.location.reload();
               tapildi===true;
               window.location.href = 'http://www.google.com';
               return;
               break;
           }
           
       }
            if(!tapildi){
                alert.innerHTML=`Username or password is wrong!`
                alert.style.color='red';
                userWrong.style.borderColor ='red';
                passWrong.style.borderColor ='red';
            }
    });


   
})