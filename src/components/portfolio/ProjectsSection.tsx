import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [

  {
    "title": "Customer Churn Prediction & BI Dashboard",
    "problem": "High churn rate in telecom causing revenue leakage and high acquisition costs.",
    "objective": "Predict churn risk, identify key drivers, and deliver interactive Power BI dashboard for retention strategy.",
    "technologies": ["Python", "Scikit-learn", "Pandas", "Power BI", "Random Forest", "Logistic Regression"],
    "methodology": ["Data cleaning & feature engineering", "EDA", "Binary classification modeling", "Feature importance", "Interactive BI dashboard with slicers & KPIs"],
    "outcomes": [
      "Built churn prediction model (Random Forest > Logistic Regression)",
      "Top drivers: month-to-month contract, short tenure, high monthly charges",
      "Interactive Power BI dashboard: KPIs, trend charts, high-risk table, multi-dimensional filtering",
      "Actionable recommendations for retention (long-term contracts, pricing/discount strategies)"
    ],
    "role": "End-to-end Data Analyst (data preparation, EDA, modeling, visualization, insight generation, dashboard design)",
    "link": "https://github.com/DilmyPerera/Customer-Churn-Prediction-with-Machine-Learning-Power-BI.git",
    "featured": true
  },
  {
    "title": "Personal Budget Tracker",
    "problem": "Difficulty in tracking daily expenses, categorizing spending, and staying within monthly budget limits.",
    "objective": "Create a command-line Python tool to record categorized expenses, track monthly budget, and calculate daily spending limits with persistent storage.",
    "technologies": [
      "Python",
      "CSV",
      "OOP",
      "CLI Development",
      "datetime"
    ],
    "methodology": "Developed a modular CLI application with OOP design, CSV persistence, interactive category selection, and automated budget & daily spending calculations.",
    "outcomes": [
      "Expense recording & categorization into 8 categories",
      "Persistent data storage in CSV",
      "Monthly budget tracking & remaining balance",
      "Daily spending limit calculation",
      "Category-wise expense summary",
      "Clean, validated command-line interface"
    ],
    "role": "Complete design, implementation, testing, and documentation",
    "link": "https://github.com/DilmyPerera/Personal-Budget-Tracker.git",
    "featured": true
  },
  {
    "title": "Titanic Survival Exploratory Data Analysis",
    "problem": "Uncovering patterns in Titanic passenger data to understand survival factors amid historical disaster.",
    "objective": "Conduct EDA on Titanic dataset using Python to identify key survival influencers via preprocessing, stats, and visualizations.",
    "technologies": [
      "Python",
      "Jupyter Notebook",
      "Pandas",
      "Seaborn",
      "Matplotlib",
      "EDA"
    ],
    "methodology": "Performed data cleaning (missing values, encoding), univariate & multivariate EDA, survival rate analysis across gender/class/age/fare/embarkation using statistical summaries and Seaborn visualizations in Jupyter.",
    "outcomes": [
      "Women survived at ~74% vs men ~19%",
      "1st class survival ~63%, 3rd class ~24%",
      "Children & Cherbourg passengers showed higher survival",
      "Created insightful plots: bar charts, boxplots, heatmaps",
      "Cleaned & analyzed classic Kaggle Titanic dataset"
    ],
    "role": "Data Analyst (solo project) - Managed complete workflow - data loading, cleaning, feature engineering, statistical analysis, visualization creation, insight derivation, and clear notebook documentation",
    "link": "https://github.com/DilmyPerera/Titanic-Data-Analysis-with-Jupyter-Notebook.git",
    "featured": true
  },

  {
    "title": "Efficient Campus Navigation System – University of Vavuniya",
    "problem": "Complex campus layout at University of Vavuniya causes navigation difficulties for students, staff, and visitors.",
    "objective": "Build a Python desktop app using Dijkstra's algorithm to find and visualize shortest paths on an interactive campus map.",
    "technologies": [
      "Python",
      "Dijkstra's Algorithm",
      "Tkinter GUI",
      "Pillow (PIL)",
      "heapq",
      "Graph Modeling"
    ],
    "methodology": "Represented campus as weighted graph → implemented Dijkstra with priority queue → created Tkinter interface with map image, input fields, path drawing (red line), and distance output.",
    "outcomes": [
      "Shortest path computation & visual red-line routing on campus map",
      "Source-to-destination distance & step-by-step point display",
      "User-friendly GUI for easy navigation",
      "Scalable for emergency routes & campus expansions",
      "Practical graph algorithm application in education setting"
    ],
    "role": "GUI design, map integration, testing & documentation",
    "link": "https://github.com/DilmyPerera/Efficient-Campus-Navigation.git",
    "featured": true
  },

  {
    "title": "Mahinda Plants E-commerce Website",
    "problem": "Limited online presence for local plant & gardening store, making it hard for customers to browse and buy conveniently.",
    "objective": "Create a full-stack e-commerce platform with Spring Boot backend + React frontend for online plant shopping, secure payments (planned), and admin management.",
    "technologies": [
      "Spring Boot",
      "Java",
      "Spring Security + JWT",
      "Spring Data JPA",
      "MySQL",
      "AWS S3",
      "React",
      "REST APIs",
      "Maven"
    ],
    "methodology": "Built secure RESTful backend with Spring Boot, JWT auth, product/order management, AWS S3 image storage, and MySQL persistence. Designed API-first approach with Postman testing collection; prepared for React frontend integration.",
    "outcomes": [
      "Secure authentication & user management",
      "Product catalog & image upload to cloud",
      "Shopping cart & order processing APIs",
      "Admin-supporting endpoints",
      "MySQL-backed data persistence",
      "Comprehensive Postman API collection"
    ],
    "role": "Sole full-stack developer – backend architecture, implementation, security, cloud integration, API design & testing",
    "link": "https://github.com/DilmyPerera/MahindaPlants.git",
    "featured": true
  },
  {
    "title": "Taskflow Task Management System",
    "problem": "Fragmented task tracking, poor team collaboration, and inefficient workflows leading to missed deadlines and reduced productivity in individuals and organizations.",
    "objective": "Build a comprehensive full-stack task management platform to organize tasks, enable real-time collaboration, streamline project workflows, and improve overall productivity through an intuitive board-list-card interface.",
    "technologies": [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "React",
      "Redux",
      "JWT (jsonwebtoken)",
      "bcryptjs"
    ],
    "methodology": "Taskflow was developed using a full-stack MERN-inspired approach, implementing RESTful APIs with Node.js, Express, and MongoDB for secure JWT authentication and CRUD operations on boards, lists, cards, members, labels, attachments, checklists, due dates, and comments, while building a responsive, drag-and-drop React frontend with Redux Toolkit state management, Material-UI/styled-components styling, and react-beautiful-dnd for intuitive Kanban-style task organization.",
    "outcomes": [
      "Developed a Kanban-style task management application with boards, lists, and draggable cards",
      "Implemented core features: user registration/login (admin-created accounts), board/list/card CRUD, member assignment, labels, due dates, checklists, attachments, and task comments",
      "Enabled team collaboration through member management and real-time-like task updates via API",
      "Provided secure authentication with JWT and password hashing",
      "Created a modern, interactive frontend with drag-and-drop functionality and rich task details view",
      "Successfully deployed locally with separate backend/frontend servers and MongoDB integration",
      "Delivered a productivity tool suitable for individuals, students, and teams to replace scattered task tracking methods"
    ],
    "role": "Backend Developer — Implemented, secured, and thoroughly tested the complete RESTful API for a full-stack Kanban-style task management system using Node.js, Express, MongoDB, and JWT authentication",
    "link": "https://github.com/SGopinath89/IT22242024taskflow.git",
    "featured": true
  },

  {
    "title": "ElderCare Connect – Elderly Safety & Care PWA",
    "problem": "Elderly people living alone face high risks of medical emergencies, falls, isolation, and delayed help due to lack of real-time monitoring and communication.",
    "objective": "Develop a progressive web application that enhances safety, health monitoring, emergency response, and social connection for elderly individuals while providing real-time visibility to caregivers.",
    "technologies": [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "WebSocket",
      "REST API",
      "Geolocation API",
      "Next.js "
    ],
    "methodology": "Designed and developed secure backend architecture using Node.js + Express + MongoDB, implemented complete RESTful APIs with JWT authentication, built WebSocket-based real-time communication system for chat & emergency notifications, and performed extensive API testing & documentation using Postman.",
    "outcomes": [
      "Built complete secure backend with full user, caregiver, and role-based authentication system",
      "Developed and tested REST APIs for health data, emergency alerts, location sharing, medication reminders, and daily check-ins",
      "Implemented real-time notification & chat infrastructure using WebSocket",
      "Created comprehensive API documentation and complete Postman collection",
      "Ensured proper data modeling and secure handling of sensitive health information",
      "Provided solid, tested API foundation for the frontend team to build elderly-friendly interface"
    ],
    "role": "Backend Developer — Designed, implemented, secured, tested, and documented the complete backend system and real-time APIs for the ElderCare Connect progressive web application.",
    "link": "https://github.com/chamoindrejith/ElderCareConnect.git",
    "featured": true
  },

  {
    "title": "Student-Care-App – React Native Student Portal Mobile App",
    "problem": "Students need a convenient mobile way to view profiles, courses, subjects, and track academic performance without relying on desktop portals.",
    "objective": "Create a React Native app with login, profile, course/subject views, average marks calculation, and bottom-tab navigation.",
    "technologies": [
      "React Native",
      "Expo",
      "React Navigation",
      "React Native Paper",
      "Vector Icons",
      "JavaScript"
    ],
    "methodology": "Built Expo-based React Native app with bottom-tab navigation, Material UI via Paper, mock DB for student data, secure login, dynamic average marks calc, and modular screens (Login/Profile/Course/Subjects).",
    "outcomes": [
      "Secure student login & personalized profile display",
      "Course & subjects overview with marks and auto-average",
      "Intuitive bottom-tab navigation",
      "Modern, responsive mobile UI",
      "Easy Expo dev & testing workflow"
    ],
    "role": "Sole developer – full app development, UI/UX, logic implementation, data handling & documentation",
    "link": "https://github.com/DilmyPerera/Student-Care-App.git",
    "featured": false
  },


];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-wide" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of academic and technical projects showcasing my skills in
            machine learning, data analysis, and research-driven development.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`card-elevated rounded-2xl overflow-hidden ${project.featured ? 'ring-1 ring-accent/20' : ''}`}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {project.featured && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                      Featured
                    </span>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Problem</h4>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Objective</h4>
                      <p className="text-sm text-muted-foreground">{project.objective}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Methodology</h4>
                      <p className="text-sm text-muted-foreground">{project.methodology}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Outcomes</h4>
                      <ul className="space-y-1.5">
                        {project.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="text-accent shrink-0 mt-0.5" size={14} />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">My Role</h4>
                      <p className="text-sm text-muted-foreground">{project.role}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-border">
                  <div className="flex flex-wrap gap-2 flex-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/5 text-primary border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Github size={16} />
                          Code
                        </Button>
                      </a>
                    )}
                    {/* <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink size={16} />
                      Demo
                    </Button> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
