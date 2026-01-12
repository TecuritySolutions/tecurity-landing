type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'What does Tecurity do?',
    answer:
      'Tecurity is an AI-powered credit intelligence platform that helps banks, NBFCs, and FMCG brands predict credit risk early. We provide NPA prediction for lenders and real-time retailer credit scoring for FMCG distribution.',
  },
  {
    question: 'Who is Tecurity built for?',
    answer:
      'Tecurity is designed for financial institutions (banks, NBFCs, fintech lenders) and FMCG brands or distributors that extend credit to retailers and want to reduce defaults and improve cash flow.',
  },
  {
    question: 'How is Tecurity different from traditional credit scoring tools?',
    answer:
      'Unlike static rule-based systems, Tecurity uses machine learning to analyze behavioral, transactional, sales, and market data in real time. Our models are predictive, explainable, and built for emerging market credit complexity.',
  },
  {
    question: 'Can Tecurity integrate with our existing systems?',
    answer:
      'Yes. Tecurity is built with an API-first architecture and integrates seamlessly with core banking systems, lending platforms, ERPs, and distributor workflows without disrupting existing operations.',
  },
  {
    question: 'Is Tecurity secure and compliant?',
    answer:
      'Security and compliance are core to our platform. We follow enterprise-grade security practices, ensure data privacy, and provide explainable AI outputs suitable for regulated financial environments.',
  },
];
