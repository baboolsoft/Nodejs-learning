import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email },
        process.env.SECRET_KEY,      // Make sure you have .env with SECRET_KEY
        { expiresIn: '1h' }
    );
};
