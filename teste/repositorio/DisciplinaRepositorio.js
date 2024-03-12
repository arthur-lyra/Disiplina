class DisciplinaRepositorio{
    constructor() {
        this.disciplinas =[];
    }

    inserir(Disciplina){
        this.disciplinas.push(Disciplina);
    }

    listar(){
        return this.disciplinas;
    }

    pesquisar(codigo) {
        return this.disciplinas.find(disciplina => disciplina.codigo === codigo);
    }

    atualizar(codigo, disciplinaAtualizada) {
        const index = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (index !== -1) {
            this.disciplinas[index] = disciplinaAtualizada;
            return true;
        }
        return false;
    }
    remover(codigo) {
        this.disciplinas = this.disciplinas.filter(disciplina => disciplina.codigo !== codigo);
    }
}