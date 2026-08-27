import { useState } from 'react'

type Project = {
  title: string
  description: string
  tags: string[]
  repo?: string
  live?: string
}

const projects: Project[] = [
  {
    title: 'OnlineShop — Full-Stack E-Commerce',
    description:
      'Production-style e-commerce platform with React, TypeScript, Vite, Node.js, Express, Prisma and PostgreSQL. Includes JWT authentication, product, cart, order, payment and admin workflows, migrations and persistent storage.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    repo: 'https://github.com/yazeeth/online-shop',
    live: 'https://shop.yazeeth.org.lk/',
  },
  {
    title: 'OnlineShop — Cloud-Native DevOps Platform',
    description:
      'Containerized and deployed the application on K3s in Oracle Cloud with multi-stage Docker builds, GitHub Actions CI/CD, Docker Hub, Argo CD, GitOps, Kubernetes Ingress, persistent PostgreSQL storage and HashiCorp Vault.',
    tags: ['K3s', 'Docker', 'GitHub Actions', 'Argo CD', 'GitOps', 'Vault', 'OCI'],
    repo: 'https://github.com/yazeeth/online-shop-gitops',
    live: 'https://shop.yazeeth.org.lk/',
  },
  {
    title: 'LibertyNet ERP Data Migration',
    description:
      'Automated a large-scale document migration from on-premises infrastructure to an AWS digital archive, including metadata transformation, S3 transfer, Lambda validation/indexing and OpenSearch integration with Jenkins automation.',
    tags: ['AWS', 'S3', 'Lambda', 'OpenSearch', 'Jenkins', 'Automation'],
  },
  {
    title: 'IAM Key Rotation Notifications',
    description:
      'Built Python and Terraform automation to identify AWS IAM access keys older than 90 days and notify teams through Amazon SNS across multiple environments.',
    tags: ['Python', 'Terraform', 'AWS IAM', 'Lambda', 'SNS'],
  },
  {
    title: 'OpenText User Access Automation',
    description:
      'Integrated OTDS REST APIs with ServiceNow to streamline enterprise user provisioning and reduce manual access-management effort.',
    tags: ['REST API', 'OTDS', 'ServiceNow', 'Automation'],
  },
  {
    title: 'Office Network & Wireless Infrastructure',
    description:
      'Designed and configured a small office LAN using Cisco routers, switches, wireless access points and a WLC, including VLANs, trunking, routing and centralized wireless management.',
    tags: ['Cisco', 'VLAN', 'Routing', 'Switching', 'WLC', 'WLAN'],
  },
]

const skillGroups = [
  ['Cloud', 'AWS', 'Azure', 'Oracle Cloud', 'GCP', 'EC2', 'S3', 'IAM', 'VPC', 'RDS', 'ECS', 'EKS', 'AKS', 'Lambda', 'CloudWatch', 'ECR'],
  ['DevOps & IaC', 'Docker', 'Kubernetes', 'K3s', 'Argo CD', 'GitOps', 'GitHub Actions', 'Jenkins', 'Azure DevOps', 'Terraform', 'Ansible', 'CloudFormation', 'Helm'],
  ['Networking', 'TCP/IP', 'IPv4/IPv6', 'DNS', 'DHCP', 'VLANs', 'Trunking', 'ACLs', 'STP/RSTP', 'OSPF', 'EIGRP', 'BGP', 'Routing', 'Switching', 'VPN', 'Wireshark'],
  ['Systems & Security', 'Linux', 'Windows Server', 'Active Directory', 'Entra ID', 'HashiCorp Vault', 'CyberArk', 'Okta', 'Intune', 'SSL/TLS', 'Fortinet', 'pfSense'],
  ['Development & Data', 'Python', 'Bash', 'TypeScript', 'JavaScript', 'React', 'Node.js', 'REST APIs', 'PostgreSQL', 'MySQL', 'Oracle DB', 'SQL Server', 'MongoDB', 'Redis'],
  ['Observability & ITSM', 'Datadog', 'Prometheus', 'Grafana', 'CloudWatch', 'Dynatrace', 'ServiceNow', 'Jira', 'Confluence', 'Opsgenie', 'ITIL 4'],
]

