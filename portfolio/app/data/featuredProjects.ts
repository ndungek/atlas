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
    description: "End-to-End retail data platform: generating realistic POS and inventory data, transforming it with Python ETL pipelines, loading it into a dimensional warehouse, and visualizing insights through interactive Power BI dashboards.",
    fullStory: "Silo brings together realistic retail operations, from procurement to point-of-sale. The platform generates multi-year transactional and inventory data, applies incremental ETL logic in Python, and loads a dimensional warehouse designed for analytical performance. With Power BI dashboards, it provides insight into sales trends, margin health, product performance, and operational efficiency — demonstrating modern data engineering and real-world BI delivery.",
    tech: ["Python", "Pandas", "Power BI", "PostgreSQL", "ETL", "Data Modeling"],
    image: "/images/silo.jpg",
    github: "https://github.com/ndungek/silo",
    external: "#",
    featured: true
  }
];