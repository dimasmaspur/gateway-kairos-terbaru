const apiAdapter = require('../../apiAdapter');
const {
    URL_EDO
} = process.env;

const api = apiAdapter(URL_EDO);

module.exports = async (req, res) => {
    try {
        const id = req.params.id
        const final_destination = await api.delete(`/api/e_do/final_destination/${id}`);
        return res.json(final_destination.data);
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}