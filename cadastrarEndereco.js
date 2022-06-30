window.onload = () => {

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
   
      listarInformacoes();      
    const inputNome = document.getElementById("concessionario");
    const inputCidade = document.getElementById("cidade");
    const inputEstado = document.getElementById("estado");
    const inputBairro = document.getElementById("bairro");
    const inputRua = document.getElementById("rua");
    const inputNumero = document.getElementById("numero");

    const inputSalvar = document.getElementById("buttonSalvar");


    const endpointEndereco = "http://localhost:8080/endereco/write"

       

    inputSalvar.addEventListener("click", event =>{

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

        
        if (payloadEndereco){
            fetch(endpointEndereco,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payloadEndereco)
            });
        };
    
    });

};