import axios from 'axios';

const url = 'http://localhost:8080/especialidade';

// Função para criar uma nova especialidade
async function criarEspecialidade(especialidade) {
    try {
        const response = await axios.post(url, especialidade);
        console.log('Especialidade criada:', response.data);
    } catch (error) {
        console.error('Erro ao criar especialidade:', error);
    }
}

// Função para obter todas as especialidades
async function getAllEspecialidades() {
    try {
        const response = await axios.get(url);
        console.log('Especialidades:', response.data);
    } catch (error) {
        console.error('Erro ao obter especialidades:', error);
    }
}

// Função para buscar uma especialidade por ID
async function getEspecialidadeById(id) {
    try {
        const response = await axios.get(`${url}/${id}`);
        console.log('Especialidade encontrada:', response.data);
    } catch (error) {
        console.error('Erro ao obter especialidade por ID:', error);
    }
}