import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Employee from '../models/employee.model.js';

export const loginUser = async (email, password) => {
    const user = await Employee.findOne({ email });
    if (!user) {
        return { success: false, data: null, accessToken: null, refreshToken: null };
    }

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return {
            success: false,
            data: {
                _id: user._id,
                is_verified: user.is_verified,
                is_active: user.is_active,
                last_login: user.last_login
            },
            accessToken: null,
            refreshToken: null
        };
    }

    // Update last login
    user.last_login = new Date();
    await user.save();

    // Generate tokens
    const accessToken = jwt.sign(
        { id: user._id, email: user.email },
        process.env.SECRET_KEY,
        { expiresIn: '1h' }
    );

    const refreshToken = jwt.sign(
        { id: user._id, email: user.email },
        process.env.SECRET_KEY,
        { expiresIn: '7d' }
    );

    return {
        success: true,
        data: {
            _id: user._id,
            username: user.name,
            email: user.email,
            provider: user.provider || 'email',
            is_active: user.is_active,
            is_verified: user.is_verified,
            last_login: user.last_login,
            profile_picture: user.profile_picture || null
        },
        accessToken,
        refreshToken
    };
};
