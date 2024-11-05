import express, { Request, Response } from 'express';
import { sequelize } from './database';
import { Jogador } from './models/jogador';

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
sequelize.sync({ force: false }).then(() => {
    console.log('Tabelas sincronizadas.');
});

// Rota principal da API
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, API com TypeScript e PostgreSQL - Partidas de Xadrez!');
});

app.get('/jogadores', async (req: Request, res: Response) => {
    try {
        const jogadores = await Jogador.findAll();
        res.status(200).json(jogadores);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao consultar jogadores' });
    }
});

app.post('/jogadores', async (req: Request, res: Response) => {
    const { nome } = req.body;
    try {
        const novoJogador = await Jogador.create({ nome });
        res.status(201).json(novoJogador);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar jogador' });
    }
});

// Rota PUT para atualizar um jogador existente
app.put('/jogadores/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome } = req.body;
    try {
        const jogador = await Jogador.findByPk(id);
        if (!jogador) {
            res.status(404).json({ error: 'Jogador não encontrado' });
            return;
        }

        jogador.nome = nome;
        await jogador.save();
        res.status(200).json(jogador);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar jogador' });
    }
});

// Rota DELETE para remover um jogador existente
app.delete('/jogadores/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const jogador = await Jogador.findByPk(id);
        if (!jogador) {
            res.status(404).json({ error: 'Jogador não encontrado' });
            return;
        }
        await jogador.destroy();
        res.status(204).send(); // Resposta sem conteúdo após deletar com sucesso
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar jogador' });
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

