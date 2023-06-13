const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite:' + './data/databaseFile.db');

const Players = sequelize.define(
    'Players',

    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: {
                args: true,
                msg: 'El id del jugador ya existe.'
            }
        },

        full_name: {
            type: DataTypes.STRING(50),
            allowNull: true,
            validate: {
                max: {
                    args: 50,
                    msg: 'El nombre completo del jugador no puede superar los 50 caracteres.'
                }
            }
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: 'El atributo email de la tabla players no puede ser nulo.'
                },
                max: {
                    args: 50,
                    msg: 'El nombre completo del jugador no puede superar los 50 caracteres.'
                }
            }
        },

        nickname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: 'El atributo apodo de la tabla players no puede ser nulo.'
                },
                max: {
                    args: 50,
                    msg: 'El apodo del jugador no puede superar los 50 caracteres.'
                }
            }
        },

        ip_address: {
            type: DataTypes.STRING(20),
            allowNull: true,
            validate: {
                max: {
                    args: 50,
                    msg: 'La ip de la dirección del jugador no puede superar los 20 caracteres.'
                }
            }
        },

        age: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        avatar: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                max: {
                    args: 50,
                    msg: 'El avatar del jugador no puede superar los 50 caracteres.'
                }
            }
        }
    },

    {
        timestamps: false
    }
);

module.exports = {
    sequelize,
    Players
};