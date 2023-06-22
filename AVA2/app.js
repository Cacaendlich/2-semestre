    function validarNome() {
        var nome = document.querySelector('input[name="tName"]').value;
    
        if (String(nome).length >= 15) {
            return true;
        } else {
            alert("Parece que o seu nome está incompleto.");
            return false;
        }
    }
    
    function validarEmail() {
        var email = document.querySelector('input[name="tEmail"]').value;
    
        if (email.includes("@") > 0 && email.includes(".") >= 1 && String(email).length > 10) {
            return true;
        } else {
            alert("Opa! Parece que o email inserido é inválido. Certifique-se de que o email contenha o símbolo '@', um domínio válido (como exemplo.com) e tenha pelo menos 10 caracteres.");
            return false;
        }
    }

    function validarData(){
        var inputData = document.getElementById('cdataNascimento').value;
        const dataNascimento = new Date(inputData);

        if(isNaN(dataNascimento)){
            alert('Parece que a data de nascimento inserida é inválida. Por favor, verifique e tente novamente.');
            return false;
        }  
        return true;
    }

    function campoSelecionado() {
        var estadoCivil = document.getElementById('cEstadoCivil').value;
        var dataNascimento = document.getElementById('cdataNascimento').value;
        var anoNascimento = getYear(dataNascimento);
        var idade = caucularIdade(anoNascimento);
        
        if(estadoCivil === "1" && idade > 16){
            return true;
        } else {
            alert('Por favor, verifique se você possui mais de 16 anos antes de prosseguir com o cadastro.');
            return false;
        }
    }

    function caucularIdade(anoNascimento){
        var anoAtual = new Date();
        idade = anoAtual.getFullYear() - anoNascimento.getFullYear();
        return idade;
    }
    
    function validar() {
        var nomeValido = validarNome();
        var emailValido = validarEmail();
        var dataValida = validarData();

        if (nomeValido && emailValido && dataValida && campoSelecionado()) {
            alert(' Seu cadastro foi concluído com sucesso!');
        }
    }
    