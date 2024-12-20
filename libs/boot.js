module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`Node Task - na porta ${app.get("port")}`);
    })
}