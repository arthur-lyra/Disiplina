class Disciplina{

    constructor(codigo,nome){
        this._codigo = codigo;
        this._nome = nome;
        this.alunos = [];
    }

    InserirAluno(aluno){
        this.alunos.push(aluno);
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(codigo) {
        this._codigo = codigo;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get alunos() {
        return this.alunos;
    }
}