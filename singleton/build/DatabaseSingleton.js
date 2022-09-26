"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseSingleton = void 0;
class DatabaseSingleton {
    //métodos para controlar a instância do dingleton
    // o construtor precisa estar indisponível
    constructor() {
        // cria aqui a instrução de conexão, DB NAME, E tal;...
        console.log("CONSTRUTOR - aqui eu crio a conexão com o banco.");
    }
    static getInstance() {
        if (!DatabaseSingleton.instance) { // se ele estiver undefined? se sim
            DatabaseSingleton.instance = new DatabaseSingleton();
        }
        return DatabaseSingleton.instance;
    }
    //métodos do negócio(Aquilo do que o Database pode fazer);
    executarQuery(query) {
        console.log("DB> " + query);
    }
}
exports.DatabaseSingleton = DatabaseSingleton;
