    //var formulario = document.getElementById('formcadastro');
    // var dataNascimento = document.getElementById('cdataNascimento').value;
    // var genero = document.querySelector('input[name="Tgenero"]:checked').value;
    // var estadoCivil = document.getElementById('cEstadoCivil').value;
    // var camposDeInteresse = document.getElementById('cEstadoCivil').value;
    //alert(nome);

    function validarNome() {
        var nome = document.querySelector('input[name="tName"]').value;
    
        if (String(nome).length >= 15) {
            return true;
        } else {
            alert("Seu nome está incompleto!");
            return false;
        }
    }
    
    function validarEmail() {
        var email = document.querySelector('input[name="tEmail"]').value;
    
        if (email.indexOf("@") > 0 && email.indexOf(".") > 1 && String(email).length > 10) {
            return true;
        } else {
            alert("Email inválido.");
            return false;
        }
    }
    
    function validar() {
        if (validarEmail() && validarNome()) {
            return true;
        }
    }
    