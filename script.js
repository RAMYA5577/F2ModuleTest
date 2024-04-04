let form=document.querySelector("form");
form.addEventListener("submit",onSubmitForm);
let employeeContainer=document.createElement("div");
let employeeCountText=document.querySelector(".employeeCountText");

let parent=document.querySelector("body");
// parent.append(employeeContainer);

// errorMessage
let errorMessage=document.createElement("p");

//successMessage
let successMessage=document.createElement("p");

let empId=1;
// let formState="CREATE";
function onSubmitForm(event){
    event.preventDefault();
    if((event.target.name.value=="") || 
    (event.target.profession.value=="") ||(event.target.age.value=="")){
        // console.log("Fields are empty")
        // errorMessage.innerText="";
        successMessage.innerText="";
        errorMessage.innerText="Error : Please Make sure All the  fields are filled before adding in an employee!";
        errorMessage.className="errorMessage";
        let nextSibling=document.querySelector(".nextSibling");
        parent.insertBefore(errorMessage,nextSibling);
       form.reset();
       
        }
    else{
        errorMessage.innerText="";
        successMessage.innerText="Success: Employee Added!";
        successMessage.className="successMessage";
        let nextSibling=document.querySelector(".nextSibling");
        parent.insertBefore(successMessage,nextSibling);

    const employee={
        id:empId++,
        name:event.target.name.value,
        profession:event.target.profession.value,
        age:event.target.age.value
    }
    addNewEmployeeRecord(employee);
    }
    form.reset();
   
}
let count=0;
let spanElement=document.querySelector("span");

function addNewEmployeeRecord(employee){

    employeeCountText.innerText="";
//        count++;
//    spanElement.innerText=`${count}`;

   let EmployeeBox=document.createElement("div");
   EmployeeBox.className="employeeBox";

   let EmployeeDetails=document.createElement("ul");
   EmployeeDetails.className="employeeDetails";
   //list
  
   for(let k in employee){
    let List=document.createElement("div");
   List.className="list";
   
   List.innerText=`${k}: ${employee[k]}`;
   console.log(List.innerText);
   EmployeeDetails.append(List);
        
   }

   
   let deleteButton=document.createElement("button");
   deleteButton.className="deleteButton";
   deleteButton.innerText="Delete User";
   deleteButton.addEventListener("click",deleteEmployee);

   EmployeeBox.append(EmployeeDetails);
   EmployeeBox.append(deleteButton);

   employeeContainer.append(EmployeeBox);
   parent.append(employeeContainer);   
}

function deleteEmployee(event){
    const deleteButton=event.target;
    const record=deleteButton.parentNode;
    record.remove();
} 
