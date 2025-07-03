import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Predictive Maintenance System | Harsh Rathod',
  description: 'An intelligent monitoring solution for industrial HVAC-R systems using IoT and Machine Learning. Features real-time sensor data acquisition, predictive analytics, and a cross-platform mobile app with chatbot interface.',
  openGraph: {
    title: 'AI Predictive Maintenance System | Harsh Rathod',
    description: 'An intelligent monitoring solution for industrial HVAC-R systems using IoT and Machine Learning.',
    url: 'https://harshrathod.com/projects/ai-predictive-maintenance',
    siteName: 'Harsh Rathod',
    images: [
      {
        url: '/ai-pdm/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Predictive Maintenance System',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Predictive Maintenance System | Harsh Rathod',
    description: 'An intelligent monitoring solution for industrial HVAC-R systems using IoT and Machine Learning.',
    creator: '@raharsh_',
    images: ['/ai-pdm/og-image.png'],
  },
};
