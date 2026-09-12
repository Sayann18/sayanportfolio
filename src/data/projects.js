const projects = [
  {
    id: 'verifai',
    name: 'VerifAI',
    eyebrow: 'AI-Powered Fact Checking',
    description:
      'An AI-powered fact-checking application for analyzing news, articles, and online claims with verification and source-based insights.',
    about:
      'Built to help users evaluate online claims and surface evidence-backed results through an AI-assisted verification workflow.',
    technologies: ['Python', 'AI/ML', 'NLP'],
    githubUrl: 'https://github.com/Sayann18/Verifai',
    image: `${import.meta.env.BASE_URL}images/projects/verifai-preview.png`,
    imageAlt: 'VerifAI landing page preview',
    accent: 'verifai',
  },

  {
    id: 'privacylens-ai',
    name: 'PrivacyLens AI',
    eyebrow: 'AI-Powered Privacy & Security Analysis',
    description:
      'A local-first privacy and website-security analyzer for identifying security, tracking, privacy, and sensitive-content risks.',
    about:
      'Combines a responsive React interface with a FastAPI analysis pipeline, supporting URL analysis, document and image processing, and privacy-focused security checks.',
    technologies: [
      'React',
      'Vite',
      'FastAPI',
      'Python',
      'OCR',
    ],
    githubUrl: 'https://github.com/Sayann18/PrivacyLens-AI',
    image: `${import.meta.env.BASE_URL}images/projects/privacylens-preview.png`,
    imageAlt: 'PrivacyLens AI landing page preview',
    accent: 'privacylens',
  },
]

export default projects