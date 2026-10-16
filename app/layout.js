import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommandPalette from '../components/CommandPalette';
import TelemetryDrawer from '../components/TelemetryDrawer';
import VoxelBackground from '../components/VoxelBackground';
import { personalInfo } from '../lib/data';

export const metadata = {
  metadataBase: new URL('https://ankitkatole.dev'),
  title: {
    default: 'Ankit Katole — Software Engineer | Java, Spring Boot & Distributed Systems',
    template: '%s | Ankit Katole'
  },
  description:
    'Software Engineer at Capgemini specializing in Java 8+, Spring Boot microservices, Kafka event streaming, and REST API architecture. Portfolio, technical projects, and engineering writing.',
  keywords: [
    'Ankit Katole',
    'Software Engineer',
    'Java Developer',
    'Spring Boot Developer',
    'Backend Engineer',
    'Microservices',
    'REST API',
    'Apache Kafka',
    'MySQL',
    'Spring AI',
    'Capgemini Software Engineer'
  ],
  authors: [{ name: 'Ankit Katole', url: 'https://github.com/ankitkatole' }],
  creator: 'Ankit Katole',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ankitkatole.dev',
    title: 'Ankit Katole — Software Engineer | Java, Spring Boot & Microservices',
    description:
      'Backend-focused Software Engineer engineering resilient microservices, high-throughput APIs, and enterprise order management systems.',
    siteName: 'Ankit Katole Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankit Katole — Software Engineer',
    description: 'Java, Spring Boot, Microservices, and Distributed Backend Architecture.'
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
  }
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    worksFor: {
      '@type': 'Organization',
      name: 'Capgemini'
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'G H Raisoni College of Engineering and Management'
    },
    url: 'https://ankitkatole.dev',
    sameAs: [
      personalInfo.links.github,
      personalInfo.links.linkedin,
      personalInfo.links.leetcode
    ],
    knowsAbout: [
      'Java',
      'Spring Boot',
      'Microservices',
      'REST APIs',
      'Kafka',
      'MySQL',
      'Docker',
      'Spring AI',
      'MERN Stack'
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
      </body>
    </html>
  );
}
