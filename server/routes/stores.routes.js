const StoreController = require('../controllers/store.controller.js')



module.exports = (app) => {
    app.get('/api/store', StoreController.getAll);
    app.post('/api/store', StoreController.create);
    app.get('/api/store/:id', StoreController.getOne);
    app.put('/api/store/:id', StoreController.update);
    app.delete('/api/store/:id', StoreController.delete);
};
