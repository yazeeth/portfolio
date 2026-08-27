# Yazeeth Najeeb — Cloud & DevOps Portfolio

Personal portfolio website for **Yazeeth Najeeb**, showcasing cloud engineering, DevOps, SRE, IT infrastructure, networking, automation, and systems administration experience.

## Overview

This is a lightweight, responsive static portfolio built with HTML, CSS, and JavaScript. It presents professional experience, technical skills, projects, certifications, and contact information, with a downloadable CV and links to GitHub and LinkedIn.

The project is intentionally implemented as a static website so it can be served efficiently through Nginx and containerized for deployment to cloud or Kubernetes environments.

## Features

- Responsive personal portfolio website
- Cloud & DevOps-focused professional profile
- Technical skills covering AWS, Azure, Oracle Cloud, Kubernetes, Docker, Terraform, Ansible, CI/CD, GitOps, networking, databases, Linux, and infrastructure operations
- Project portfolio and professional experience
- Downloadable PDF CV
- GitHub and LinkedIn links
- Profile image and portfolio assets
- Nginx-ready static website
- Docker containerization
- Multi-architecture container support for `linux/amd64` and `linux/arm64`
- GitHub Actions CI workflow for versioned Docker image releases

## Technology Stack

- HTML5
- CSS3
- JavaScript
- Nginx
- Docker
- Docker Buildx
- GitHub Actions
- Docker Hub
- Git

## Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── docker-build-push.yml
├── assets/
│   ├── profile.jpeg
│   └── YAZEETH_NAJEEB_RESUME_AUG_2026.pdf
├── css/
│   └── style.css
├── js/
│   └── script.js
├── .dockerignore
├── .gitignore
├── Dockerfile
├── index.html
└── README.md
```

## Local Development

Because this is a static website, it does not require Node.js or a build system for local development.

You can open `index.html` directly in a browser or serve the directory with a local HTTP server.

For example, using Python:

```bash
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080
```

## Docker

Build the image locally:

```bash
docker build -t yazeeth/portfolio:latest .
```

Run the container:

```bash
docker run --rm -p 8080:80 yazeeth/portfolio:latest
```

Open:

```text
http://localhost:8080
```

## Multi-Architecture Images

The GitHub Actions workflow builds and publishes the portfolio for both Intel/AMD and ARM-based systems:

```text
linux/amd64
linux/arm64
```

This allows the same container image to run on common x86-64 servers as well as ARM-based cloud instances and development machines.

## Image Versioning

Docker images are released using semantic version tags, for example:

```text
yazeeth/portfolio:v1.0.0
yazeeth/portfolio:latest
```

A version tag is created with Git:

```bash
git tag v1.0.0
git push origin v1.0.0
```

The GitHub Actions workflow then builds and publishes the corresponding multi-architecture image to Docker Hub.

Versioned images are preferred for production and GitOps deployments because a specific release can be referenced and rolled back when required.

## CI/CD

GitHub Actions is used to automate the container image build and publishing process.

```text
Git tag
   ↓
GitHub Actions
   ↓
Docker Buildx
   ↓
linux/amd64 + linux/arm64
   ↓
Docker Hub
   ↓
yazeeth/portfolio:<version>
```

The repository is structured so the container can later be deployed through Kubernetes and managed using GitOps/Argo CD alongside the OnlineShop project.

## Deployment

The portfolio is designed to run as a lightweight containerized web application and can be deployed to:

- Docker
- Kubernetes / K3s
- Cloud virtual machines
- Oracle Cloud Infrastructure
- Other container platforms supporting Linux containers

## Public Links

- **Portfolio:** https://yazeeth.org.lk/
- **GitHub:** https://github.com/yazeeth/
- **LinkedIn:** https://www.linkedin.com/in/yazeethnajeeb

## Author

**Yazeeth Najeeb**  
Cloud & DevOps Engineer | SRE | IT Infrastructure & Operations
