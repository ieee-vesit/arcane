export interface FAQItem {
  question: string;
  answer: string[];
  contact?: string;
}

export const faqData: FAQItem[] = [
  {
    question: "What is ARCANE?",
    answer: [
      "ARCANE is a 24-hour intra-level online hackathon organized by IEEE-VESIT.",
      "It is designed to challenge students to build impactful solutions for pressing global issues."
    ],
  },
  {
    question: "What are the core domains for this hackathon?",
    answer: [
      "The hackathon is structured around three primary domains: Healthcare, Education, and Sustainability."
    ],
  },
  {
    question: "How are the problem statements structured?",
    answer: [
      "Each domain will feature three unique problem statements, making a total of nine challenges.",
      "Participants must choose and work on one specific problem statement."
    ],
  },
  {
    question: "When will the problem statements be released?",
    answer: [
      "To ensure complete fairness, all nine problem statements will be revealed simultaneously at the official kickoff."
    ],
  },
  {
    question: "Who can participate in ARCANE?",
    answer: [
      "ARCANE is open to any current VESIT student, irrespective of their year of study.",
      "Students from First Year (FE), Second Year (SE), and Third Year (TE) are all eligible to participate."
    ],
  },
  {
    question: "What is the required team size?",
    answer: [
      "Teams must consist of a minimum of 2 members and a maximum of 4 members.",
      "Solo participation is not permitted for this event."
    ],
  },
  {
    question: "Can team members be from different branches?",
    answer: [
      "Yes, interdisciplinary teams are encouraged to promote diverse perspectives and innovative solutions."
    ],
  },
  {
    question: "Can I change my team members after registration?",
    answer: [
      "No, team composition cannot be changed once the registration period has ended."
    ],
  },
  {
    question: "Is there a specific tech stack I must use?",
    answer: [
      "No specific tech stack is mandated.",
      "Teams are free to use any technology, framework, or language such as Python, MERN stack, Flutter, or AI/ML models."
    ],
  },
  {
    question: "Can we use pre-existing code?",
    answer: [
      "All core development must take place during the 24-hour hackathon window.",
      "Use of open-source libraries and APIs is allowed, but projects built prior to the event will lead to disqualification."
    ],
  },
  {
    question: "How do we submit our work?",
    answer: [
      "Teams must submit their source code via a GitHub repository.",
      "A 3-minute video demonstration of the working prototype must also be submitted through the official submission portal."
    ],
  },
  {
    question: "What happens if we miss the submission deadline?",
    answer: [
      "The submission portal will close strictly at the 24-hour mark.",
      "Late submissions will not be accepted under any circumstances, so teams are advised to begin submission at least 30 minutes early."
    ],
  },
  {
    question: "How will the winners be decided?",
    answer: [
      "Projects will be judged based on Innovation, Technical Complexity, UI/UX Design, and Practicality.",
      "Each project will be evaluated on how effectively it addresses the chosen problem statement."
    ],
  },
  {
    question: "Will there be any guidance during the hackathon?",
    answer: [
      "Yes, mentor guidance and doubt clarification will be provided through scheduled Google Meet sessions at specific times."
    ],
  },
  {
    question: "Is there an evaluation round?",
    answer: [
      "Yes, there will be mid-way progress checks and a final judging round.",
      "Teams may be required to present their solution online to a panel of experts."
    ],
  },
  {
    question: "Where will the hackathon take place?",
    answer: [
      "ARCANE is a completely online hackathon.",
      "All ceremonies, mentoring sessions, evaluations, and submissions will take place on the official event platform."
    ],
  },
  {
    question: "Will participants receive certificates?",
    answer: [
      "Yes, all teams that successfully submit a working project will receive a Certificate of Participation from IEEE-VESIT.",
      "Winners will receive Certificates of Excellence along with prizes."
    ],
  },
  {
    question: "Who do I contact for help during the event?",
    answer: [
      "For any queries during the hackathon, participants can reach out to the PR Heads (contacts mentioned).",
      "Support will be available through the designated WhatsApp help groups."
    ],
    contact: "Udayan Kundu: +91 91363 44051 | Unnati Singh: +91 80971 75130",
  },
];
