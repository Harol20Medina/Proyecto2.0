const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'users';

class Person extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Person',
            timestamps: true
        }
    }
} 

const PersonSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    dni: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'dni'
    },
    nombres:{
        allowNull:false,
        type: DataTypes.STRING,
        field: 'nombres'
    },
    apellidop:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'apellidop'
    },
    apellidom:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'apellidom'
    },
    correo:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'correo'
    },
    telefono:{
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'telefono'
    },
    direccion:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'direccion'
    },
    contraseña:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'contraseña'
    }      
}
  
module.exports = { Person, PersonSchema };