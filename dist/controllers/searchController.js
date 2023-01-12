"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const Pet_model_1 = require("../models/Pet.model");
const search = (req, res) => {
    let query = req.query.q;
    if (!query) {
        res.redirect('/');
        return;
    }
    let list = Pet_model_1.Pet.getFromName(query);
    res.render('pages/page', {
        list,
        query
    });
};
exports.search = search;
//# sourceMappingURL=searchController.js.map