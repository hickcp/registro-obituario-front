window.onload = () => {
    const inputNome = document.getElementById("nome");
    const inputCpf = document.getElementById("cpf");
    const inputRg = document.getElementById("rg");
    const inputSepultura = document.getElementById("sepultura");
    const inputDataNascimento = document.getElementById("dataNascimento");
    const inputDataObito = document.getElementById("dataObito");
    const inputNomeConcessionario = document.getElementById("concessionario");
    /*
    const inputBairro = document.getElementById("bairro");
    const inputRua = document.getElementById("rua");
    const inputNumero = document.getElementById("numero");
    */
    const inputSalvar = document.getElementById("buttonSalvar");


    const listarInformacoes = () => {
        fetch("http://localhost:8080/concessionario/all", {
          method: "GET",
        })
          .then((res) => {
            if (res.status === 403) {
              window.location = "/";
            }
      
            if (!res.ok) {
              throw new Error("Erro ao encontrar o usuário " + res.statusText);
            }
      
            return res.json();
          })
          .then((res) => {
            res.forEach((informacoes) => {
              var html = '<option>'+informacoes.nome+'</option>';
              document.getElementById('concessionario').innerHTML += html;
            });
          })
          .catch((err) => {
            console.log("erro:", err);
          });
      };


    const endpointCadastro = "http://localhost:8080/finado/write";

    inputSalvar.addEventListener("click", event =>{

        const payloadUsuario = {
            nome: inputNome.value,
            cpf: inputCpf.value,
            rg: inputRg.value,
            tumulo: inputSepultura.value,
            dataObito: inputDataObito.value,
            dataNascimento: inputDataNascimento.value,
            concessionario:{
                nome: inputNomeConcessionario.value
            }
        };

        if (payloadUsuario){
            fetch(endpointCadastro,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payloadUsuario)
            });
        };
    
    });

    listarInformacoes();
};