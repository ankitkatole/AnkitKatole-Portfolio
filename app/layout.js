import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommandPalette from '../components/CommandPalette';
import TelemetryDrawer from '../components/TelemetryDrawer';
import VoxelBackground from '../components/VoxelBackground';
import RobloxAvatar from '../components/RobloxAvatar';
import CookieBanner from '../components/CookieBanner';
import SmoothScroll from '../components/SmoothScroll';
import ChatBot from '../components/ChatBot';
import { personalInfo } from '../lib/data';

export const viewport = {
  themeColor: '#141210',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1
};

export const metadata = {
  metadataBase: new URL('https://ankit-katole-portfolio.vercel.app'),
  title: {
    default: 'Ankit Katole - Software Engineer | Java, Spring Boot & Distributed Systems',
    template: '%s | Ankit Katole'
  },
  description:
    'Software Engineer at Capgemini specializing in Java 8+, Spring Boot microservices, Kafka event streaming, and REST API architecture. Portfolio, technical projects, and engineering writing.',
  keywords: [
    'Ankit Katole',
    'Ankit Katole Portfolio',
    'Ankit Katole Software Engineer',
    'Ankit Katole Capgemini',
    'Java Software Engineer',
    'Spring Boot Developer',
    'Backend Engineer',
    'Microservices Architecture',
    'Apache Kafka Developer',
    'Distributed Systems Engineer',
    'REST API Architecture',
    'MySQL Optimization',
    'Spring AI',
    'Capgemini Engineer'
  ],
  verification: {
    google: '946cfSVTYTNqmoHUh8sIjfYjCXL_pAhDIaJQn4IETyM'
  },
  authors: [{ name: 'Ankit Katole', url: 'https://github.com/ankitkatole' }],
  creator: 'Ankit Katole',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ankit-katole-portfolio.vercel.app',
    title: 'Ankit Katole - Software Engineer | Java, Spring Boot & Microservices',
    description:
      'Backend-focused Software Engineer engineering resilient microservices, high-throughput APIs, and enterprise order management systems.',
    siteName: 'Ankit Katole Portfolio',
    images: [
      {
        url: 'https://i.postimg.cc/MpssQPSL/image.png',
        width: 1200,
        height: 630,
        alt: 'Ankit Katole - Software Engineer',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankit Katole - Software Engineer',
    description: 'Java, Spring Boot, Microservices, and Distributed Backend Architecture.',
    images: ['https://i.postimg.cc/MpssQPSL/image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://ankit-katole-portfolio.vercel.app'
  }
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://ankit-katole-portfolio.vercel.app/#person',
        name: personalInfo.name,
        jobTitle: personalInfo.title,
        description: 'Software Engineer at Capgemini specializing in Java 8+, Spring Boot microservices, Kafka event streaming, and resilient distributed architectures.',
        image: 'https://i.postimg.cc/MpssQPSL/image.png',
        telephone: personalInfo.phone,
        email: personalInfo.email,
        worksFor: {
          '@type': 'Organization',
          name: 'Capgemini'
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'G H Raisoni College of Engineering and Management'
        },
        url: 'https://ankit-katole-portfolio.vercel.app',
        sameAs: [
          personalInfo.links.github,
          personalInfo.links.linkedin,
          personalInfo.links.leetcode,
          personalInfo.links.medium,
          personalInfo.links.whatsapp
        ],
        knowsAbout: [
          'Java 8+',
          'Spring Boot',
          'Microservices Architecture',
          'Apache Kafka',
          'REST APIs',
          'MySQL',
          'Spring Security',
          'Spring AI',
          'Docker',
          'Distributed Systems',
          'Blockchain'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://ankit-katole-portfolio.vercel.app/#website',
        url: 'https://ankit-katole-portfolio.vercel.app',
        name: 'Ankit Katole - Software Engineer',
        description: 'Portfolio, verified engineering projects, and research publications of Ankit Katole.',
        publisher: {
          '@id': 'https://ankit-katole-portfolio.vercel.app/#person'
        }
      },
      {
        '@type': 'ProfilePage',
        '@id': 'https://ankit-katole-portfolio.vercel.app/#profilepage',
        url: 'https://ankit-katole-portfolio.vercel.app',
        name: 'Ankit Katole Engineering Profile',
        mainEntity: {
          '@id': 'https://ankit-katole-portfolio.vercel.app/#person'
        }
      },
      {
        '@type': 'ScholarlyArticle',
        '@id': 'https://ijarpr.com/uploads/V2ISSUE11/IJARPR1114.pdf',
        headline: 'A Blockchain-Based Decentralized Dataset Marketplace for Secure Data Sharing and Monetization',
        name: 'A Blockchain-Based Decentralized Dataset Marketplace for Secure Data Sharing and Monetization',
        author: [
          { '@type': 'Person', name: 'Mrs. Hemlata Kosare' },
          { '@type': 'Person', name: 'Akshat Tomar' },
          { '@type': 'Person', name: 'Ankit Katole', url: 'https://ankit-katole-portfolio.vercel.app' },
          { '@type': 'Person', name: 'Jayesh Kahate' },
          { '@type': 'Person', name: 'Jitesh Varade' },
          { '@type': 'Person', name: 'Gajendra Naphade' }
        ],
        publisher: {
          '@type': 'Organization',
          name: 'International Journal of Advance Research Publication and Reviews (IJARPR)'
        },
        url: 'https://ijarpr.com/uploads/V2ISSUE11/IJARPR1114.pdf',
        datePublished: '2025-11',
        inLanguage: 'en-US',
        keywords: [
          'Blockchain',
          'Smart Contracts',
          'IPFS',
          'Decentralized Storage',
          'Data Monetization'
        ],
        description: 'A decentralized peer-to-peer framework for secure dataset trading and monetization without reliance on centralized data brokers.'
      },
      {
        '@type': 'Article',
        '@id': 'https://medium.com/@unemployedEngineer/the-complete-spring-mvc-request-response-lifecycle-explained-9f342700bdb7',
        headline: 'The Complete Spring MVC Request-Response Lifecycle Explained',
        name: 'The Complete Spring MVC Request-Response Lifecycle Explained',
        author: {
          '@id': 'https://ankit-katole-portfolio.vercel.app/#person'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Medium'
        },
        url: 'https://medium.com/@unemployedEngineer/the-complete-spring-mvc-request-response-lifecycle-explained-9f342700bdb7',
        inLanguage: 'en-US',
        keywords: [
          'Spring MVC',
          'Spring Boot',
          'DispatcherServlet',
          'Architecture',
          'Java'
        ],
        description: 'An end-to-end architectural deep-dive tracing an HTTP request through Tomcat, the Servlet Filter Chain, DispatcherServlet orchestration, HandlerMappings, Interceptors, Argument Resolvers, and HttpMessageConverters.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://ankit-katole-portfolio.vercel.app/#breadcrumbs',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://ankit-katole-portfolio.vercel.app'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Engineering Journal',
            item: 'https://ankit-katole-portfolio.vercel.app/blog'
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-bg-primary text-ink-primary min-h-[100dvh] flex flex-col selection:bg-bg-elevated selection:text-ink-primary relative">
        <VoxelBackground />
        <Navbar />
        <main id="main-content" className="flex-1 w-full focus:outline-none">
          {children}
        </main>
        <Footer />
        <CommandPalette />
        <TelemetryDrawer />
        <RobloxAvatar />
        <CookieBanner />
        <SmoothScroll />
        <ChatBot />
      </body>
    </html>
  );
}
