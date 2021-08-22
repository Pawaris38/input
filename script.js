// validate 
// function idcard(input)
//    {
//       var backid = /^[a-zA-Z]{2}[0-9]{10}$/;
//       if(input.value.match(backid))
//       {
//       alert('รหัสถูกต้อง');
//       return true;
//       }
//       else
//       {
//       alert('รหัสไม่ถูกต้อง');
//       return false;
//       }
//    }
// // validate 
//    function checkeng() {
//       var str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" 
//       var val= document.getElementById("text").value;
//       var valOK = true;
      
//       for (i=0; i<val.length & valOK; i++){
//             valOK = (str.indexOf(val.charAt(i))!= -1) 
//       }
      
//       if (!valOK) {
//             alert("ภาษาอังกฤษเท่านั้น !!! ")
//             return false
//       } return true
//  } 
// ฟังค์ชั่นที่ใช้
function ValidateAlpha(evt) {
 const text = document.getElementById("text");
 const submit = document.getElementById("submit");
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if(text.value.length < 2){
    if (charCode > 31 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        return false;
    }
    else{
       
        return true;
    }
   }
   else{
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
         return false;
     }
     return true;
   }
   
}
// const cname = document.getElementById("cname");
// const btn = document.getElementById("btn");

// btn.addEventListener('click', function(){
//   console.log(cname.value);
// });



submit.addEventListener('click', function(){
   alert("รหัสถูกต้อง");
});
