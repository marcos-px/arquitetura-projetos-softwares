import { ItemGenerico } from "./ItemGenerico";

export class Servico implements ItemGenerico{

    private codigo: number;
    private nome: string;
    private valor: number;
    private aliquota: number;

    public constructor(){
        this.codigo = 1234;
        this.nome = "Formatacao de Note";
        this.valor= 100.0;
        this.aliquota = 4;

        
    }
    exibir(): void {
        console.log("SERVIÇO: "+this.codigo+"|"+this.nome+"| R$"+this.valor+"| "+this.aliquota + "% |  ")    };
}