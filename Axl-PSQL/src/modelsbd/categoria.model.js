const {Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORIA_TABLE = 'categoria';

class Categoria extends Model {
    static config(sequelize){
        return {
            sequelize,
            tableName: CATEGORIA_TABLE,
            modelName: 'Categoria',
            timestamps: true
        }
    }
    static associate(models) {
        // Establece la relación uno a muchos con Platillo
        this.hasMany(models.Platillo, { foreignKey: 'categoriaId' });
    }

}

const CategoriaSchema = {
    categoriaId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre:{
        allowNull:false,
        type: DataTypes.STRING,
        field: 'nombre'
    }
}

module.exports = { Categoria, CategoriaSchema};