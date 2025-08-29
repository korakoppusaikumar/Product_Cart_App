const exp = require('express');
const ProductsApp = exp.Router();
const asyncErrorHandling = require('express-async-handler');

// Get all products (public)
ProductsApp.get('/', asyncErrorHandling(async (request, response) => {
    try {
        const productCollections = request.app.get("productsObj");
        let list = await productCollections.find({}).toArray();
        response.send(list);
    } catch (error) {
        console.error("Get products error:", error);
        response.status(500).send({ message: "Internal server error" });
    }
}));

module.exports = ProductsApp;
