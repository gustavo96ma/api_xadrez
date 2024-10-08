import express, { Request, Response } from 'express';
import { sequelize } from './database';
import { Partida } from '../models/partida';

const app = express();
const port = 3000;

app.use(express.json());

// Conectar ao banco de dados
sequelize
    .authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    })
    .catch((err) => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

// Sincronizar modelos
sequelize.sync({ force: true }).then(() => {
    console.log('Tabelas sincronizadas.');
});

// Rota principal da API
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, API com TypeScript e PostgreSQL - Partidas de Xadrez!');
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

