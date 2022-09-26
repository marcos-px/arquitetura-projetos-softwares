"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaDeProdutos = void 0;
const FabricaGenerica_1 = require("./FabricaGenerica");
const Produto_1 = require("./Produto");
class FabricaDeProdutos extends FabricaGenerica_1.FabricaGenerica {
    criarUmItem() {
        return new Produto_1.Produto();
    }
}
exports.FabricaDeProdutos = FabricaDeProdutos;
