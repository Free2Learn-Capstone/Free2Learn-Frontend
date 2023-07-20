/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
        BACKEND_URL: process.env.BACKEND_URL,
    }
}

module.exports = nextConfig
