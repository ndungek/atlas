export const featuredProjects = [
  {
    title: "PowerPesa",
    subtitle: "Electricity Usage Tracker",
    description: "Track and analyze electricity token usage using real SMS data from Kenya Power (KPLC). Built to help Kenyans understand their power consumption without digging through dozens of SMS messages.",
    fullStory: "Imagine this: It's the end of the month. You've just bought electricity tokens via M-Pesa. Again. You scroll through your SMS inbox trying to find the last few tokens — wondering how many units you got, how much you paid, and whether you're being charged more than before. PowerPesa was born from that frustration.",
    tech: ["Django", "SQLite", "HTML", "TailwindCSS"],
    image: "/images/powerpesa.png", 
    github: "https://github.com/ndungek/powerpesa",
    external: "https://powerpesa.app",
    featured: true
  },
  {
    title: "Balance",
    subtitle: "Personal Finance Tracker",
    description: "Simple, transparent money tracking for everyday Kenyans. Track MPESA transactions, bank transfers, and expenses effortlessly — no spreadsheets needed.",
    fullStory: "Many Kenyans live paycheck to paycheck, relying heavily on MPESA for daily expenses. At the end of the month, the question is always: 'Where did my money go?' Balance was born to help people take back control of their money and spend with intention.",
    tech: ["Fast API", "PostgreSQL", "JWT", "React", "TailwindCSS"],
    image: "/images/balance.png",
    github: "https://github.com/ndungek/balance",
    external: "https://balance.app",
    featured: true
  },
  {
    title: "Silo",
    subtitle: "Retail Data ETL & Analytics Pipeline",
    description: "End-to-end ETL pipeline showcasing real-world retail data analytics workflow. From API extraction to Power BI dashboards — demonstrating production-grade data engineering with clean architecture and modular design.",
    fullStory: "A simple yet powerful ETL pipeline that simulates real-world retail analytics. Silo demonstrates how to collect data from APIs, clean and transform it using Python, and build interactive dashboards — perfect for showcasing data engineering and BI skills.",
    tech: ["Python", "Pandas", "Power BI", "REST APIs", "ETL", "Data Modeling"],
    image: "/images/silo.png",
    github: "https://github.com/ndungek/silo",
    external: "#",
    featured: true
  }
];