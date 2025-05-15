const professores = [
    {   id:1,
        nome: "Jorge",
        idade: 45,
        departamento: "Matemática",
        turmas: [{ "codigo": "9A", "disciplina": "MAT101", "alunos": ["João", "Maria", "Pedro"] },
        { "codigo": "10A", "disciplina": "MAT201", "alunos": ["Ana", "Luiz"] }],
    },

    {   id:2,
        nome: "Jaqueline",
        idade: 33,
        departamento: "Inglês",
        turmas: [{ "codigo": "9B", "disciplina": "ING102", "alunos": ["Rubens", "Manoela", "Pietra"] },
        { "codigo": "10B", "disciplina": "ING202", "alunos": ["Rafaela", "Luiza"] }],
    },
    
    {   id:3,
        nome: "Carlos",
        idade: 50,
        departamento: "História",
        turmas: [{ "codigo": "9C", "disciplina": "HIS103", "alunos": ["Gustavo", "Fernanda", "Lucas"] },
        { "codigo": "10C", "disciplina": "HIS203", "alunos": ["Mariana", "Thiago"] }],
    },

    {   id:4,
        nome: "Ana",
        idade: 29,
        departamento: "Física",
        turmas: [{ "codigo": "9D", "disciplina": "FIS104", "alunos": ["Bruno", "Juliana", "Ricardo"] },
        { "codigo": "10D", "disciplina": "FIS204", "alunos": ["Tatiane", "Felipe"] }],
    },

    {   id:5,
        nome: "Marta",
        idade: 29,
        departamento: "Matemática",
        turmas: [{ "codigo": "9E", "disciplina": "MAT104", "alunos": ["Bruno", "Juliana", "Ricardo"] },
        { "codigo": "10E", "disciplina": "MAT204", "alunos": ["Tatiane", "Felipe"] }],
    },



];



exports.listarProfessores = (req, res) => {
    res.json(professores);
};

exports.buscarProfessorPorId = (req, res) => {
    const {id} = req.params;
    const professor = professores.find(p => p.id == id);
    if (!professor) {
        return res.status(404).send('Professor não encontrado');
    }
    res.json(professor);
};

exports.buscarTurmas = (req, res) => {
    const { id } = req.params;
    const professor = professores.find(p => p.id == id);
    if (!professor) {
        return res.status(404).send('Professor não encontrado');
    }
    return res.json(professor.turmas);
};

exports.excluirProfessorPorId = (req, res) => {
    const {id} = req.params;
    const professorIndex = professores.findIndex(p => p.id == id);
    if (professorIndex === -1) {
        return res.status(404).send('Id não encontrado');
    }
    professores.splice(professorIndex, 1);
    res.status(204).send();
};

exports.editarProfessorPorId = (req, res) => {
    const { id } = req.params;
    const { nome, idade, departamento } = req.body;
    const professor = professores.find((p) => p.id == id);
    if (!professor) {
        return res.status(404).json({ error: 'Id não encontrado' });
    }

    professor.nome = nome;
    professor.idade = idade;
    professor.departamento = departamento;
    res.json(professor);
};

exports.novaTurma = (req, res) =>{
    const { id } = req.params;
    const { codigo, disciplina, alunos } = req.body;
    const professor = professores.find(p => p.id == id);
    if (!professor) {
        return res.status(404).send('Professor não encontrado');
    }
    const novaTurma = { codigo, disciplina, alunos };
    professor.turmas.push(novaTurma);
    res.status(201).json(novaTurma);
};

exports.listarProfessoresPorDepartamento = (req, res) => {
    const { departamento } = req.params;
    const professoresPorDepartamento = professores.filter(p => p.departamento.toLowerCase() === departamento.toLowerCase());
    if (professoresPorDepartamento.length === 0) {
        return res.status(404).json({ error: 'Nenhum professor encontrado nesse departamento' });
    }
    const nomesProfessores = professoresPorDepartamento.map(professor => professor.nome);
    res.json(nomesProfessores);
};