// Home page JS
const newLead = document.getElementById("new-lead")

newLead?.addEventListener("click", function(){
    window.location.href = "personal_details.html";
})

//-----------------------------------------------------------------------------------------------

// Personal details page JS
const personalNxt = document.getElementById("personal-nxt")

personalNxt?.addEventListener("click", function(){
    window.location.href = "income_details.html";
})

//-----------------------------------------------------------------------------------------------

// Income Details page JS
const incomeBack = document.getElementById("income-back")

incomeBack?.addEventListener("click", function(){
    window.location.href = "personal_details.html";
})

//-----------------------------------------------------------------------------------------------

const incomeNxt = document.getElementById("income-next")

incomeNxt?.addEventListener("click", function(){
    window.location.href = "documents.html";
})

//-----------------------------------------------------------------------------------------------

// Documents page Js

const documentsBack = document.getElementById("documents-back")

documentsBack?.addEventListener("click", function(){
    window.location.href = "income_details.html";
})

//-----------------------------------------------------------------------------------------------

const documentsNxt = document.getElementById("documents-nxt")

documentsNxt?.addEventListener("click", function(){
    // window.location.href = "lead.component.html";
    alert("This button works...")
})


