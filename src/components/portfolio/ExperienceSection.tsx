import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, UsersRound } from "lucide-react";

const experiences = [
  {
    role: "Member",
    company: "Leo Club of University of Vavuniya",
    period: "2023 – Present",
    responsibilities: [
      "Organized community service events focused on education and digital literacy",
    ]
  },

  {
    role: "Member",
    company: "IEEE Student Branch of University of Vavuniya",
    period: "2022 – Present",
    responsibilities: [
      "Participated in technical workshops, hackathons, and IEEE-sponsored events.",
    ]
  },

  {
    role: "Member",
    company: "ITCS | Information Technology & Computing Society",
    period: "2022 – 2026",
    responsibilities: [
      "Contributed to IT-related events, workshops, and student projects",
    ]
  },

  {
    role: "Member",
    company: "ZeroPlastic Movement of University of Vavuniya",
    period: "2022 – Present",
    responsibilities: [
      "Promoted environmental sustainability and plastic-free initiatives on campus",
    ]
  },

  {
    role: "Member",
    company: "AIESEC University of Vavuniya",
    period: "2024 – 2025",
    responsibilities: [
      "Organized community service events focused on education and digital literacy",
    ]
  },




];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-wide" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Clubs & Societies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Active involvement in university clubs and societies, building leadership, technical, and community impact skills.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
                  }`}
              >
                {/* Timeline dot */}
                <div className={`hidden md:block absolute top-6 w-3 h-3 rounded-full bg-accent border-2 border-background ${index % 2 === 0 ? '-right-1.5' : '-left-1.5'
                  }`} />

                <div className="card-elevated rounded-xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <UsersRound className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                      <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2"></h4>
                      <ul className="space-y-1.5">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-1.5 shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>


                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
