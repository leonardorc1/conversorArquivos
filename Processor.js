class Processor{
    static Process(data){
        var a = data.split("\r\n");        
        var rows=[];
        a.forEach(dados => {
            var arr = dados.split(',') ;
            rows.push(arr);
        });
        return rows;
    }
}

module.exports = Processor;