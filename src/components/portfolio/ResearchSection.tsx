import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, FlaskConical, Brain } from "lucide-react";

const researchItems = [
  // {
  //   title: "Comparative Analysis of Transformer Models for Sentiment Classification",
  //   type: "Research Proposal",
  //   description: "Investigating the performance differences between BERT, RoBERTa, and DistilBERT on domain-specific sentiment analysis tasks with limited training data.",
  //   methodology: "Transfer learning with fine-tuning, cross-domain evaluation, ablation studies on preprocessing techniques.",
  //   models: ["BERT", "RoBERTa", "DistilBERT"],
  //   xaiTechniques: ["Attention Visualization", "LIME", "Integrated Gradients"],
  //   status: "In Progress",
  //   icon: BookOpen,
  // },
  // {
  //   title: "Explainable Credit Risk Assessment Using Machine Learning",
  //   type: "Academic Paper",
  //   description: "Developing interpretable ML models for credit scoring with regulatory-compliant explanations using post-hoc XAI methods.",
  //   methodology: "Ensemble methods, SHAP analysis, counterfactual explanations, feature attribution comparison.",
  //   models: ["Logistic Regression", "XGBoost", "LightGBM"],
  //   xaiTechniques: ["SHAP", "LIME", "Counterfactual Explanations"],
  //   status: "Submitted",
  //   icon: FlaskConical,
  // },
  // {
  //   title: "Multi-Label Text Classification for Academic Document Routing",
  //   type: "Thesis Project",
  //   description: "Building an automated system to classify research documents into multiple categories for institutional knowledge management.",
  //   methodology: "Multi-label classification, hierarchical attention networks, domain adaptation.",
  //   models: ["RoBERTa", "Hierarchical Attention Network"],
  //   xaiTechniques: ["Attention Weights", "SHAP Text Explainer"],
  //   status: "Ongoing",
  //   icon: Brain,
  // },
  {
    title: "Depression Detection in Multi-Platform Social Media Texts Using Classical Machine Learning and Transformer-Based Models",
    type: "Academic Research",
    description: "Developing and evaluating models for binary classification of depression using text data from Facebook, Twitter, and Reddit. The study compares classical machine learning with transformer-based approaches to enhance cross-platform generalizability and interpretability for early mental health intervention.",
    methodology: "Data collection from Kaggle and HuggingFace, text preprocessing (cleaning, normalization, tokenization), TF-IDF feature extraction, cross-platform train-test evaluation (4x4 matrix), hyperparameter tuning with cross-validation, class imbalance handling, and XAI analysis using SHAP/LIME.",
    models: ["Logistic Regression", "BERT", "RoBERTa"],
    xaiTechniques: ["LR Coefficients", "SHAP", "LIME"],
    status: "In Progress",
    icon: BookOpen,
  },
];

export const ResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="section-padding">
      <div className="container-wide" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Research
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Academic Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Research contributions focusing on Machine Learning, Explainable AI and Natural Language Processing applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {researchItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="card-elevated rounded-xl p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <item.icon className="text-accent" size={20} />
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${item.status === 'Submitted'
                  ? 'bg-green-100 text-green-700'
                  : item.status === 'In Progress'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-blue-100 text-blue-700'
                  }`}>
                  {item.status}
                </span>
              </div>

              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                {item.type}
              </span>

              <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {item.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-border">
                <div>
                  <span className="text-xs font-semibold text-foreground">Models</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {item.models.map((model) => (
                      <span key={model} className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-semibold text-foreground">XAI Techniques</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {item.xaiTechniques.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-xs rounded bg-accent/10 text-accent">
                        {tech}
                      </span>
                    ))}
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