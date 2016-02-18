"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {
    
    if (document.getElementById("about") != null) {
        var aboutParagraph = document.getElementById("aboutParagraph");
        aboutParagraph.innerHTML = "This is all about me";
    }
    else if (document.getElementById("projects") != null) {
        var projectsParagraph = document.getElementById("projectsParagraph");
        projectsParagraph.innerHTML = "These are some projects";
    }
    else if (document.getElementById("contact") != null) {
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        var checkMeOut = document.getElementById("checkMeOut");  
        var submitButton = document.getElementById("submitButton");
        
        // run event on checkbox check / uncheck
        checkMeOut.addEventListener("change", function() {
        //console.log(checkMeOut.checked);
        
        (checkMeOut.checked) ? console.log('checked') : console.log('unchecked');
        });
        
        submitButton.addEventListener("click", function() {
            event.preventDefault();
           console.log("Email: " + email.value);
           console.log("Password: " + password.value); 
        });
    }
   

})();

