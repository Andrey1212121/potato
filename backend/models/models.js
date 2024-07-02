const sequelize = require('../db')
const {DataTypes, STRING} = require('sequelize')

const User = sequelize.define('user', { //пользователь
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // id повторяться не может 
    email: {type: DataTypes.STRING, unique: true}, // уникальный email
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defoultValue: "USER"}, // по умолчанию роль у пользователя "USER"
})

const Basket = sequelize.define('basket', { // корзина
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // id повторяться не может 
})

const Basket_potato = sequelize.define('basket_potato', { // корзина 
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // id повторяться не может 
})

const Potato = sequelize.define('potato', { // характеристики картофеля
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // id повторяться не может 
    name: {type: DataTypes.STRING, unique: true, allowNull: false}, // уникальное название и должно быть какое-либо значение
    price: {type: DataTypes.INTEGER, allowNull: false}, // Должно быть какое-либо значение
    img: {type: DataTypes.STRING, allowNull: false}, // Должно быть какое-либо значение
})

const Type = sequelize.define('type', { // тип картофеля
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // id повторяться не может 
    name: {type: DataTypes.STRING, unique: true, allowNull: false} // уникальное название и не должно повторяться
})

const Potatoinfo = sequelize.define('potato_info', { // информация о картофеле
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // id повторяться не может 
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}, 
})

// Связь в бд
User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(Basket_potato)
Basket_potato.belongsTo(Basket)

Type.hasMany(Potato)
Potato.belongsTo(Type)

Basket_potato.hasMany(Potato)
Potato.belongsTo(Basket_potato)

Potato.hasMany(Potatoinfo, {as: 'info'});
Potatoinfo.belongsTo(Potato)

// экспорт всех моделей
module.exports = {
    User, 
    Basket,
    Basket_potato,
    Type,
    Potato,
    Potatoinfo
}