export const data = {
  info: {
    name: "Md Erum",
    title: "Senior Backend Developer",
    location: "India",
    email: "code.erum@gmail.com",
    github: "github.com/mderum/",
    linkedin: "linkedin.com/in/md-erum",
    summary:
      "Java backend developer with 5+ years of experience delivering scalable microservices and REST APIs across fintech, healthcare, and retail domains. Improved platform sync efficiency from 85% to 96% and Aadhaar-based payment services with biometric authentication. Proficient in Spring Boot, cloud platforms (AWS, Azure), and AI-assisted development tools.",
  },
  skills: [
    { name: "System Design",      level: 90 },
    { name: "REST APIs",   level: 95 },
    { name: "Database Modeling",  level: 85 },
    { name: "CI/CD Pipelines",    level: 80 },
    { name: "Performance Tuning", level: 75 },
    { name: "Security & Auth",    level: 70 },
  ],
  projects: [
    {
      name: "AePS",
      desc: "Enables customers to perform basic banking transactions such as balance inquiry, cash withdrawal, and mini statements using their Aadhaar number and biometric authentication.",
      tech: ["Java", "Spring Boot", "Liferay-portlet","Bootstrap","JQuery","javascript"]
    },
    {
      name: "Bank Statement Analyser",
      desc: "Developed a service to parse bank statement PDFs and analyze spending patterns. Extracted transaction data to generate categorized insights for financial evaluation and decision-making.",
      tech: ["Java", "Spring Boot", "Python"]
    },
    {
      name: "Lead Generation Forms ( Loan / Job / Credit Cards / Saving Accounts )",
      desc: "Developed dynamic lead generation forms using Spring Boot and Liferay. Integrated partner APIs to capture and forward user data for loans, jobs, credit cards, and savings accounts. Ensured modular design for easy onboarding of new partners and form types.",
      tech: ["Java", "Spring Boot", "Liferay-portlet","Bootstrap","JQuery","javascript"]
    },
    {
      name: "Patient Data Sync",
      desc: "Developed backend microservices for managing patient data sync, allergies, and prescriptions. Ensured reliable data integration across systems in a healthcare environment using Spring Boot and RESTful APIs.",
      tech:  ["Java", "Spring Boot"]
    },
    {
      name: "Pin And Password Encryption",
      desc: "Implemented PIN and password encryption for secure login and wallet payments using industry-standard encryption algorithms. Ensured secure data storage and transmission to protect user credentials and transaction integrity.",
      tech:  ["Java", "Spring Boot"]
    },
  ],
  stacks: [
    { label: "Languages",     items: ["Java","Python","Javascript"] },
    { label: "Frameworks",     items: ["Spring Boot","Liferay"] },
    { label: "Databases",     items: ["MySQL","PostgreSQL", "MongoDB", "Azure Cosmos DB", "Databricks SQL"] },
    { label: "Infrastructure",items: ["Docker", "Kubernetes", "Azure", "AWS", "CI/CD"] },
    { label: "Messaging",     items: ["Kafka"] },
  ],
  tools: [
   "Git", "Bitbucket", "Assembla", "Jira", "Confluence", "WinSCP", "Apache Ant", "Bash"
    ,"ChatGPT", "Claude", "Gemini", "Kiro"
  ],
};