const experience = [
  { role: 'Senior Cloud Operations Engineer', company: 'IGT1', period: 'Feb 2026 — Aug 2026', detail: 'Cloud operations, production support, automation, infrastructure troubleshooting and enterprise SaaS operations.' },
  { role: 'Senior IT Operations Engineer', company: 'Sysco LABS', period: 'Feb 2022 — Jan 2026', detail: 'Cloud operations, AWS automation, incident management, application support, IAM, data migration and production environments.' },
  { role: 'IT Support Engineer', company: 'HCL Technologies', period: 'Aug 2020 — Feb 2022', detail: 'Enterprise application support, Microsoft 365 migration, identity and access management and L2/L3 troubleshooting.' },
  { role: 'Systems Administrator', company: 'hSenid Software International', period: 'Feb 2020 — Aug 2020', detail: 'Linux/Windows administration, Active Directory, networking, wireless infrastructure and IT asset management.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <header className="nav">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Go home">YN<span>.</span></button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
            <button key={item} onClick={() => scrollTo(item)}>{item}</button>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">CLOUD · DEVOPS · SRE · INFRASTRUCTURE</p>
            <h1>Yazeeth<br /><span>Najeeb.</span></h1>
            <p className="hero-role">Cloud & DevOps Engineer | SRE | IT Infrastructure & Operations</p>
            <p className="hero-text">I build, automate and operate reliable cloud infrastructure, container platforms and production systems — from application code and CI/CD to Kubernetes, networking and observability.</p>
            <div className="hero-actions">
              <button className="primary" onClick={() => scrollTo('projects')}>View projects ↗</button>
              <button className="secondary" onClick={() => scrollTo('contact')}>Contact me</button>
            </div>
            <div className="availability"><span className="pulse" /> Immediate Joiner · Open to Cloud, DevOps, SRE & Infrastructure roles</div>
          </div>
          <div className="hero-terminal">
            <div className="terminal-bar"><i /><i /><i /><span>yazeeth@cloud:~</span></div>
            <div className="terminal-body">
              <p><b>$ whoami</b></p>
              <p className="cyan">cloud-devops-engineer</p>
              <p><b>$ kubectl get platforms</b></p>
              <p><span className="green">●</span> kubernetes &nbsp; Ready</p>
              <p><span className="green">●</span> gitops &nbsp;&nbsp;&nbsp;&nbsp; Synced</p>
              <p><span className="green">●</span> ci-cd &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Passing</p>
              <p><span className="green">●</span> observability &nbsp; Active</p>
              <p><b>$ terraform plan</b></p>
              <p className="muted">No infrastructure drift detected.</p>
            </div>
          </div>
        </section>

        <section id="about" className="section narrow">
          <div className="section-heading"><span>01</span><h2>About me</h2></div>
          <div className="about-grid">
            <div><p className="lead">IT professional with 6+ years of experience across cloud operations, DevOps, infrastructure, systems administration, networking, application support and production operations.</p></div>
            <div><p>Hands-on with AWS, Azure and Oracle Cloud, Infrastructure as Code, CI/CD automation, Docker, Kubernetes, GitOps, monitoring, IAM and Linux/Windows administration.</p><p>I enjoy understanding systems end-to-end — from Layer 2/3 networking and operating systems through application delivery, databases, containers and cloud platforms.</p></div>
          </div>
          <div className="stats">
            <div><strong>6+</strong><span>Years IT experience</span></div>
            <div><strong>3+</strong><span>Cloud platforms</span></div>
            <div><strong>K8s</strong><span>Containers & GitOps</span></div>
            <div><strong>L2/L3</strong><span>Networking foundation</span></div>
          </div>
        </section>

        <section id="experience" className="section dark-section">
          <div className="section-heading"><span>02</span><h2>Experience</h2></div>
          <div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.company}><div className="dot" /><div><p className="period">{item.period}</p><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.detail}</p></div></article>)}</div>
        </section>

        <section id="skills" className="section narrow">
          <div className="section-heading"><span>03</span><h2>Technical stack</h2></div>
          <div className="skill-grid">{skillGroups.map(([title, ...skills]) => <div className="skill-card" key={title}><h3>{title}</h3><div className="chips">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div>
        </section>

        <section id="projects" className="section dark-section">
          <div className="section-heading"><span>04</span><h2>Selected projects</h2></div>
          <div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><div className="project-number">0{index + 1}</div><h3>{project.title}</h3><p>{project.description}</p><div className="chips">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.repo && <a href={project.repo} target="_blank" rel="noreferrer">GitHub ↗</a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live site ↗</a>}</div></article>)}</div>
        </section>

        <section id="contact" className="section contact-section narrow">
          <div className="section-heading"><span>05</span><h2>Let's connect</h2></div>
          <div className="contact-card">
            <p className="eyebrow">OPEN TO OPPORTUNITIES</p>
            <h2>Building reliable systems.<br /><span>One deployment at a time.</span></h2>
            <p>Available for Cloud Engineering, DevOps, SRE, Infrastructure, IT Operations and Technical Support opportunities.</p>
            <div className="contact-links"><a className="primary" href="mailto:yazeethnajeeb@gmail.com">Email me ↗</a><a className="secondary" href="https://www.linkedin.com/in/yazeethnajeeb" target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="secondary" href="https://github.com/yazeeth" target="_blank" rel="noreferrer">GitHub ↗</a></div>
            <p className="phone">UAE · +971 568336149 &nbsp; | &nbsp; Sri Lanka · +94 755116756</p>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Yazeeth Najeeb</span><span>Cloud · DevOps · SRE · Infrastructure</span></footer>
    </div>
  )
}

export default App
