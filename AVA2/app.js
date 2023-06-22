    // var estadoCivil = document.getElementById('cEstadoCivil').value;

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

    function validarData(){
        var inputData = document.getElementById('cdataNascimento').value;
        const dataNascimento = new Date(inputData);
        
        if(isNaN(dataNascimento)){
            alert('Data de nascimento inválida');
            return;
        }
    }


    
    // function validar() {
    //     if (validarEmail == treu  && validarNome == true) {
    //         alert('ok');
    //     } else {
    //         alert('No OK');
    //     }
    // }
    