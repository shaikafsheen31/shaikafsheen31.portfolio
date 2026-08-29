/* ============================================================
   PORTFOLIO CONTENT — edit anything here to update the site.
   Save + refresh, no other files need touching.
   ============================================================ */

const NAME = "Shaik Afsheen";
const EMAIL = "shaikafsheen58@gmail.com";
const GITHUB_URL = "https://github.com/shaikafsheen31";
const LINKEDIN_URL = "https://www.linkedin.com/in/shaik-afsheen";
const RESUME_URL = "assets/Shaik_Afsheen_Resume.pdf";

const ROLE_TAG = "AI/ML ENGINEER \u2022 DATA ANALYST";

const HERO = {
  heading: "I build intelligent systems that solve real problems.",
  sub: "I'm Shaik Afsheen, an AI/ML Engineer and Data Analyst focused on Machine Learning, AI systems, Data Analytics, and intelligent software applications. I enjoy turning complex problems into practical, usable products."
};

const ABOUT = {
  body: "Hi, I'm Shaik Afsheen \u2014 an aspiring AI & ML Engineer and Data Analyst, and a B.Tech student at Dayananda Sagar University, Bengaluru. I like turning ideas into real, working systems: from explainable ML models to a retrieval-augmented learning platform. I'm passionate about continuous learning, innovation, and problem-solving, and I'm currently a fresher looking for internship and full-time opportunities to learn, contribute, and grow.",
  focus: ["Machine Learning", "AI Applications", "Data Analytics", "LLM / RAG Systems", "Data Analyst"]
};

// SVM, KNN, SHAP, LIME, Seaborn, and Scikit-learn removed from the general
// skill set (they still appear under individual projects where they were
// actually used). "Data Analyst" added per request.
const SKILLS = [
  { label: "Programming", items: ["Python", "SQL", "Data Structures & Algorithms"] },
  { label: "AI / ML", items: ["Machine Learning", "Deep Learning", "Classification", "XGBoost", "Random Forest", "Logistic Regression"] },
  { label: "AI / LLM", items: ["Retrieval-Augmented Generation (RAG)", "Embeddings", "Local LLMs (Ollama)"] },
  { label: "Data", items: ["Data Analyst", "Pandas", "NumPy", "Power BI", "Tableau", "Excel", "Matplotlib"] },
  { label: "Tools", items: ["Git", "GitHub", "Jupyter Notebook", "Streamlit"] }
];

// Real confusion-matrix numbers from the E. coli project: TN=1346, FP=13, FN=105, TP=78
const CM = { tn: 1346, fp: 13, fn: 105, tp: 78 };
const CM_TOTAL = CM.tn + CM.fp + CM.fn + CM.tp;
const ACCURACY = ((CM.tn + CM.tp) / CM_TOTAL) * 100;
const PRECISION = (CM.tp / (CM.tp + CM.fp)) * 100;
const RECALL = (CM.tp / (CM.tp + CM.fn)) * 100;
const ROC_AUC = 0.8588;

