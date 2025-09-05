function pegarDisciplinas() {
            url = "https://probable-space-carnival-g4w7744656vj3wq9q-3000.app.github.dev/disciplinas/"
            fetch(url)
                .then((res) => {
                    return res.json()
                })
                .then((disciplinas) => {
                    console.log('listando', disciplinas)
                    dados = document.querySelector("tbody")

                    dados.innerHTML = ""

                    for (let i = 0; i < disciplinas.length; i++) {
                        dados.innerHTML += `<tr>
                                                <td>${disciplinas[i].id}</td>
                                                <td>${disciplinas[i].nome}</td>
                                                <td>${disciplinas[i].curso}</td>
                                                <td>${disciplinas[i].turno}</td>
                                                <td>
                                                    <button onclick="editarDisciplina(${disciplinas[i].id})">Editar</button>
                                                    <button onclick="excluirDisciplina(${disciplinas[i].id})">Excluir</button>
                                                </td>
                                            </tr>`
                    }

                })
        }
        pegarDisciplinas()
