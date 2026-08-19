let totalCount = 0;

function registration(){

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const sid = document.getElementById("sid").value;
    const email = document.getElementById("email").value;
    const credit = document.getElementById("credit").value;
    const dept = document.getElementById("department").value;

    let hasFnameError = false;
    let hasLnameError = false;
    let hasIdError = false;
    let hasEmailError = false;
    let hasCreditError = false;
    let hasDeptError = false;

    if(fname==""){
        document.getElementById("fnameError").innerHTML="First Name cannot be empty";
        hasFnameError=true;
    }else{
        document.getElementById("fnameError").innerHTML="";
    }

    if(lname==""){
        document.getElementById("lnameError").innerHTML="Last Name cannot be empty";
        hasLnameError=true;
    }else{
        document.getElementById("lnameError").innerHTML="";
    }

    if(sid==""){
        document.getElementById("sidError").innerHTML="Student ID is required";
        hasIdError=true;
    }else if(!sid.includes("-")){
        document.getElementById("sidError").innerHTML="Student ID must contain -";
        hasIdError=true;
    }else{
        document.getElementById("sidError").innerHTML="";
    }

    if(email==""){
        document.getElementById("emailError").innerHTML="Email is required";
        hasEmailError=true;
    }else if(!email.includes("@")){
        document.getElementById("emailError").innerHTML="Invalid Email";
        hasEmailError=true;
    }else{
        document.getElementById("emailError").innerHTML="";
    }

    if(credit=="" || credit<0 || credit>=148){
        document.getElementById("creditError").innerHTML="Credit must be 0-147";
        hasCreditError=true;
    }else{
        document.getElementById("creditError").innerHTML="";
    }

    if(dept==""){
        document.getElementById("deptError").innerHTML="Select Department";
        hasDeptError=true;
    }else{
        document.getElementById("deptError").innerHTML="";
    }

    if(!hasFnameError && !hasLnameError && !hasIdError && !hasEmailError && !hasCreditError && !hasDeptError){

        totalCount++;
        document.getElementById("totalRegistrations").innerHTML=totalCount;

        document.getElementById("studentTable").innerHTML +=
        "<tr>" +
        "<td>"+fname+"</td>" +
        "<td>"+lname+"</td>" +
        "<td>"+sid+"</td>" +
        "<td>"+email+"</td>" +
        "<td>"+credit+"</td>" +
        "<td>"+dept+"</td>" +
        "</tr>";

        document.getElementById("studentForm").reset();
    }

    return false;
}