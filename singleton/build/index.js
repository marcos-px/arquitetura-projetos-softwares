"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseSingleton_1 = require("./DatabaseSingleton");
let db;
db = DatabaseSingleton_1.DatabaseSingleton.getInstance(); //aqui é o lugar do "new"
db.executarQuery("SELECT * FROM  tblCliente"); //query = módulo do sql
let db2;
db2 = DatabaseSingleton_1.DatabaseSingleton.getInstance();
db2.executarQuery("SELECT * FROM tblProduto");
