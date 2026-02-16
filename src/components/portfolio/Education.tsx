import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, GraduationCap, UsersRound } from "lucide-react";

const experiences = [
    {
        role: "Bachelor of Science Honours in Information Technology",
        company: "University of Jaffna ( Vavuniya Campus )",
        period: "2022 – Present",
        responsibilities: [
            "Focused on data analysis,software engineering, cloud computing, and machine learning. Actively involved in various technical projects and leadership roles.",
        ]
    },

    {
        role: "School Education",
        company: "Mahamaya Balika Vidyalaya, Kadawatha",
        period: "2020",
        responsibilities: [
            "Completed Advanced Level examination in Physical Science stream and Ordinaly Level examination.",
        ]
    },

];

export const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="education" className="section-padding bg-muted/30">
            <div className="container-wide" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-accent uppercase tracking-wider">
                        Education
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                        Educational Background
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {/* Active involvement in university clubs and societies, building leadership, technical, and community impact skills. */}
                        Building a strong foundation in IT through university-level learning, with emphasis on data-driven decision making and full-stack development.
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
                                            <GraduationCap className="text-primary" size={20} />
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
