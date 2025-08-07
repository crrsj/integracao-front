function enviarFormulario(){
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;


var dadosFormulartio = {
    nome: nome,
    telefone: telefone,
    email: email
};

   fetch("http://localhost:8080/usuarios",{
     method: "POST",
     headers: {
    "Content-Type": "application/json"
  },

  body: JSON.stringify(dadosFormulartio)

})

.then(response => response.json())
.then(data => {

    console.log("Dados enviados:" , data)
    alert("Dados cadastrados com sucesso !")
})

.catch(error => {
    console.error("Erro ao enviar os dados !",error);
});

}


function exibirUsuarios(){
    fetch("http://localhost:8080/usuarios")
    .then(response => response.json())
    .then(data =>{
    
        const tabela = document.getElementById("tabelaUsuarios");
        const tbody = tabela.querySelector("tbody");

        data.forEach(usuario => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nome}</td>
            <td>${usuario.telefone}</td>
            <td>${usuario.email}</td>

            `;
            tbody.appendChild(row);
        });


    })

    .catch(error =>{
        console.error("Erro ao buscar os dados dos usuários",error);
    });
}

document.addEventListener("DOMContentLoaded",exibirUsuarios);