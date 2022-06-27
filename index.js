const listarInformacoes = () => {
    fetch("http://localhost:8080/finado/all",{
    method: "GET"
})
.then(res => {
    if (res.status === 403) {
        window.location = '/';
    }

    if (!res.ok) {
        throw new Error('Erro ao encontrar o usuário ' + res.statusText);
    }

    return res.json();
}) 
.then(res =>{
    res.forEach(informacoes => {
        addInformacaoToTable("tb_informacoes", informacoes)
    });
})
.catch(err => {
    console.log('erro:', err);
});
}

const addInformacaoToTable = (tableId, informacoes) => {
    const aa = document.createElement("a");
    const texto = document.createTextNode("Visualizar");
    const name = informacoes.nome;
    aa.appendChild(texto);
    aa.title = "Visualizar";
    aa.href= "./detalhes.html";

    const tableRef = document.getElementById(tableId);
    const newRow = tableRef.insertRow(-1);   

    newRow.insertCell(0).appendChild(aa).addEventListener("click", event =>{
        event.preventDefault();
        
        fetch("http://localhost:8080/finado/search/" + name,{
            method: "GET"
        })
        .then(res => {
            if (res.status === 403) {
                window.location = '/';
            }
        
            if (!res.ok) {
                throw new Error('Erro ao encontrar o usuário. ' + res.statusText);
            }
        
            return res.json();
        }) 
        .then(res =>{
            res.forEach(detalhes => {
                addDetalhesToTable("tb_detalhes", detalhes)
            });
        })
        const addDetalhesToTable = (tableId, detalhes) => {
    
    
            const tableRef = document.getElementById(tableId);
            const newRow = tableRef.insertRow(-1);    
            
            newRow.insertCell(0).appendChild(document.createTextNode(detalhes.finados))
            newRow.insertCell(0).appendChild(document.createTextNode(detalhes.nome))
            newRow.insertCell(0).appendChild(document.createTextNode(detalhes.id))           
        }
        }
    );


    newRow.insertCell(0).appendChild(document.createTextNode(informacoes.rg))
    newRow.insertCell(0).appendChild(document.createTextNode(informacoes.nome))
    newRow.insertCell(0).appendChild(document.createTextNode(informacoes.id))         
}   



/*const listarDetalhes = (informacoes) => {
    
    fetch("http://localhost:8080/finado/search/" + informacoes,{
    method: "GET"
})
.then(res => {
    if (res.status === 403) {
        window.location = '/';
    }

    if (!res.ok) {
        throw new Error('Erro ao encontrar o usuário. ' + res.statusText);
    }

    return res.json();
}) 
.then(res =>{
    res.forEach(detalhes => {
        addDetalhesToTable("tb_detalhes", detalhes)
    });
})
}
*/
const addDetalhesToTable = (tableId, detalhes) => {
    
    
    const tableRef = document.getElementById(tableId);
    const newRow = tableRef.insertRow(-1);    
    
    newRow.insertCell(0).appendChild(document.createTextNode(detalhes.finados))
    newRow.insertCell(0).appendChild(document.createTextNode(detalhes.nome))
    newRow.insertCell(0).appendChild(document.createTextNode(detalhes.id))           
}
listarInformacoes();
//listarDetalhes();