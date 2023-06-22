README - Criação de uma interface com o usuário com validação dos dados de entrada

Este projeto consiste na criação de uma página HTML com um formulário que permite ao usuário inserir seus dados e validar as informações antes do envio para o servidor. O objetivo é implementar uma interface amigável e funcional, seguindo as restrições e requisitos descritos abaixo.

Campos e restrições
A página deve conter os seguintes campos e restrições:

Campo nome: O campo nome deve validar se o nome completo possui no mínimo 15 caracteres.

Campo e-mail: O campo e-mail deve validar se o endereço de e-mail possui os símbolos mínimos necessários e possui pelo menos 10 caracteres.

Campo data de nascimento: O campo data de nascimento deve receber dias, meses e anos válidos. Além disso, o foco deve ser automaticamente transferido para o próximo campo quando os dados estiverem corretos.

Campo sexo: O campo sexo permite apenas duas opções: Feminino ou Masculino.

Campo estado civil: O campo estado civil permite apenas três opções: Solteiro(a), Casado(a) ou Outros. Se a escolha for Solteiro(a), a data de nascimento será analisada e só será validada se a pessoa tiver mais de 15 anos.

Campo áreas de interesse: O campo áreas de interesse permite ao usuário selecionar múltiplas opções. As opções disponíveis são: Análise, Banco de dados, Desenvolvimento, Engenharia de software e/ou Redes de computadores.

Ao final do formulário, haverá um botão de envio que irá validar todos os campos preenchidos. Se os dados estiverem válidos, uma mensagem de "Dados enviados" será exibida. Caso contrário, uma mensagem informando qual campo não foi validado será exibida e o foco será direcionado para o campo correspondente.


Autor
Camila Endlich Pimenta
camilaendlichpimenta.trab@gmail.com
UVA- Universidade Veiga de almeida
22/06/2023