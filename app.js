var Reader = require('./Reader');
var Processor = require('./Processor')
var Table = require('./Table');
var HtmlParser = require('./HtmlParser');
var Writer = require('./Writer');
var leitor = new Reader;
var escritor = new Writer;




async function main(){
    var dados = await leitor.Read('./user.csv');
    var dadosProcessados = Processor.Process(dados);
    var usuario = new Table(dadosProcessados);
    var html = await HtmlParser.Parse(usuario);
console.log(html);
    escritor.Write('htmlGerado.html',html).then(()=>{console.log('Arquivo gerado')});
}

main();


