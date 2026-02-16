import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";


const certifications = [
  {
    title: "What is Data Science?",
    issuer: "IBM",
    date: "2024",
    credential: "View Certificate",
    link: "https://www.coursera.org/account/accomplishments/verify/G9ZDXIOB1VLA?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Introduction to Data Analytics",
    issuer: "IBM",
    date: "2024",
    credential: "View Certificate",
    link: "https://coursera.org/share/801da8f2f982b1fc6ee4db6653bc6c68",
  },
  {
    title: "Process Data from Dirty to Clean",
    issuer: "Google",
    date: "2024",
    credential: "View Certificate",
    link: "https://www.coursera.org/account/accomplishments/verify/QZNYA3DQUWW9?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Certificate in Information Communication Technology",
    issuer: "Nenasala Sri Lanka",
    date: "2021",
  },
  {
    title: "Standard Course of HSK1",
    issuer: "Confucius Institute University of Colombo ",
    date: "2022",
  },
  {
    title: "Standard Course of HSK2",
    issuer: "Confucius Institute University of Colombo ",
    date: "2022",
  },
];

const workshops = [
  "Explainable AI Workshop – University Research Symposium 2024",
  "Hugging Face Transformers Hands-on Training – Online Workshop 2024",
  "Data Visualization Best Practices – Industry Webinar Series 2023",
  "Agile Project Management Fundamentals – University Workshop 2023",
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding">
      <div className="container-wide" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Certifications
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Continuous Learning
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and training programs that complement my academic foundation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="card-elevated rounded-xl p-5 group"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Award className="text-accent" size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground text-sm leading-snug mb-1 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{cert.date}</span>
                    {/* <a
                      href="#"
                      className="text-xs text-accent hover:underline flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    > */}
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:underline flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >

                      {cert.credential}
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="card-elevated rounded-xl p-6"
        >
          <h3 className="font-semibold text-foreground mb-4">Workshops & Training</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {workshops.map((workshop, index) => (
              <div key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                {workshop}
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};
