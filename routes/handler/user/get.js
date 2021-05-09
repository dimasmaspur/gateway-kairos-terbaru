const apiAdapter = require('../../apiAdapter');
const {
    URL_EDO
} = process.env;

const api = apiAdapter(URL_EDO);

module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await api.get(`/api/e_do/users/${id}`);
        return res.json(user.data);
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}