require('dotenv').config();

const express = require('express');
const cors = require('cors');
const conectarBanco = require('./config/database');
const personagemRoutes = require('./routes/personagemRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/personagens', personagemRoutes);


app.get('/', (req, res) => {
  res.json({
    mensagem: 'API JJK funcionando!'
  });
});



async function iniciarServidor() {

  try {

    await conectarBanco();

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });

  } catch (error) {

    console.error('Erro ao iniciar servidor:', error.message);
    process.exit(1);

  }

}

iniciarServidor();