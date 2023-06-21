function validar() {
    var formulario = document.getElementById('formcadastro');
    var nome = document.querySelector('input[name="tName"]').value;
    var Email = document.getElementById('cEmail');
    var dataNascimento = document.getElementById('cdataNascimento').value;
    var genero = document.querySelector('input[name="Tgenero"]:checked').value;
    var estadoCivil = document.getElementById('cEstadoCivil').value;
    var camposDeInteresse = document.getElementById('cEstadoCivil').value;
    //alert(nome);
    if (String(nome).length < 15){
        alert("Seu nome está incompleto!");
        document.querySelector('input[name="tName"]').focus();
        return false;
    } else {
        document.getElementById('cEmail').focus();
    }
  

}