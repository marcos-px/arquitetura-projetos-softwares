import { DatabaseSingleton } from "./DatabaseSingleton";

let db: DatabaseSingleton;

db = DatabaseSingleton.getInstance(); //aqui é o lugar do "new"

db.executarQuery("SELECT * FROM  tblCliente"); //query = módulo do sql

let db2: DatabaseSingleton;
db2 = DatabaseSingleton.getInstance(); 
db2.executarQuery("SELECT * FROM tblProduto");