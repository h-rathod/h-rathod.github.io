import Image from 'next/image';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AIPredictiveMaintenance() {
  const techStack = [
    'React Native', 'Supabase', 'Spring Boot', 'Express.js', 'Java', 'Streamlit','LSTM Autoencoder', 'Random Forest Classification','Random Forest Regression', 'ESP32'
  ];

  const features = [
    {
      title: 'Real-time Monitoring',
      description: 'Continuous tracking of temperature, humidity, vibration, current, voltage, and gas levels.',
      image: '/projects/ai-predictive-maintenance/dashboard.png',
      alt: 'Dashboard showing real-time sensor data',
      isPhoneScreenshot: true
    },
    {
      title: 'AI/ML Predictions',
      description: 'Advanced machine learning models including LSTM Autoencoder and Random Forest for accurate fault detection and predictive maintenance.',
      image: '/projects/ai-predictive-maintenance/ml.png',
      alt: 'Machine learning model architecture',
      isPhoneScreenshot: true
    },
    {
      title: 'Chatbot Interface',
      description: 'Natural language processing for intuitive system interaction and querying sensor data.',
      image: '/projects/ai-predictive-maintenance/chatbot.png',
      alt: 'Chatbot interface for system interaction',
      isPhoneScreenshot: true
    },
    {
      title: 'Hardware Implementation',
      description: 'Custom ESP32-based hardware with multiple sensors for comprehensive environmental monitoring.',
      image: '/projects/ai-predictive-maintenance/hardware.png',
      alt: 'Hardware components and setup',
      isPhoneScreenshot: false
    },
    {
      title: 'System Architecture',
      description: 'End-to-end architecture showing data flow from sensors to cloud and mobile application.',
      image: '/projects/ai-predictive-maintenance/system-arch.png',
      alt: 'System architecture diagram',
      isPhoneScreenshot: false
    },
    {
      title: 'Custom PCB Design',
      description: 'Optimized PCB layout for reliable sensor integration and data acquisition.',
      image: '/projects/ai-predictive-maintenance/pcblayout.png',
      alt: 'PCB layout design',
      isPhoneScreenshot: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <Badge variant="outline" className="mb-4 text-sm font-medium">Final Year Project</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          AI based Predictive Maintenance System
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          An intelligent monitoring solution for industrial HVAC-R systems using IoT and Machine Learning
        </p>
        <div className="w-full h-px bg-border my-8"></div>
      </section>

      {/* Project Overview */}
      <section id="overview" className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <div className="space-y-6 text-muted-foreground">
          <p>
            The AI Predictive Maintenance System is designed to enhance the reliability and efficiency of industrial 
            HVAC-R (Heating, Ventilation, Air Conditioning, and Refrigeration) systems through continuous monitoring 
            and predictive analytics.
          </p>
          <p>
            This project addresses the critical need for proactive maintenance in industrial settings, where unexpected 
            equipment failures can lead to significant financial losses and operational disruptions.
          </p>
        

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Technical Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              <div className={`my-4 ${feature.isPhoneScreenshot ? 'max-w-xs mx-auto' : ''}`}>
                <div className={`relative ${feature.isPhoneScreenshot ? 'h-[300px]' : ''}`}>
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={feature.isPhoneScreenshot ? 600 : 1200}
                    height={feature.isPhoneScreenshot ? 1200 : 800}
                    className={`w-full ${feature.isPhoneScreenshot ? 'h-auto object-contain' : 'h-auto'} rounded-lg border`}
                    style={feature.isPhoneScreenshot ? { maxHeight: '300px' } : {}}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Figure {index + 1}: {feature.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
        <div className="space-y-6 text-muted-foreground">
          <p>
            The implementation of our AI Predictive Maintenance System has demonstrated significant improvements in 
            equipment reliability and maintenance efficiency. The system successfully integrates IoT sensors with 
            advanced machine learning models to provide real-time monitoring and predictive insights.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">90%</CardTitle>
                <p className="text-muted-foreground">Prediction Accuracy</p>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">25%</CardTitle>
                <p className="text-muted-foreground">Reduction in Downtime</p>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">30%</CardTitle>
                <p className="text-muted-foreground">Cost Savings</p>
              </CardHeader>
            </Card>
          </div>

          <p>
            The system&apos;s modular architecture allows for easy integration with existing industrial equipment, making it 
            a versatile solution for various industrial applications beyond HVAC-R systems.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Achievements</h2>
        <div className="space-y-6 text-muted-foreground">
          <ul className="space-y-4 list-disc pl-6">
            <li>
              <span className="text-foreground font-medium">OpenAI Researcher Access Program:</span> Our UG Final Year Project "AI-based Predictive Maintenance System for Industrial Machines" was accepted into the OpenAI Researcher Access Program, granting $2000 worth of credits.
            </li>
            <li>
              <span className="text-foreground font-medium">1st Rank in Tantrapradarshini:</span> Secured 1st Rank in the department-level project exhibition Tantrapradarshini, organized by the ENTC Department in association with IEEE Student Branch and Institutions Innovation Council.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
