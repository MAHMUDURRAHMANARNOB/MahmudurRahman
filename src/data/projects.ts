import { Project } from '../types/project';
import rishoGuruImg from '../assets/images/risho_guru/Risho Guru.png';


export const projects: Project[] = [
  {
    id: '1',
    slug: 'risho-guru',
    title: 'Risho Guru',
    description: 'An AI-powered speech recognition application designed for language learning, providing real-time feedback and personalized learning paths for users. The application leverages advanced machine learning algorithms to analyze pronunciation and offer instant corrections.',
    shortDescription: 'AI-powered speech recognition app for language learning with real-time feedback.',
    challenge: 'The main challenge was creating a reliable speech recognition system that could work across different accents and provide accurate, real-time feedback. Additionally, we needed to ensure the app could function offline while maintaining high accuracy.',
    solution: 'We implemented a hybrid approach using TensorFlow Lite for on-device processing and cloud-based advanced analysis. This allowed us to provide instant feedback while maintaining high accuracy and supporting offline functionality.',
    implementation: 'The application was built using Flutter for cross-platform compatibility. We utilized TensorFlow Lite for on-device speech processing and Firebase for cloud functions and user data management. The architecture follows clean code principles with a robust state management system.',
    tech: ['Flutter', 'TensorFlow', 'Firebase', 'Cloud Functions'],
    images: {
      main: rishoGuruImg,
      gallery: [
        'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80'
      ]
    },
    timeline: '2022 - Present',
    features: [
      'Trained with curriculums from Bangladesh, India, UK, USA, and Canada, ensuring comprehensive coverage of educational content for class 1-12 with MCQ questions for every topic.',
      'Step-by-step math problem solving',
      'Note preparation for any subject',
      'Essay, paragraph, and comprehension writing assistance',
      'Proofreading and suggesting improvements for written work',
      'Evaluating questions and providing scores, acting as a virtual teacher',
      'Solving accounting-related problems with ease',
      'Providing assignment writing support with proper references',
      'Writing computer programs for ICT and computer science subjects',
      'Offering mental health and psychological support for students in need',
    ],
    achievements: [
      'Improved app crash-free rate to 99.9%',
      'Increased user engagement by 45%',
      'Featured in Google Play Store\'s Editor\'s Choice',
      '100,000+ active users'
    ],
    links: {
      github: 'https://github.com/MAHMUDURRAHMANARNOB/risho-speech',
      demo: 'https://risho.guru/',
      playStore: 'https://play.google.com/store/apps/details?id=com.rishoguru.risho_guru'
    }
  },
  {
    id: '2',
    slug: 'risho-speech',
    title: 'Risho Speech',
    description: 'An AI-powered speech recognition application designed for language learning, providing real-time feedback and personalized learning paths for users. The application leverages advanced machine learning algorithms to analyze pronunciation and offer instant corrections.',
    shortDescription: 'AI-powered speech recognition app for language learning with real-time feedback.',
    challenge: 'The main challenge was creating a reliable speech recognition system that could work across different accents and provide accurate, real-time feedback. Additionally, we needed to ensure the app could function offline while maintaining high accuracy.',
    solution: 'We implemented a hybrid approach using TensorFlow Lite for on-device processing and cloud-based advanced analysis. This allowed us to provide instant feedback while maintaining high accuracy and supporting offline functionality.',
    implementation: 'The application was built using Flutter for cross-platform compatibility. We utilized TensorFlow Lite for on-device speech processing and Firebase for cloud functions and user data management. The architecture follows clean code principles with a robust state management system.',
    tech: ['Flutter', 'TensorFlow', 'Firebase', 'Cloud Functions'],
    images: {
      main: '../src/assets/images/risho_speech/Risho speech.png',
      gallery: [
        'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80'
      ]
    },
    timeline: '2022 - Present',
    features: [
      'Real-time speech recognition and analysis',
      'Personalized learning paths',
      'Progress tracking and analytics',
      'Offline mode support',
      'Multi-language support'
    ],
    achievements: [
      'Improved app crash-free rate to 99.9%',
      'Increased user engagement by 45%',
      'Featured in Google Play Store\'s Editor\'s Choice',
      '100,000+ active users'
    ],
    links: {
      github: 'https://github.com/MAHMUDURRAHMANARNOB/risho-speech',
      demo: 'https://rishospeech.com/',
      playStore: 'https://play.google.com/store/apps/details?id=com.rishoguru.risho_speech'
    }
  },
  {
    id: '3',
    slug: 'talentlenshub',
    title: 'TalentLensHub',
    description: 'A comprehensive HR management platform that streamlines talent acquisition and assessment processes. The platform provides powerful tools for recruitment, employee evaluation, and talent management.',
    shortDescription: 'Comprehensive HR management platform for talent acquisition and assessment.',
    challenge: 'The key challenge was creating a scalable system that could handle complex recruitment workflows while maintaining data security and providing a seamless user experience for both recruiters and candidates.',
    solution: 'We developed a modular architecture that separates different recruitment stages into independent but interconnected modules. This approach allows for easy scaling and maintenance while ensuring data consistency.',
    implementation: 'The platform was built using a microservices architecture with Spring Boot backend and Android native frontend. We implemented real-time updates using WebSocket connections and ensure data security through multiple encryption layers.',
    tech: ['Android', 'REST APIs', 'PostgreSQL', 'Spring Boot'],
    images: {
      main: '../src/assets/images/tlh/TLH.png',
      gallery: [
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80'
      ]
    },
    timeline: '2021 - 2022',
    features: [
      'Advanced candidate tracking',
      'Automated assessment tools',
      'Performance analytics',
      'Interview scheduling',
      'Document management'
    ],
    achievements: [
      'Reduced hiring time by 40%',
      'Improved candidate experience score by 60%',
      'Successfully implemented in 50+ companies',
      'Processed 10,000+ applications'
    ],
    links: {
      github: 'https://github.com/MAHMUDURRAHMANARNOB/talentlenshub',
      demo: 'https://www.talentlenshub.com/',
      playStore: 'https://play.google.com/store/apps/details?id=com.shonod.talent_lens_hub'
    }
  }
];