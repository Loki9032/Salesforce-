let captchachecked = false;
function beforeSubmit(event){
        if(captchachecked){     
        let outputDate = document.querySelector(".outputDate");
        let inputdate = document.querySelector(".inputDate");
        let formatedDate = new Date(inputdate.value).toLocaleDateString("en-US");
        outputDate.value = formatedDate;
        
        }else{
        alert ("Please Check the reCAPTCHA");
        event.preventDefault();
        }
}

function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500);

function capthasuccess(){
  captchachecked = true;
}
