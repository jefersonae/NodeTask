import { Sequelize } from "sequelize";

const config = require("libs/configs.js");

let sequelize = null;

module.exports = () => {
    if(!sequelize){
        sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );
    }
    return sequelize;
}