import { FabricaDeProdutos } from "./FabricaDeProdutos";
import { FabricaDeServicos } from "./FabricaDeServicos";
import { FabricaGenerica } from "./FabricaGenerica";
import { ItemGenerico } from "./ItemGenerico";
import { Produto } from "./Produto";


//instancio a minha gabrica
let fabricaP: FabricaGenerica = new FabricaDeProdutos();

let produto:ItemGenerico = fabricaP.criarUmItem();
produto.exibir();

let fabricaS: FabricaGenerica = new FabricaDeServicos();
let servico:ItemGenerico = fabricaS.criarUmItem();
servico.exibir();