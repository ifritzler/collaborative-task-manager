export default () => ({
  app: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: !!process.env.DB_SYNC || true,
  },
});
