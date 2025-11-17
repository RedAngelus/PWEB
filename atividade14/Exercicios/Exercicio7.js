let http = require('http');
let server = http.createServer(function(req,res){
    let opcao = req.url;
if(opcao=='/historia'){
    res.end("<html><body>Historia da Fatec Sorocaba</body></http>");
}
else if(opcao=='/cursos'){
    res.end("<html><body>Cursos</body></http>");
}
else if(opcao=='/professores'){
    res.end("<html><body>Professores</body></http>");
}
else
    res.end("<html><body>Site da Fatec Sorocaba</body></http>");
});
server.listen(3000);