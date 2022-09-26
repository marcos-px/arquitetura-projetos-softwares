export class DatabaseSingleton{

    private static instance: DatabaseSingleton;
    //métodos para controlar a instância do dingleton

    // o construtor precisa estar indisponível
    private constructor(){
        // cria aqui a instrução de conexão, DB NAME, E tal;...
        console.log("CONSTRUTOR - aqui eu crio a conexão com o banco.")
    }

    public static getInstance(): DatabaseSingleton{
        if(!DatabaseSingleton.instance){ // se ele estiver undefined? se sim
            DatabaseSingleton.instance = new DatabaseSingleton();
        }
        return DatabaseSingleton.instance;
    }

    //métodos do negócio(Aquilo do que o Database pode fazer);
    public executarQuery(query:string):void {
        console.log("DB> "+query)
    }
}