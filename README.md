# Registration Form Challenge
this is cdec challenge :)

## Environment

Copy `.env.example` to `.env` and fill in the values

**Linux :** cp .env.example .env
**Windows :** only copy it 🔥

| Variable        | Description                                       |
| --------------- | ------------------------------------------------- |
| `DATABASE_URL`  | Postgres connection string                        |
| `JWT_SECRET`    | Long random string used to sign tokens            |
| `COOKIE_SECURE` | `false` for testing and `true` for production     |

Generate a secret:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Run with Docker

```bash
docker compose up --build
```

Open http://localhost:3000 and login using test account

## Run with npm

```bash
npm install
docker compose up -d db # you must use docker if you not install postgres on your machine
npx prisma migrate deploy
npm run seed
npm run dev
```

## Test account

| Email             | Password       |
| ----------------- | -------------- |
| `admin@cdec.club` | `passwordCdec` |
