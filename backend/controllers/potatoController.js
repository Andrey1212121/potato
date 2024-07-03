const uuid = require('uuid')
const path = require('path');
const {Potato, Potatoinfo} = require('../models/models')
const ApiError = require('../error/ApiError')


class   PotatoControllerr {
    async create(req, res, next){
        try{
            let {name, price, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4 + ".jpg"//создание имени файла фото
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            
            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    PotatoInfo.create({
                        title: i.title,
                        description: i.description,
                        potatoId: potato.id
                    })
                )
            }

            const potato = await Potato.create({name, price, img:fileName})
    
            return res.json(device)

        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    
    async getAll(req, res){
        const types = await Type.findAll()
        return res.json(types)
        let {typeId, limit, page} = req.query // добавляем постраничный вывод
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit // отступ
        let potato;
        if (!typeId) {
            potato = await Potato.findAndCountAll(limit, offset)
        }
        if (typeId) {
            potato = await Potato.findAndCountAll({where: {typeId}, limit, offset} )
        }
        return res.json(potato)
    }

    async getOne(req, res){
        const {id} = req.params
        const potato = await Potato.findOne(
            {
                where: {id},
                include: [{model: Potatoinfo, as: 'info'}]
            },

        )
        return res.json(potato)
    }
}

module.exports = new PotatoController()