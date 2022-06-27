window.onload = () => {
    const inputNome = document.getElementById("nome");
    const inputCpf = document.getElementById("cpf");
    const inputRg = document.getElementById("rg");
    const inputSepultura = document.getElementById("sepultura");
    const inputNomeConcessionario = document.getElementById("nomeConcessionario");
    /*
    const inputBairro = document.getElementById("bairro");
    const inputRua = document.getElementById("rua");
    const inputNumero = document.getElementById("numero");
    */
    const inputSalvar = document.getElementById("buttonSalvar");


    const endpointCadastro = "http://localhost:8080/finado/write";

    inputSalvar.addEventListener("click", event =>{

        const payloadUsuario = {
            nome: inputNome.value,
            cpf: inputCpf.value,
            rg: inputRg.value,
            tumulo: inputSepultura.value,
            concessionario:{
                nome: inputNomeConcessionario.value
            }
        };

       /* const payloadEndereco ={
            cidade: inputCidade.value,
            estado: inputEstado.value,
            bairro: inputBairro.value,
            rua: inputRua.value,
            numero: inputNumero.value,
            concessionario:{
                nome: inputNome.value
            }
        }; */

        if (payloadUsuario){
            fetch(endpointCadastro,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payloadUsuario)
            });
        };
        /*
        if (payloadEndereco){
            fetch(endpointEndereco,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payloadEndereco)
            });
        }; */
    });

};