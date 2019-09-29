function appendMailTo(){
    let message = document.getElementById("mailMessage").value;
    let subject = document.getElementById("mailSubject").value;
    console.log(subject);
    console.log(message);

    let mailToAttr = document.getElementById("sendMail");
    mailToAttr.setAttribute("href, mailto:vergararonnel18@gmail.com?subject="+ subject+ "&body=" + message);
}
    let data= new Date();   
    let YearPos =document.getElementById("getYear");
    let currYear =Date.getFullYear();
    yearPos.innerHTML =currYear;;
