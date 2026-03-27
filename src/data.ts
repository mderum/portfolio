export const data = {
  info: {
    name: "Md Erum",
    title: "Senior Backend Developer",
    location: "India",
    email: "code.erum@gmail.com",
    github: "github.com/mderum/",
    linkedin: "linkedin.com/in/alexcarter",
    summary:
      "5+ years building scalable distributed systems and REST/gRPC APIs. Passionate about clean architecture, performance tuning, and developer tooling.",
  },
  skills: [
    { name: "System Design",      level: 90 },
    { name: "REST / gRPC APIs",   level: 95 },
    { name: "Database Modeling",  level: 85 },
    { name: "CI/CD Pipelines",    level: 80 },
    { name: "Performance Tuning", level: 75 },
    { name: "Security & Auth",    level: 80 },
  ],
  projects: [
    {
      name: "PayStream",
      desc: "High-throughput payment processing service handling 50k TPS with idempotency and retry logic.",
      tech: ["Node.js", "PostgreSQL", "Redis", "Kafka"],
      url: "github.com/alexcarter/paystream",
    },
    {
      name: "AuthVault",
      desc: "OAuth2 / OIDC identity provider with RBAC, MFA, and audit logging.",
      tech: ["Go", "PostgreSQL", "JWT", "Docker"],
      url: "github.com/alexcarter/authvault",
    },
    {
      name: "LogPilot",
      desc: "Centralized log aggregation pipeline with real-time alerting and dashboards.",
      tech: ["Python", "Elasticsearch", "Kafka", "Grafana"],
      url: "github.com/alexcarter/logpilot",
    },
    {
      name: "CacheLayer",
      desc: "Distributed caching middleware with TTL strategies and cache-aside pattern.",
      tech: ["Node.js", "Redis", "TypeScript"],
      url: "github.com/alexcarter/cachelayer",
    },
  ],
  stacks: [
    { label: "Languages",     items: ["TypeScript", "Go", "Python", "Rust (learning)"] },
    { label: "Databases",     items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
    { label: "Infrastructure",items: ["Docker", "Kubernetes", "Terraform", "AWS"] },
    { label: "Messaging",     items: ["Kafka", "RabbitMQ", "NATS"] },
  ],
  tools: [
    "VS Code", "Neovim", "Postman", "Insomnia",
    "DataGrip", "TablePlus", "k9s", "Lens",
    "Git", "GitHub Actions", "ArgoCD", "Prometheus",
  ],
};
