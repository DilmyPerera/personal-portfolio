import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Lightbulb } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: GraduationCap,
      title: "Academic Background",
      description: "Final-year BSc (Hons) in Information Technology student at University of Jaffna, GPA 3.45/4.00. Strong foundation in data analytics, data science, machine learning, database systems, statistics, software engineering, and business intelligence."
    },
    {
      icon: Target,
      title: "Focus Areas",
      description: "Data Analytics & Data Science (Power BI dashboards, SQL/Python modeling, predictive insights), Machine Learning & Statistics, Full-Stack Development (MERN stack, REST APIs, responsive applications)",
    },
    {
      icon: Lightbulb,
      title: "Career Goals",
      description: "Seeking an internship in data analytics, data science, business analysis, or full-stack development to gain real-world experience, apply analytical and development skills to business problems, and transition into a professional IT role.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-wide" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            {/* Passionate About Intelligent Systems  */}
            Data-Driven Insights & Scalable Web Development
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {/* I am a results-driven IT undergraduate with a deep interest in leveraging machine learning
            and text analytics to solve complex problems. My academic journey has equipped me with strong
            analytical skills, research capabilities, and hands-on experience in building data-driven applications. */}
            I am a motivated final-year IT undergraduate passionate about turning data into actionable business insights and building intelligent, user-focused applications. My academic and project experience has equipped me with strong skills in data analytics, machine learning, text analytics, business intelligence, and full-stack development — ready to contribute to real-world data-driven and software projects during my internship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="card-elevated rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <card.icon className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
