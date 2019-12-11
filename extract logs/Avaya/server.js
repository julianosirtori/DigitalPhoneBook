const fs = require('fs');
const path = require('path');
const readline = require('readline');
const mysql = require('mysql2/promise');
const confDatabase = require('./confDatabase');

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main(){
    while(true){
        await timeout(60000);
        try{
            console.log("Init Extraction: " + new Date());
            console.log("Moving File");
            const filePath = moveFile();
            console.log("Connect to Data Base");
            const connection = await mysql.createConnection(confDatabase);
            console.log("Read File");
            readFile(filePath, ((call) => { 
                try{
                    const sql = builderSql(call);  
                    execQuery(connection, sql); 
                }catch(err){
                    console.log("Ocorreu um erro ao salvar no banco: ");
                    console.log(err);
                }
            }));
        }catch(err){
            console.log("Ocorreu um erro: ");
            console.log(err);
        }
    }
}

main();

function moveFile(){
    const oldPath =  path.resolve(__dirname, 'bilhete_puro.txt');
    const newPath = path.resolve(__dirname, 'destino', `call${new Date().valueOf()}`);
    fs.renameSync(oldPath, newPath);
    return newPath;
} 

function readFile(filePath, callback){
    const lineReader = readline.createInterface({
        input: fs.createReadStream(filePath)
    });
    lineReader.on('line', (line)=> {
        const dataOfLine = line.split(',');
        const call = {
            date: dataOfLine[0],
            duration: dataOfLine[1],
            caller: dataOfLine[3],
            direction: dataOfLine[4],
            called_number: dataOfLine[5],
            dialled_number: dataOfLine[6],
            is_internal: dataOfLine[8],
        };
        callback(call);
    });
}

function builderSql(call){
    return `INSERT INTO calls (date, duration, caller, direction, called_number, dialled_number, is_internal) VALUES 
        ('${call.date}', '${call.duration}', '${call.caller}', '${call.direction}', '${call.called_number}', '${call.dialled_number}', '${call.is_internal}')`;
}

async function execQuery(connection, insertSql){   
    await connection.query(insertSql); 
    console.log('Call Saved to database: ' + insertSql);
}
