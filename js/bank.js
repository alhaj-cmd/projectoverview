document.getElementById('logins').addEventListener('click',
function(){
   const mailFild = document.getElementById('user-mail');
   const userMail = mailFild.value;
   //password field
   const passFild = document.getElementById('user-pass');
   const password = passFild.value;

   if (userMail =="alhajsarkar@gmail.com" && password =='sarkar'){
    window.location.href='index2.html'
   }
})

// click button another pages 
// document. getElementById("logins"). onclick = function () {
//     location. href = "file:///E:/Batch-5/inter-midiet-js/projectoverview/index2.html?";
// }