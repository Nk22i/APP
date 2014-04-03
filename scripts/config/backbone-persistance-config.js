define(function (require) {

     var $  = require('jquery'),
      _  = require('underscore'),
      Backbone = require('backbone'),


    REGIONALES_DAO = function (db) {
        this.db = db;
    };

    _.extend(REGIONALES_DAO.prototype, {

        findAll:function (callback) {
            this.db.transaction(
                function (tx) {
                    var sql = "SELECT * FROM regionales ORDER BY nombre";
                    tx.executeSql(sql, [], function (tx, results) {
                        var len = results.rows.length;
                        var items = [];
                        for (var i = 0; i < len; i++) {
                            items[i] = results.rows.item(i);
                        }
                        callback(items);
                    });
                },
                function (tx, error) {
                    alert("Transaction Error: " + error);
                }
            );
        },

        create:function (model, callback) {
    //        TODO: Implement
        },

        update:function (model, callback) {
    //        TODO: Implement
        },

        destroy:function (model, callback) {
    //        TODO: Implement
        },

        find:function (model, callback) {
            this.db.transaction(
                function (tx) {
                    var sql = "SELECT * FROM regionales WHERE nombre="+ model.nombre +" ORDER BY nombre LIMIT 1";
                    tx.executeSql(sql, [], function (tx, results) {
                        var len = results.rows.length;
                        var items = [];
                        for (var i = 0; i < len; i++) {
                            items[i] = results.rows.item(i);
                        }
                        callback(items);
                    });
                },
                function (tx, error) {
                    alert("Transaction Error: " + error);
                }
            );
        },

    //  LLeno la base de datos
        populate:function (callback) {
            alert("hol");
            this.db.transaction(
                function (tx) {
                    tx.executeSql('DROP TABLE IF EXISTS regionales');
                    var sql = 
                        "CREATE TABLE IF NOT EXISTS regionales ( "+
                        "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
                        "abreviacion VARCHAR(50), " +
                        "nombre VARCHAR(50), " +
                        "decano VARCHAR(600), " +
                        "direccion VARCHAR(50), " +
                        "telefono VARCHAR(50), " +
                        "web VARCHAR(50), " +
                        "mail VARCHAR(50) " +
                        ")";
                    tx.executeSql(sql);

                    tx.executeSql("INSERT INTO regionales (id,abreviacion,nombre,telefono,direccion,web,mail,decano) VALUES (1,'F.R. Avellaneda','Facultad Regional Avellaneda','(011) 4201-4133 (rotativas)','Av. Mitre 750 (1870) Avellaneda, Buenos Aires','http://www.fra.utn.edu.ar/','informacion@fra.utn.edu.ar','Ing. Jorge Omar DEL GENER')");
                    tx.executeSql("INSERT INTO regionales (id,abreviacion,nombre,telefono,direccion,web,mail,decano) VALUES (2,'F.R. Bahía Blanca','Facultad Regional Bahía Blanca','(0291) 4555-220 / 311','11 de Abril 461 (8000) Bahía Blanca, Buenos Aires','http://www.frbb.utn.edu.ar/','postmaster@frbb.utn.edu.ar','Ing. Liberto ERCOLI')");
                    tx.executeSql("INSERT INTO regionales (id,abreviacion,nombre,telefono,direccion,web,mail,decano) VALUES (3,'F.R. Buenos Aires','Facultad Regional Buenos Aires','(03442) 42-3803 / 42-5541 / 42-3898','Ing. Pereira 676 (CP E3264BTD) Concepción del Uruguay','http://www.frcu.utn.edu.ar/','frcu@frcu.utn.edu.ar','Ing. María Estela MEIER')");
                    tx.executeSql("INSERT INTO regionales (id,abreviacion,nombre,telefono,direccion,web,mail,decano) VALUES (4,'F.R. Córdoba','Facultad Regional Córdoba','(0351) 468-4215 / 468-4006 / 468-4317','Maestro M. López esq. Cruz Roja Argentina. Ciudad Universitaria. Casilla de Correo 36 C.P. (X5016ZAA) Córdoba, Córdoba','http://www.frc.utn.edu.ar/','info@frc.utn.edu.ar','Ing. Héctor AIASSA')");
                    tx.executeSql("INSERT INTO regionales (id,abreviacion,nombre,telefono,direccion,web,mail,decano) VALUES (5,'F.R. Delta','Facultad Regional Delta','(03489) 42-0400 / 42-2018 / 42-0249','San Martín 1171 (2804) Campana, Buenos Aires.','http://www.frd.utn.edu.ar/','infodelta@frd.utn.edu.ar','Ing. Miguel SOSA')");
                    tx.executeSql("INSERT INTO regionales (id,abreviacion,nombre,telefono,direccion,web,mail,decano) VALUES (6,'F.R. General Pacheco','Facultad Regional General Pacheco','(011) 4740-5040 / 5140 / 0119 / 6677 / 0216','H.Yrigoyen 288 (1617) Gral.Pacheco, Buenos Aires.','http://www.frgp.utn.edu.ar/','info@frgp.utn.edu.ar','Ing. Eugenio B. RICCIOLINI')");
                    tx.executeSql("INSERT INTO regionales (id,abreviacion,nombre,telefono,direccion,web,mail,decano) VALUES (7,'F.R. Haedo','Facultad Regional Haedo','(011) 4650-1085 / 4443-7466 / 4659-2575 fax:4443-0499','París 532 Haedo (1706) Buenos Aires','http://www.frh.utn.edu.ar/','comunica@frh.utn.edu.ar','Ing. Víctor Luis CABALLINI')");
                    tx.executeSql("INSERT INTO regionales (id,abreviacion,nombre,telefono,direccion,web,mail,decano) VALUES (8,'F.R. La Plata','Facultad Regional La Plata','(0221) 482-4855 / 421-7578 / 427-0483','Calle 60 esq. 124 (1900) La Plata, Buenos Aires','http://www.frlp.utn.edu.ar/','info@frlp.utn.edu.ar','Ing. Carlos E. FANTINI')");
                    tx.executeSql("INSERT INTO regionales (id,abreviacion,nombre,telefono,direccion,web,mail,decano) VALUES (9, 'F.R. Mendoza','Facultad Regional Mendoza','(0261) 524-4500 / fax (0261) 524-4531','Coronel Rodriguez 273 CPA (M5502AJE) Mendoza','http://www.frm.utn.edu.ar/','webmaster@frm.utn.edu.ar','Ing. Eduardo BALASCH')");

                },
                function (tx, error) {
                    alert('Transaction error ' + error);
                },
                function (tx) {
                    callback();
                }
            );
        }
    });

    return {
        REGIONALES_DAO: REGIONALES_DAO
    };





});