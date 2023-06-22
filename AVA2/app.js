    function validarNome() {
        const nome = document.querySelector('input[name="tName"]').value;
        const regex = /[A-Za-z ]{15}[A-Za-z ]*/g;
        validarRegex(nome, regex);
    }

    function validarRegex(value, regex) {
        if (!regex.test(value)) {
            alert("O nome está incompleto.");
        }
    }

    function validarEmail() {
        const email = document.querySelector('input[name="tEmail"]').value;
        
        const isValid = email.indexO("@") > 0 && email.includes(".") >= 1 && String(email).length > 10;

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
        const idade = calcularIdade(dataNascimento);

        if (idade > 15 ) {
            return true;
        } else if(idade < 15 && estadoCivil !== "solteiro" ) {
            alert('Por favor, verifique se você possui 15 anos ou mais antes de prosseguir com o cadastro.');
            return false;
        }
        

    }

    function calcularIdade(anoNascimento){
        let dataNascimento = new Date(anoNascimento);
        let dataHoje = new Date();
        const diffTime = Math.abs(dataHoje - dataNascimento);
        const idade = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
        return idade;
    }
    
    function validar(e) {
        e.preventDefault(); // Linha utilizada para não recarregar a página quando o form recebe o submit
        if (validarNome() && validarEmail() && validarData() && campoSelecionado()) {
            alert('Dados enviados');
        }
    }