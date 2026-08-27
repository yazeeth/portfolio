# Yazeeth Najeeb — Portfolio

Personal portfolio for Yazeeth Najeeb, Cloud & DevOps Engineer | SRE | IT Infrastructure & Operations.

## Stack

- React + TypeScript + Vite
- Nginx production web server
- Docker multi-stage build
- Designed for Kubernetes / GitOps deployment

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

The production container builds the Vite `dist` output and serves it with Nginx. Vite's production deployment model uses the generated `dist` directory, while Nginx provides the static runtime and SPA fallback.

## Docker

```bash
docker build -t yazeeth/portfolio:latest .
docker run --rm -p 8080:80 yazeeth/portfolio:latest
```

Open `http://localhost:8080`.

## Public links

- Website: https://yazeeth.org.lk/
- GitHub: https://github.com/yazeeth/
- LinkedIn: https://www.linkedin.com/in/yazeethnajeeb
