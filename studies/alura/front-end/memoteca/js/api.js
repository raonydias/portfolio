const URL_BASE = "http://localhost:3000";

const api = {
    async buscarPensamentos() {
        try {
            const response = await axios.get(
                "https://gist.githubusercontent.com/raonydias/d39e67b1e1c60a16d2fd6d8459c02894/raw/901957b71d49b06095dc9f8d51cd8ab1a4717410/pensamentos.txt"
            );
            return await response.data;
        } catch (error) {
            alert("Erro ao buscar pensamentos");
            throw error;
        }
    },

    async buscarPensamentoPorId(id) {
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos/${id}`);
            return await response.data;
        } catch (error) {
            alert(`Erro ao buscar pensamento com id ${id}`);
            throw error;
        }
    },

    async salvarPensamento(pensamento) {
        try {
            const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento);
            return await response.data;
        } catch (error) {
            alert("Erro ao salvar pensamento");
            throw error;
        }
    },

    async editarPensamento(pensamento) {
        try {
            const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, pensamento);
            return await response.data;
        } catch (error) {
            alert("Erro ao editar pensamento");
            throw error;
        }
    },

    async excluirPensamento(id) {
        try {
            const response = await axios.delete(`${URL_BASE}/pensamentos/${id}`);
            return await response.data;
        } catch (error) {
            alert("Erro ao excluir pensamento");
            throw error;
        }
    },
};

export default api;
