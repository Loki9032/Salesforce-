function beforeSubmit(){
    let outputDate = document.querySelector(".outputDate");
    let inputdate = document.querySelector(".inputDate");
    console.log('input Date:' , inputdate.value);
    let formatedDate = new Date(inputdate.value).toLocaleDateString("en-US");
    outputDate.value = formatedDate;
}

function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500);
