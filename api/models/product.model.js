//Requerir paquetes o librerias
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

//Creación del esquema
const productSchema = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        ingredients: [{ type: String, required: true }],
        image: { type: String, required: true },
        category: { type: String, required: true },
        vegetarian: { type: Boolean, required: true}
    },
    {
        collection: 'products',
    } 
);

productSchema.plugin(uniqueValidator, { message: 'Name already in use.' });
module.exports = mongoose.model('Product', productSchema);