const apiAdapter = require('../../apiAdapter');
const {
    URL_JO
} = process.env;

const api = apiAdapter(URL_JO);

module.exports = async (req, res) => {
    try {
        const jo = await api.post('/joc-data', req.body);
        return res.json(jo.data);
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}