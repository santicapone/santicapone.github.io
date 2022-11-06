function LimpiarFormulario(){
    let formulario=document.getElementById("formulario_ayuda");
    formulario.reset();
    let cartel=document.getElementById("Emailerror");
    cartel.style.display="none";
    
}
function EnviarFormulario(){
    let email=document.getElementById("email").value;
    if (!email.includes("@")){
        let cartel=document.getElementById("Emailerror");
        cartel.style.display="block";
        
    }else if (email.includes("@")) {
        let cartel=document.getElementById("Emailerror");
        cartel.style.display="none";
        
    }

}