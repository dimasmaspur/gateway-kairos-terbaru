const apiAdapter = require('../../apiAdapter');
const {
    URL_JO
} = process.env;

const api = apiAdapter(URL_JO);

module.exports = async (req, res) => {
    try {
        const id = req.params.id
        const user = await api.put(`/quotation-payrequest/${id}`, req.body);
        return res.json(user.data);
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}