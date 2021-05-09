const apiAdapter = require('../../apiAdapter');
const {
    URL_EDO,
    JWT_SECRET,
    JWT_ACCESS_TOKEN_EXPIRED
} = process.env;
const jwt = require('jsonwebtoken');

const api = apiAdapter(URL_EDO);

module.exports = async (req, res) => {
    try {
        const user = await api.post('/api/e_do/login', req.body);

        const data = user.data.data;

        const token = jwt.sign({
            id: data.user_id,
            email: data.email,
            name: data.name,
            branch_office: data.branch_office,
            role: data.role
        }, JWT_SECRET, { expiresIn: JWT_ACCESS_TOKEN_EXPIRED });

        return res.json({
            id_token: token
        })

    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}
