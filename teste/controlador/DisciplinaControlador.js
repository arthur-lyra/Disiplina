class DisciplinaControlador {
    constructor() {
        this.servico = new DisciplinaServico();
    }

    inserirDisciplina(codigo, nome) {
        const disciplina = new Disciplina(codigo, nome);
        this.servico.repositorio.inserir(disciplina);
    }

    pesquisarDisciplina(codigo) {
        return this.servico.repositorio.pesquisar(codigo);
    }

    atualizarDisciplina(codigo, novoNome) {
        const disciplina = this.servico.repositorio.pesquisar(codigo);
        if (disciplina) {
            disciplina.nome = novoNome;
            return true;
        }
        return false;
    }

    removerDisciplina(codigo) {
        this.servico.repositorio.remover(codigo);
    }
}