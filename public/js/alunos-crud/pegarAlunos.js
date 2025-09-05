function pegarAlunos() {
            url = "https://probable-space-carnival-g4w7744656vj3wq9q-3000.app.github.dev/alunos/"
            fetch(url)
                .then((res) => {
                    return res.json()
                })
                .then((alunos) => {
                    console.log('listando', alunos)
                    dados = document.querySelector("tbody")

                    dados.innerHTML = ""

                    for (let i = 0; i < alunos.length; i++) {
                        dados.innerHTML += `<tr>
                                                <td>${alunos[i].id}</td>
                                                <td>${alunos[i].nome}</td>
                                                <td>${alunos[i].idade}</td>
                                                <td>${alunos[i].sexo}</td>
                                                <td>${alunos[i].matricula}</td>
                                                <td>
                                                    <button onclick="editarAluno(${alunos[i].id})">Editar</button>
                                                    <button onclick="excluirAluno(${alunos[i].id})">Excluir</button>
                                                </td>
                                            </tr>`
                    }

                })
        }
        pegarAlunos()
