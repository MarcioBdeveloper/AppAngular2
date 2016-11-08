export class MensagemCadastro {

    private mensagem: string;
    private inclusao: boolean;

    constructor(mensagem: string, inclusao: boolean) {
        this.mensagem = mensagem;
        this.inclusao = inclusao;
    }

   public get _mensagem(): string {
        return this.mensagem;
    }

    public get _inclusao(): boolean {
        return this.inclusao;
    }
}