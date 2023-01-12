"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishs = exports.cats = exports.dogs = exports.home = void 0;
const Pet_model_1 = require("../models/Pet.model");
const home = (req, res) => {
    let list = Pet_model_1.Pet.getAll();
    res.render('pages/page', {
        activeHome: 'active',
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
};
exports.home = home;
const dogs = (req, res) => {
    let list = Pet_model_1.Pet.getFromType('dog');
    res.render('pages/page', {
        activeDog: 'active',
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = Pet_model_1.Pet.getFromType('cat');
    res.render('pages/page', {
        activeCat: 'active',
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
};
exports.cats = cats;
const fishs = (req, res) => {
    let list = Pet_model_1.Pet.getFromType('fish');
    res.render('pages/page', {
        activeFish: 'active',
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
};
exports.fishs = fishs;
//# sourceMappingURL=pageController.js.map