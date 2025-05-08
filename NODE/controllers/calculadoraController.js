exports.helloWorld = (req, res) =>{
    res.send('Hello World');
};

exports.somar = (req, res) => {
    const { n1, n2 } = req.query;
    const resultado = parseInt(n1) + parseInt(n2);
    res.json({resultado});

    // Também poderia ser feito assim:
    // const n1 = parseInt(req.query.n1);
    // const n2 = parseInt(req.query.n2);
    // const resultado = n1 + n2;
    // res.send(`A soma de ${n1} e ${n2} é ${resultado}`);
};
exports.calcular = (req, res) => {
    const { n1, n2, operacao } = req.query;
    let resultado;

    switch (operacao) {
        case 'soma':
            resultado = parseInt(n1) + parseInt(n2);
            break;
        case 'subtracao':
            resultado = parseInt(n1) - parseInt(n2);
            break;
        case 'multiplicacao':
            resultado = parseInt(n1) * parseInt(n2);
            break;
        case 'divisao':
            resultado = parseInt(n1) / parseInt(n2);
            break;
        default:
            return res.status(400).send('Operação inválida');
    }

    res.json('O resultado da ' + operacao + ' de '+ n1 + ' e ' + n2 + ' é: ' + resultado);
};