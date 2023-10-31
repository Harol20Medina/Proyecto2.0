const { Platillo, PlatilloSchema } = require('./platillo.model');
const { Person, PersonSchema } = require('./usuario.model');
const { Categoria, CategoriaSchema } = require('./categoria.model');

function setupModels(sequelize) {
    Person.init(PersonSchema, Person.config(sequelize));
    Platillo.init(PlatilloSchema,Platillo.config(sequelize));
    Categoria.init(CategoriaSchema,Categoria.config(sequelize));
}

module.exports = setupModels;