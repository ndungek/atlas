export const featuredProjects = [
    {
    title: "PowerPesa",
    subtitle: "Electricity Usage Analyzer",
    description: "This app is designed to parse KPLC token SMS messages and transform them into detailed electricity consumption reports with cost tracking and usage trends.",
    fullStory: `PowerPesa is designed to help Kenyan households understand their electricity spending. It automatically extracts token purchase data from SMS messages, calculates unit costs, and displays consumption patterns across weeks and months. Users can identify high-usage periods and make informed decisions about their electricity budget.`,
    tech: ["Django", "SQLite", "TailwindCSS"],
    image: "/powerpesa.jpg",
    github: "https://github.com/ndungek/powerpesa",
    external: "#",
    featured: true
  },
  {
    title: "Balance",
    subtitle: "Personal Finance Tracker",
    description: "This app is designed to help MPESA users track expenses, set category-based budgets, and gain real-time visibility into their spending habits.",
    fullStory: `Balance is designed to solve the problem of mobile money transaction chaos. Users upload their MPESA statements, and the system automatically categorizes each transaction, calculates monthly expenses, and compares spending against set budgets. Visual dashboards show spending by category, monthly trends, and budget utilization—making it easy to control finances without manual spreadsheet work.`,
    tech: ["FastAPI", "React", "PostgreSQL", "JWT Auth"],
    image: "/balance.jpg",
    github: "https://github.com/ndungek/balance",
    external: "#",
    featured: true
  },

  {
    title: "Silo",
    subtitle: "Retail ETL & Analytics Pipeline",
    description: "This app is designed to demonstrate end-to-end data engineering skills through a complete retail analytics system—from synthetic data generation to dimensional modeling and BI reporting.",
    fullStory: `Silo is designed to replicate a production retail data environment. It generates realistic point-of-sale transactions across multiple years, processes them through Python ETL pipelines with incremental loading and slowly changing dimensions, stores them in a star schema data warehouse, and powers Power BI dashboards that track sales performance, product margins, and seasonal trends. The project showcases the full data engineering lifecycle from raw data to business insights.`,
    tech: ["Python", "Pandas", "Power BI", "PostgreSQL", "ETL"],
    image: "/silo.jpg",
    github: "https://github.com/ndungek/silo",
    external: "#",
    featured: true
  }
];