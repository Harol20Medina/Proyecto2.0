const { models } = require('../libs/sequelize');

class PlatilloService {
    
    constructor(){}

    async find(){
        const res = await models.Platillo.findAll();
        return res;
    }

    async findOne(id){
        const res = await models.Platillo.findByPk(id);
        return res;
    }

    async create(data){
        const res = await models.Platillo.create(data);
        return res;
    }

    async update(id, data){
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }

    async delete(id){
        const model = await this.findOne(id);
        await model.destroy();
        return {deleted: true};
    }

    async findByCategoriaId(categoriaId) {
        const platillos = await models.Platillo.findAll({
            where: { categoriaId: categoriaId }
        });
        return platillos;
    }
}

module.exports = PlatilloService;