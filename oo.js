

// const validate=()=>{
//     console.log("archana");
//     const username=document.getElementById("demo")
//     const mothername=document.getElementById("demo1")
//     const fathername=document.getElementById("demo2")
//     if(username.value.trim()===''){
//         console.log("ff");
//         alert("please enter values")
//         return false;
//     }
//     else if(username.value.length<3 || username.value.length>30){

//         alert("field should be in between 3 to 30 charactrer")
//         return false;
//     }
//     else if(mothername.value.trim()===''){
        
//         alert("please enter values")
//         return false;
// }
// else if(mothername.value.length<3 || mothername.value.length>30){

//     alert("field should be in between 3 to 30 charactrer")
//     return false;
// }
// else if(fathername.value.trim()===''){
//     console.log("ff");
//     alert("please enter values")
//     return false;
// }
// else if(fathername.value.length<3 || fathername.value.length>30){

//     alert("field should be in between 3 to 30 charactrer")
//     return false;
// }
// }

 const validate=()=>{
     let a=document.getElementById("one")
     let b=document.getElementById("two")
     let c=document.getElementById("three")
     let k=document.getElementById("four")
     let h=document.getElementById("rt")
    
    

     if(a.value.trim()===""){
         alert("avoid blank value")
         return false;
     }
     else if(a.value.length<3||a.value.length>30){
         alert("enter a minimum of 3 letters and maximum of 29 letters")
         return false;
     }
     else if(b.value.trim()===""){
        alert("avoid blank value")
        return false;
    }
    else if(b.value.length<3||b.value.length>30){
        alert("enter a minimum of 3 letters and maximum of 29 letters")
        return false;
    }
    else if(c.value.trim()===""){
        alert("avoid blank value")
        return false;
    }
    else if(c.value.length<3||c.value.length>30){
        alert("enter a minimum of 3 letters and maximum of 29 letters")
        return false;
    }
    else if(k.value.trim()===""){

        alert("avoid blank password")
        return false;
    }
    else if(k.value.length<8){
        alert("enter a minimum of 8 letters")
        return false;
       
    }
    else if(h.value.trim()===""){

        alert("avoid blank password")
        return false;
    }
    else if(h.value.length<8){
        alert("enter a minimum of 8 letters")
        return false;
       
    }
    else if(k.value!=h.value){
        alert("both password be same")
    }

    
    
    

 }




//  const strength=()=>{
//     console.log("entered strength");
//     const password=document.getElementById("exampleInputPassword1")
//     const span=document.getElementById("span")

//     const strongRegex=new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$","g");
//     const mediumRegex=new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$","g");
//     const enoughRegex=new RegExp("^(?=.{8,}).*","g");
//     if(password.value.length==0){
//         console.log("entered if");
//         span.innerHTML="type password";
//     }
   // else if(false==enoughRegex.test(password.value)){
    //     span.innerHTML="more character";
    // }
    // else if(strongRegex.test(password.value)){
    //     password.style.border="2px solid green"
    //     span.innerHTML="strong password";
    // }
    // else if(mediumRegex.test(password.value)){
    //     password.style.border="2px solid yellow"
    //     span.innerHTML="medium  password";
    // }
    // else{
    //     password.style.border="2px solid red"
    //     span.innerHTML="weak  password";
    // } 
    

// }
// my work
 const strength=()=>{
     
     const password=document.getElementById("exampleInputPassword1");
     const span=document.getElementById("span");
    const strongRegex=new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$","g");
    const mediumRegex=new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$","g");
    const enoughRegex=new RegExp("^(?=.{8,}).*","g");
    if (password.value.length==0){
        span.innerHTML="let typing";
     
    }
    else if(false==enoughRegex.test(password.value)){
            span.innerHTML="more character";
        }
        else if(strongRegex.test(password.value)){
            password.style.border="2px solid green"
            span.innerHTML="strong password";
        }
        else if(mediumRegex.test(password.value)){
            password.style.border="2px solid yellow"
            span.innerHTML="medium  password";
        }
        else{
            password.style.border="2px solid red"
            span.innerHTML="weak  password";
        } 
        


 }





