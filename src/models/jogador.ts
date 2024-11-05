<<<<<<< HEAD
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
=======
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database'; 

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
    },
  },
  {
    sequelize,
    modelName: 'Jogador',
    tableName: 'jogadores',
    timestamps: false, 
  }
);
>>>>>>> 7caec4381cd20f8fc1072e0f9e3286a6d44a204a
