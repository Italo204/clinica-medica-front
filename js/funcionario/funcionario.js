import axios from 'axios';

const url = 'http://localhost:8080/funcionarios';

// Função para criar um novo funcionário
async function criarFuncionario(funcionario) {
    try {
        const response = await axios.post(url, funcionario);
        console.log('Funcionário criado:', response.data);
    } catch (error) {
        console.error('Erro ao criar funcionário:', error);
    }
}

// Função para obter todos os funcionários
async function getAllFuncionarios() {
    try {
        const response = await axios.get(url);
        console.log('Funcionários:', response.data);
    } catch (error) {
        console.error('Erro ao obter funcionários:', error);
    }
}