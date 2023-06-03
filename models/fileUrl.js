const seq=require('../UTIL/database')
const Sequelize=require("sequelize")
const FileUrl=seq.define('fileUrl',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
    FileURL:{
        type:Sequelize.STRING
    }
})
module.exports=FileUrl