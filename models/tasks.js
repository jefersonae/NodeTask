export default _app =>{
    return {
        findAll: (_params, callback) =>{
            return callback([
                {title: "Reunião com a diretoria"},
                {title: "Passear com o cachorro"},
            ]);
        }
    }
}