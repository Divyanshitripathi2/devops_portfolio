
import { Milestone, Skill, Project } from './types';

export const MILESTONES: Milestone[] = [
  {
    company: "Seclore",
    role: "Senior DevOps Engineer",
    period: "March 2026 – Present",
    location: "Mumbai, India (Remote)",
    isCurrent: false,
    hidden: true,
    description: [
      "Leading the architectural transition to Zero-Trust Kubernetes for Seclore's core Data Privacy platform, securing petabytes of enterprise sensitive data.",
      "Architected a multi-region high-availability disaster recovery (DR) strategy across AWS and Azure, achieving 99.99% uptime for global clients.",
      "Automated security compliance (SOC2, HIPAA) through 'Compliance-as-Code' using Terraform, OPA (Open Policy Agent), and customized CI/CD gates.",
      "Optimized petabyte-scale data classification engines by implementing advanced EKS node group fine-tuning and intelligent HPA/VPA autoscaling logic.",
      "Mentoring a cross-functional team of 5 platform engineers on DevSecOps best practices and advanced cloud-native networking."
    ]
  },
  {
    company: "M2P Solutions",
    role: "SDE 1 - Platform Engineer",
    period: "Feb 2025 – Feb 2025",
    location: "New Delhi, India",
    description: [
      "Accountable for 99.9% availability of multi-cloud production environments (AWS, Azure, GCP) for financial services platforms.",
      "Engineered GitOps CI/CD pipelines with ArgoCD, accelerating delivery speed by 40%.",
      "Administered 4 Kubernetes clusters with data-driven capacity planning for peak traffic scaling.",
      "Designed observability dashboards in Grafana/Datadog using Prometheus and OpenTelemetry for proactive incident prevention.",
      "Eliminated 100% of manual database backup toil for MySQL and PostgreSQL through automated cron jobs and Vault integration."
    ]
  },
  {
    company: "Hughes Communications India",
    role: "Automation Engineer",
    period: "Jul 2023 – Feb 2026",
    location: "Gurgaon, India",
    shortName: "HCI",
    description: [
      "Accelerated software delivery by 20% through robust CI/CD implementation using Jenkins, Docker, and Helm.",
      "Reduced build times by 30% and deployment failures by 50%.",
      "Migrated legacy infrastructure to Terraform IaC, reducing provisioning time by 50%.",
      "Improved system observability by 60% through real-time Prometheus/Grafana monitoring.",
      "Developed reusable Ansible playbooks for agentless server provisioning, reducing manual intervention by 25%."
    ]
  },
  {
    company: "Opstree Solutions",
    role: "Cloud Engineer Intern",
    period: "Dec 2022 – June 2023",
    location: "Noida, India",
    description: [
      "Automated provisioning of 50+ EC2 instances using Ansible and Terraform, ensuring 30% faster environment setups.",
      "Designed and deployed highly available EKS clusters with auto-scaling and fault tolerance.",
      "Conducted AWS cost optimization analysis, saving 20% on cloud expenditures through reserved instances and rightsizing."
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'AWS', icon: 'Cloud', level: 95, category: 'Cloud' },
  { name: 'Azure', icon: 'Cloud', level: 92, category: 'Cloud' },
  { name: 'GCP', icon: 'Cloud', level: 90, category: 'Cloud' },
  { name: 'Terraform', icon: 'FileCode', level: 92, category: 'Cloud' },
  { name: 'Kubernetes (K8s)', icon: 'Ship', level: 94, category: 'Containerization' },
  { name: 'Docker', icon: 'Box', level: 90, category: 'Containerization' },
  { name: 'Jenkins / GitLab CI', icon: 'GitBranch', level: 88, category: 'CI/CD' },
  { name: 'ArgoCD (GitOps)', icon: 'RefreshCw', level: 91, category: 'CI/CD' },
  { name: 'Prometheus/Grafana', icon: 'Activity', level: 89, category: 'Monitoring' },
  { name: 'ELK Stack', icon: 'Search', level: 82, category: 'Monitoring' },
  { name: 'SonarQube/Trivy', icon: 'Shield', level: 87, category: 'Security' },
  { name: 'HashiCorp Vault', icon: 'Lock', level: 85, category: 'Security' },
  { name: 'Python', icon: 'Terminal', level: 80, category: 'Languages' },
  { name: 'Bash Scripting', icon: 'Terminal', level: 92, category: 'Languages' }
];

export const PROJECTS: Project[] = [
  {
    title: "Enterprise DevSecOps Pipeline Framework",
    description: [
      "Built a modular Jenkins library for multi-cloud deployments (AWS/Azure).",
      "Implemented security scanning shifts-left (SAST/DAST) with automated gate enforcement.",
      "Deployed centralized logging and alerting for 200+ microservices."
    ],
    tech: ["Jenkins", "Groovy", "Trivy", "SonarQube", "AWS", "Datadog"],
    github: "https://github.com/Divyanshitripathi2/"
  },
  {
    title: "Multi-Region GitOps with ArgoCD",
    description: [
      "Architected global synchronization of Kubernetes clusters across 3 AWS regions.",
      "Developed Helm Charts for standardized application scaffolding.",
      "Eliminated configuration drift using GitOps pull-model patterns."
    ],
    tech: ["ArgoCD", "Kubernetes", "Helm", "Terraform", "GitHub Actions"],
    github: "https://github.com/Divyanshitripathi2/"
  },
  {
    title: "Infrastructure-as-Code (IaC) Governance",
    description: [
      "Created a Terraform module library used by 10+ development teams.",
      "Implemented Policy-as-Code using OPA to prevent insecure infrastructure provisioning.",
      "Reduced cloud spend by 15% through automated 'cleanup' of orphaned resources."
    ],
    tech: ["Terraform", "OPA", "Sentinel", "AWS", "GCP"],
    github: "https://github.com/Divyanshitripathi2/"
  },
  {
    title: "Self-Healing K8s Backup Operator",
    description: [
      "Custom Kubernetes Controller built in Go for automated database snapshots.",
      "Integration with HashiCorp Vault for secure credential injection during restores.",
      "Prometheus metrics exporter for backup status and health monitoring."
    ],
    tech: ["Golang", "Kubernetes SDK", "Vault", "PostgreSQL", "S3"],
    github: "https://github.com/Divyanshitripathi2/"
  }
];
