import dotenv from 'dotenv';
dotenv.config();
export const testEnvironmentVariable = process.env.TEST_ENV_VAR;
export const connectionString=process.env.CONNECTION_STRING;

