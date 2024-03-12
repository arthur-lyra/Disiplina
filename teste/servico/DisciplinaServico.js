class DisciplinaServico{
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserirNaDisciplina(codigo,aluno){
        const disciplina = this.DisciplinaRepositorio.pesquisar(codigo);
        if (disciplina) {
            disciplina.alunos.push(aluno);
            return true;
        }
        return false;
    }

}