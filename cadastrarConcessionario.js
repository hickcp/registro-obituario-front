window.onload = () => {
    const inputNome = document.getElementById("nome");
    const inputCpf = document.getElementById("cpf");
    const inputRg = document.getElementById("rg");
    const inputCidade = document.getElementById("cidade");
    const inputEstado = document.getElementById("estado");
    const inputBairro = document.getElementById("bairro");
    const inputRua = document.getElementById("rua");
    const inputNumero = document.getElementById("numero");

    const inputSalvar = document.getElementById("buttonSalvar");


    const endpointCadastro = "http://localhost:8080/concessionario/write";
    const endpointEndereco = "http://localhost:8080/endereco/write"

    inputSalvar.addEventListener("click", event =>{

        const payloadUsuario = {
            nome: inputNome.value,
            cpf: inputCpf.value,
            rg: inputRg.value
        };

        const payloadEndereco ={
            cidade: inputCidade.value,
            estado: inputEstado.value,
            bairro: inputBairro.value,
            rua: inputRua.value,
            numero: inputNumero.value,
            concessionario:{
                nome: inputNome.value
            }
        };

        if (payloadUsuario){
            fetch(endpointCadastro,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payloadUsuario)
            });
        };

        if (payloadEndereco){
            fetch(endpointEndereco,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payloadEndereco)
            });
        };
    });

};