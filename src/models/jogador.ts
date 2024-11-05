import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

export class Jogador extends Model {
   public id!: number;
   public nome!: string;
}

Jogador.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
     sequelize,   
     modelName: 'Jogador',
     tableName: 'jogadores',
     createdAt: false,
     updatedAt: false,
    }
);