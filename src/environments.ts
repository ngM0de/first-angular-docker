export interface Environment {
    production: boolean;
    apiUrl: string
}

export const dev: Environment = {
    production: false,
    apiUrl: 'http://localhost:3000'
}

export const prod: Environment = {
    production: true,
    apiUrl: 'https://express-playground-docker.onrender.com'
}