const apiAdapter = require('../../apiAdapter');
const {
    URL_EDO
} = process.env;

const api = apiAdapter(URL_EDO);

module.exports = async (req, res) => {
    try {
        const edo = await api.get('/api/e_do/total_e_do');
        return res.json(edo.data);
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}