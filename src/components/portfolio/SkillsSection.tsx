import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, BarChart3, FileText, Users, Layout, Server } from "lucide-react";

const skillCategories = [
  {
    icon: BarChart3,
    title: "Data Analysis",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Excel", "Statistical Analysis", "Data Visualization"],
  },
  {
    icon: Code,
    title: "Programming & Tools",
    skills: ["Python", "SQL", "Java", "JavaScript", "Bash", "Git", "VS Code", "Jupyter", "Google Colab", "Figma", "Trello"],
  },
  {
    "icon": Layout,
    "title": "Frontend Development",
    "skills": ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS", "UI/UX", "Responsive Design"]
  },
  // {
  //   icon: Code,
  //   title: "Frontend & Backend Development",
  //   skills: ["React.js", "HTML", "CSS", "Node.js", "Express.js", "Spring Boot", "MongoDB"],
  // },
  {
    "icon": Server,
    "title": "Backend Development",
    "skills": ["Node.js", "Express", "Spring Boot", "Java", "REST APIs", "MySQL", "MongoDB", "JWT"]
  },
  {
    icon: Brain,
    title: "Machine Learning & NLP",
    skills: ["Scikit-learn", "BERT", "RoBERTa", "spaCy", "NLTK", "Hugging Face", "Kaggle", "LIME/SHAP"],
  },

  // {
  //   icon: FileText,
  //   title: "Research & Documentation",
  //   skills: ["Academic Writing", "Literature Review", "Research Methodology", "Technical Documentation", "Requirements Analysis"],
  // },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Problem Solving", "Critical Thinking", "Team Collaboration", "Communication", "Time Management", "Adaptability"],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="container-wide" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set built through academic projects, research, and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="card-elevated rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
