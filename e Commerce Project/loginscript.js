const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".Signup-link"),
  login = document.querySelector(".login-link");

//js code to show/hide password and change icon
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwFields) => {
      if (pwFields.type === "password") {
        pwFields.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwFields.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

//js code to appear signup and login form
signUp.addEventListener("click", () => {
  container.classList.add("active");
});

login.addEventListener("click", () => {
  container.classList.remove("active");
});

window.addEventListener("DOMContentLoaded", () => {
  console.log("button is click");

  let arr = [
    { username: "Akash123@gmail.com", password: "Akash123", name: "Akash" },
    { username: "Aniket123@gmail.com", password: "Aniket123", name: "Aniket" },
    { username: "Akshay123@gmail.com", password: "Akshay123", name: "Akshay" },
  ];

    const login = document.querySelector("#login");
    login.addEventListener('click',()=>{

        let loginemail = document.querySelector("#loginemail").value;
        let loginpass = document.querySelector("#loginpass").value;

        console.log("button is click");
        console.log(loginemail+" "+loginpass);

        let correctMail = ValidateEmail(loginemail);
        if(correctMail==false){
            document.querySelector("#loginMsg1").innerHTML="Invalid Email ";
        }
        else{
            document.querySelector("#loginMsg1").innerHTML="";
        }
        
        let correctlogin = ckecharr(loginemail,loginpass);
        if(correctlogin){
            alert("login success");
            showHomePage();
        }
        else{
            document.querySelector("#loginmsg").innerHTML="Wrong password or username success";
        }

      
    });
    function ckecharr(email,pass){
        for(let i = 0;i<arr.length;i++){
            if(arr[i].username==email && arr[i].password==pass){
                return true;
            
            }
        }
        return false;
    }

    function showHomePage()
    {
        location.href='index.html';
    }


  const register = document.querySelector("#register");
  register.addEventListener("click", () => {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let pass1 = document.querySelector("#pass1").value;
    let pass2 = document.querySelector("#pass2").value;

    let checkuser = isAvailable(email);
    if(checkuser == false){
        document.querySelector("#emailMsg").innerHTML="user is already exits";
    }
    
    let correctmail = ValidateEmail(email);
    if(correctmail==false)
    {
        document.querySelector("#emailMsg").innerHTML="You have entered an invalid email address!";
    }
    let correctpass = ValidatePass(pass1,pass2);

   

  

    if(correctmail==true && correctpass==true && checkuser==true){
        alert("Register successful");
       
        arr.push({ username: email, password: pass1, name: name });

        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#pass1").value = "";
        document.querySelector("#pass2").value = "";
        console.log(arr);}

    
  
  });

  function isAvailable(email){
    for(let i = 0; i<arr.length;i++){
        if(email == arr[i].username)
        return false;
    }
    return true;
  }

  function ValidateEmail(inputText) {
    var mailformat = /@./;
    if (inputText.match(mailformat)) {
      return true;

    } 
      return false;
   
  }

  function ValidatePass(pass1,pass2){

    if(pass1=="" && pass2==""){
        document.querySelector("#passMsg").innerHTML = "Enter password";
        return false;
    }
    else if(pass1.length<8 || pass1.length>15){
        document.querySelector("#passMsg").innerHTML = "password must greater than 8 charactor";
        return false;
    }
    if (pass1 == pass2) {
        document.querySelector("#passMsg1").innerHTML = "";
        document.querySelector("#passMsg").innerHTML = "";
        return true;
      }
      else {
        document.querySelector("#passMsg1").innerHTML = "password not matching";
        return false;
      }
  }
});
