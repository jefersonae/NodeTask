module.exports = app =>{
    return {
        findAll: (params, callback) =>{
            return callback([
                {title: "Reunião com a diretoria"},
                {title: "Passear com o cachorro"},
            ]);
        }
    }
}