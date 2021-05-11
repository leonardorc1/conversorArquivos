const Reader = require('./Reader');
const Processor = require('./Processor')
const Table = require('./Table');
var leitor = new Reader;


async function main(){
    var dados = await leitor.Read('./user.csv');
    var dadosProcessados = Processor.Process(dados);
    var usuario = new Table(dadosProcessados);
    onsole.log(usuario.RowCount);
    console.log(usuario.ColunsCount);
}

main();


