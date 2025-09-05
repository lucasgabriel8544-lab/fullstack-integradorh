    function atualizarAluno() {
            inputs = document.querySelectorAll("input")

            idAluno = inputs[0].value

            aluno = {
                nome: inputs[1].value,
                idade: inputs[2].value,
                sexo: inputs[3].value,
                matricula: inputs[4].value
            }

            fetch(url + idAluno, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(aluno)
            })
                .then((res) => { return res.json() })
                .then((alunoSalvo) => {
                    pegarAlunos()

                    inputs[0].value = ""
                    inputs[1].value = ""
                    inputs[2].value = ""
                    inputs[3].value = ""
                    inputs[4].value = ""
                })
        }
