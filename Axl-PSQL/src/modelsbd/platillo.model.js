const {Model, DataTypes, Sequelize } = require('sequelize');

const PLATILLO_TABLE = 'platillo';

class Platillo extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: PLATILLO_TABLE,
            modelName: 'platillo',
            timestamps:true
        }
    }
    static associate(models) {
        // Establece la relación con Categoria
        this.belongsTo(models.Categoria, { foreignKey: 'categoriaId' });
    }
}

const PlatilloSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre'
    },
    foto: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'foto'
    },
    stock: {
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'stock'
    },
    precio: {
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'precio'
    },
    categoriaId: { // Debe coincidir con el nombre de la clave foránea en la relación
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'categoriaId'
    }
}

module.exports = {Platillo, PlatilloSchema};