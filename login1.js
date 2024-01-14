
        function validateform()
    {
        
        var emil = document.myform.emil.value;
        var pass = document.myform.pass.value;
        var rpass = document.myform.rpass.value;
        var atposition=emil.indexOf("@"); 
        var dotposition=emil.lastIndexOf("."); 
      
        if(emil==""||emil==null)
        {
            alert("email must be filled out");
            document.forms["myform"]["emil"].focus();
            return false;
        }
        if(pass==""||pass==null)
        {
            alert("password must be filled out");
            document.forms["myform"]["pass"].focus();
            return false;
        }
        if(rpass==""||rpass==null)
        {
            alert("first name must be filled out");
            document.forms["myform"]["rpass"].focus();
            return false;
        }
        if(pass.length<8)
        {
            alert("password should be greater than 8")
            document.forms["myform"]["pass"].focus();
            return false;
        }
        if(pass!=rpass)
        {
            alert("password must be same");
            document.forms["myform"]["rpass"].focus();
            return false;
        }
       
        }
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=w.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false;  
    } 
         


   