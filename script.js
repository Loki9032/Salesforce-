function beforeSubmit(){
    let outputDate = document.querySelector(".outputDate");
    let inputdate = document.querySelector(".inputDate");
    console.log('input Date:' , inputdate.value);
    let formatedDate = new Date(inputdate.value).toLocaleDateString("en-US");
    outputDate.value = formatedDate;
}