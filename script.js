class password{
    constructor(Capital_password,Small_password,Number_password,Special_password){
        this.Capital_password = Capital_password;
        this.Small_password = Small_password;
        this.Number_password = Number_password;
        this.Special_password = Special_password;
       
    }
    super_strong_password(){
      
        let final_password = "";
       
        for(let i = 0; i < (Math.random()*4); i++){
            final_password += this.Capital_password.charAt(Math.floor(Math.random() * this.Capital_password.length));
            final_password += this.Small_password.charAt(Math.floor(Math.random() * this.Small_password.length));
            final_password += this.Number_password.charAt(Math.floor(Math.random() * this.Number_password.length));
            final_password += this.Special_password.charAt(Math.floor(Math.random() * this.Special_password.length));
        }
        document.getElementById("password").value = final_password;
    
    }
    strong_password(){
      
        let final_password = "";
    
        for (let i = 0; i < (Math.random() * 4); i++) {
            final_password += this.Capital_password.charAt(Math.floor(Math.random() * this.Capital_password.length));
            final_password += this.Small_password.charAt(Math.floor(Math.random() * this.Small_password.length));
            final_password += this.Number_password.charAt(Math.floor(Math.random() * this.Number_password.length));
        }
 document.getElementById("password").value = final_password;
    
    }
    easy_password(){
      
        let final_password = "";
       
        for(let i = 0; i < (Math.random()*4); i++){
            final_password += this.Capital_password.charAt(Math.floor(Math.random() * this.Capital_password.length));
            final_password += this.Small_password.charAt(Math.floor(Math.random() * this.Small_password.length));
        }
        document.getElementById("password").value = final_password;
    
    }
    funny_password(){
      
        let final_password = "";

        const funnyPasswords = [
            "password123",
            "letmein",
            "qwerty",
            "123456",
            "iloveyou",
            "admin",
            "password1",
            "123456789",
            "abc123",
            "monkey",
            "password",
            "123123",
            "welcome",
            "football",
            "sunshine",
            "superman",
            "12345678",
            "princess",
            "qwerty123",
            "password1234",
            "incorrect",
            "knockknockwhosthere",
    "chickennuggetdance",
    "gigglesaurusrex",
    "bananapeelslipnslide",
    "hahahapasswordlol",
    "penguinwalksonice",
    "laughingoutloud123",
    "sillypasswordisfun",
    "hilariousmonkeyjoke",
    "tickletickleheehee",
    "gigglefactory123",
    "lolololololololol",
    "hahahahahahahahaha",
    "funnybonecracker",
    "laughingunicorn789",
    "gigglesnortguffaw",
    "roflcopterrotflmao",
    "hahahahahahahahahaha",
    "snickersandchuckles",
    "smileyfacelaughter"
        ];
        
        console.log(funnyPasswords);
       
           final_password = funnyPasswords[Math.floor(Math.random() * funnyPasswords.length)];
       
           document.getElementById("password").value = final_password;
    
    }

   
    
}



function copyfunction() {

    var copyText = document.getElementById("password");
   
        copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    if(copyText.value !== "")
    {
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
    }
    // Select the text field
    

}












let c = new password("ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz","1234567890","!@#$%^&*()");

let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let recievedValues = "";  
function f(checkbox) {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let selectedValues = "";
    document.getElementById("password").value = "";
    // passing of the this in the function call helps to recoginized which checkbox was clicked
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkbox) {
            checkboxes[i].checked = false;
        }

        else if (checkboxes[i] == checkbox) {
            selectedValues = checkboxes[i].value;
        }
    }
    recievedValues = selectedValues;
}

    
    let button = document.getElementById("btnr");
function generatefunction() {
   
    // alert(recievedValues);
    if (recievedValues == "super strong password")
    {
        c.super_strong_password();
    }
    else if (recievedValues == "strong password")
    {
        c.strong_password();
        }
        else if (recievedValues == "easy password")
        {
            c.easy_password();
            }
            else if (recievedValues == "funny password")
            {
                c.funny_password();
                }
}
    // strong password funny password easy password