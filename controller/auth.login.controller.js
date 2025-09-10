import { loginUser } from '../services/auth.login.service.js';

 const authLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await loginUser(email, password)
        if (result.success) {
            res.status(200).json({
                statusCode: 200,
                ...result,
                message: 'Logged in successfully!'
            });
        } else {
            res.status(200).json(result); 
        }
    } catch (err) {
        res.status(400).json({ success: false, data: null, accessToken: null, refreshToken: null });
    }
};
export default authLogin
