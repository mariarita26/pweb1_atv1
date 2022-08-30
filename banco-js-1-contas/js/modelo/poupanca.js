class Poupanca extends Conta {
    constructor(numero, saldo, dataAniversario) {
        super(numero, saldo);
        this.dataAniversario = dataAniversario;
    }

    creditar(valor) {
        super.creditar( valor * 1.05);
    }
}