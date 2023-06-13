const express = require('express');
const db = require('../base-orm/sequelize_init.js');
const { Op } = require('sequelize');

const PlayersRouter = express.Router();

PlayersRouter.get('/api/players', async (req, res) => {
    try {
        const { filtro, orden } = req.query;

        let where = {};
        if (filtro !== undefined && filtro !== '') {
            where = {
                [Op.or]: [
                    { full_name: { [Op.startsWith]: filtro }},
                    { nickname: { [Op.startsWith]: filtro }},
                    { email: { [Op.startsWith]: filtro }}
                ]
            }
        };
    
        let order = [];
        if (orden !== undefined && orden !== '' && (orden === 'nickname' || orden === 'full_name' || orden === 'id')) {
            order = [[orden, 'ASC']]
        };
    
        const data = await db.Players.findAll({
            where,
            order
        });
    
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ message: 'No se encontraron jugadores.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}); 

module.exports = PlayersRouter;