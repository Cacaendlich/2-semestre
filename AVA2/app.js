    function validarNome() {
        const nome = document.querySelector('input[name="tName"]').value;
        
        const isValid = String(nome).length >= 15;

        if (!isValid) {
            alert("Parece que o seu nome está incompleto.");
        }

        return isValid;
    }
    
    function validarEmail() {
        const email = document.querySelector('input[name="tEmail"]').value;
        
        const isValid = email.includes("@") > 0 && email.includes(".") >= 1 && String(email).length > 10;

        if (!isValid) {
            alert("Opa! Parece que o email inserido é inválido. Certifique-se de que o email contenha o símbolo '@', um domínio válido (como exemplo.com) e tenha pelo menos 10 caracteres.");
        }
        
        return isValid;
    }

    function validarData(){
        const inputData = document.getElementById('cdataNascimento').value;
        const dataNascimento = new Date(inputData);
        
        const isValid = !isNaN(dataNascimento);
        
        if(!isValid){
            alert('Parece que a data de nascimento inserida é inválida. Por favor, verifique e tente novamente.');
        }  

        return isValid;
    }

    function campoSelecionado() {
        const estadoCivil = document.getElementById('cEstadoCivil').value;
        const dataNascimento = document.getElementById('cdataNascimento').value;
        // const idade = caucularIdade(dataNascimento);
        const idade = 16;

        const isValid = estadoCivil === "solteiro" && idade > 15;

        if (!isValid) {
            alert('Por favor, verifique se você possui mais de 16 anos antes de prosseguir com o cadastro.');
        }

        return isValid;
    }

    function calcularIdade(anoNascimento){
        const idade = new Date().getFullYear() - anoNascimento.getFullYear();
        return idade;
    }
    
    function validar(e) {
        e.preventDefault(); // Linha utilizada para não recarregar a página quando o form recebe o submit
        if (validarNome() && validarEmail() && validarData() && campoSelecionado()) {
            alert(' Seu cadastro foi concluído com sucesso!');
        }
    }