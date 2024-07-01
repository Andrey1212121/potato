const uuid = require('uuid')
const path = require('path');
const {Potato} = require('../models/models')
const ApiError = require('../error/ApiError')


class   PotatoControllerr {
    async create(req, res, next){
        try{
            const {name, price, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4 + ".jpg"//создание имени файла фото
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            
            const potato = await Potato.create({name, price, img:fileName})
    
            return res.json(device)

        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    
    async getAll(req, res){
        const types = await Type.findAll()
        return res.json(types)
        
    }

    async getOne(req, res){

    }
}

module.exports = new PotatoController()