
function enviomensaje() {
    var mensaje= "";
    var clase= "";
    var gmail= "xxxx@gmail.com"
    var gmail= document.getElementById("correo").value;

    
    if (gmail= "gmail.com") { mensaje= "Su mensaje ha sido enviado con éxito, gracias por compartirnos tu opinión <3."; 
    clase= "alert alert-success"}

    document.getElementById ("divresultado").innerHTML= mensaje;
    document.getElementById("divresultado").className= clase;}