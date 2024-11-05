import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

export class Partida extends Model {
    public id!: number;
    public jogador_brancas!: number;
    public jogador_pretas!: number;
    public data!: Date;
    public resultado!: string;
}

Partida.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        jogador_brancas: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        jogador_pretas: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        resultado: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['brancas', 'pretas', 'empate']],
            },
        },
    },
    {
        sequelize,
        modelName: 'Partida',
        tableName: 'partidas',
    }
);