const PROJECTS = [
  {
    number: "01",
    title: "LoanSense AI",
    subtitle: "Explainable Loan Approval Prediction & Risk Assessment",
    highlight: "ML + Explainable AI",
    description: "An AI-based loan approval system that assesses applicant financial data \u2014 income, CIBIL score, employment status, assets, and loan amount \u2014 to automate eligibility decisions, with every prediction explained rather than left as a black box.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Random Forest", "Logistic Regression", "SHAP", "LIME", "Streamlit"],
    features: [
      "Automated eligibility assessment from applicant financial & demographic data",
      "Preprocessing, feature selection, model training, and evaluation across multiple classifiers",
      "SHAP and LIME integration for global and instance-level explanations",
      "Interactive web app surfacing approval status, risk level, and recommendations"
    ],
    detail: {
      problem: "Loan approval decisions are often opaque \u2014 applicants and even loan officers can't easily see why a model approved or rejected a case.",
      solution: "Built a classification pipeline that predicts approval outcomes and pairs every prediction with an explanation of which factors drove it.",
      how: "Applicant data is preprocessed and fed through Logistic Regression, Random Forest, and XGBoost classifiers. SHAP values explain global feature influence; LIME explains individual predictions. Results are served through an interactive web app.",
      challenges: "Balancing model accuracy with interpretability \u2014 more complex models like XGBoost perform well but need extra work to explain clearly.",
      learned: "How to make ML systems trustworthy, not just accurate \u2014 explainability is a design constraint, not an afterthought."
    },
    github: GITHUB_URL,
    live: null
  },
  {
    number: "02",
    title: "E. coli Antibiotic Resistance Prediction",
    subtitle: "Supervised Learning-Based Approach for Early Detection and Prognosis of Antibiotic Resistance in E. coli Pathogens",
    highlight: "Research \u00b7 ICONAT 2026",
    description: "Compared five classification algorithms \u2014 Logistic Regression, Random Forest, XGBoost, SVM, and KNN \u2014 with cross-validation to predict antibiotic resistance in E. coli pathogens, evaluated via accuracy, F1-score, and ROC-AUC. Accepted for presentation at ICONAT 2026.",
    tech: ["Python", "Scikit-learn", "Logistic Regression", "Random Forest", "XGBoost", "SVM", "KNN", "Cross-Validation"],
    features: [
      "Compared five classification algorithms with cross-validation for robust evaluation",
      "0.86 ROC-AUC and ~92% accuracy across 1,542 evaluated records",
      "Feature-importance analysis identified measurement value as the dominant predictor",
      "Accepted for presentation at ICONAT 2026, a peer-reviewed international conference"
    ],
    detail: {
      problem: "Antibiotic resistance is a growing clinical threat, and lab testing data isn't routinely used to flag it early.",
      solution: "A supervised ML pipeline that classifies E. coli strains as susceptible or resistant from structured lab testing data.",
      how: "Five classifiers \u2014 Logistic Regression, Random Forest, XGBoost, SVM, and KNN \u2014 were trained and cross-validated on measurement values, testing standards, and lab typing method features, then compared on accuracy, F1-score, and ROC-AUC.",
      challenges: "Handling the imbalance between susceptible and resistant cases while keeping recall high enough to be clinically useful.",
      learned: "How to take a research problem from raw lab data through rigorous model comparison to a peer-reviewed result."
    },
    results: {
      accuracy: `${ACCURACY.toFixed(1)}%`,
      rocAuc: ROC_AUC.toFixed(4),
      precision: `${PRECISION.toFixed(1)}%`,
      recall: `${RECALL.toFixed(1)}%`,
      cm: CM,
      note: "Feature-importance analysis showed \u201CMeasurement Value\u201D as the dominant predictor, well ahead of secondary features such as testing standard and laboratory typing method."
    },
    github: GITHUB_URL,
    live: null
  },
  {
    number: "03",
    title: "Cognify",
    subtitle: "AI Learning Intelligence Platform",
    highlight: "RAG + Local LLM",
    status: "In Progress",
    description: "An AI-powered learning platform that turns uploaded study material into an interactive learning experience \u2014 document processing, embeddings, retrieval, and a locally hosted LLM working together.",
    tech: ["Python", "Streamlit", "RAG", "Embeddings", "Ollama (Qwen2.5)", "Vector Search", "NLP"],
    features: [
      "Working RAG pipeline \u2014 PDF ingestion, text extraction, chunking, embeddings",
      "Local LLM (Ollama, Qwen2.5) powering an AI tutor with conversation memory",
      "Automatic practice-question generation from uploaded material",
      "Multi-section Streamlit app: Dashboard, AI Tutor, Practice, Analytics"
    ],
    detail: {
      problem: "Study material sits passively in PDFs \u2014 there's no way to ask it questions or generate practice from it.",
      solution: "A retrieval-augmented platform that treats uploaded material as a knowledge base a local LLM can reason over.",
      how: "Documents are chunked and embedded, then retrieved by relevance before being passed to a locally hosted LLM (Ollama, Qwen2.5) for tutoring and practice-question generation, with conversation memory maintained across a session.",
      challenges: "Getting the retrieval step to reliably distinguish between questions answerable from the material versus general knowledge.",
      learned: "How RAG systems are actually assembled end-to-end \u2014 chunking strategy and retrieval quality matter as much as the LLM itself."
    },
    github: GITHUB_URL,
    live: null
  }
];

const TIMELINE = [
  { year: "2021", title: "Completed Class X", detail: "Sree Bhuvana Vidyalayam High School \u2014 95.00%" },
  { year: "2023", title: "Completed Class XII", detail: "Shri Gnanambica Junior College \u2014 86.00%" },
  { year: "2023", title: "Started B.Tech, CSE (AI & ML)", detail: "Dayananda Sagar University, Bengaluru" },
  { year: "2026", title: "Certifications", detail: "Machine Learning Using Python (Simplilearn) \u00b7 Foundations of Deep Learning (NPTEL) \u00b7 Data Analytics Essentials (Cisco) \u00b7 SQL & Relational Databases 101 (Cognitive Class)" },
  { year: "2026", title: "Research paper accepted", detail: "ICONAT 2026 \u2014 Supervised Learning-Based Approach for Early Detection and Prognosis of Antibiotic Resistance in E. coli Pathogens" },
  { year: "2027", title: "B.Tech Graduation (Expected)", detail: "Dayananda Sagar University, Bengaluru" }
];

const HIGHLIGHTS = [
  { value: "3", label: "AI/ML & Data Projects" },
  { value: "1", label: "Research Paper (ICONAT 2026)" },
  { value: "10+", label: "Tools & Technologies" },
  { value: "2027", label: "Expected Graduation" }
];
