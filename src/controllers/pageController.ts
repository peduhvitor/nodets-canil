import { Request, Response } from "express";

import { Pet } from '../models/Pet.model';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    res.render('pages/page', {
        activeHome: 'active',
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
}

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');

    res.render('pages/page', {
        activeDog: 'active',
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    })
}

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');

    res.render('pages/page', {
        activeCat: 'active',
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    })
}

export const fishs = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');

    res.render('pages/page', {
        activeFish: 'active',
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    })
}