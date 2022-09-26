"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaDeServicos = void 0;
const FabricaGenerica_1 = require("./FabricaGenerica");
const Servico_1 = require("./Servico");
class FabricaDeServicos extends FabricaGenerica_1.FabricaGenerica {
    criarUmItem() {
        return new Servico_1.Servico();
    }
}
exports.FabricaDeServicos = FabricaDeServicos;
