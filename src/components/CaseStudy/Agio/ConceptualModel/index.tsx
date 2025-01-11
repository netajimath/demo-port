import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Stethoscope, Heart, Wallet, GraduationCap, Cpu } from 'lucide-react';

const modelSections = [
  {
    type: 'image',
    title: "AGIO Conceptual Overview",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2400",
    description: "A comprehensive platform connecting seniors with healthcare, social support, and community services"
  },
  {
    type: 'content',
    icon: Stethoscope,
    title: "Healthcare",
    description: "Comprehensive healthcare management and support system",
    sections: [
      {
        subtitle: "Medical Support",
        points: [
          "24/7 emergency medical assistance",
          "Medication management and reminders",
          "Virtual health consultations",
          "Health history tracking"
        ]
      },
      {
        subtitle: "Wellness Monitoring",
        points: [
          "Regular health check-ins",
          "Vital signs monitoring",
          "Activity tracking",
          "Nutrition guidance"
        ]
      }
    ]
  },
  {
    type: 'content',
    icon: Heart,
    title: "Social Connection",
    description: "Building meaningful relationships and community engagement",
    sections: [
      {
        subtitle: "Community Integration",
        points: [
          "Local event participation",
          "Interest-based group activities",
          "Volunteer opportunities",
          "Social meetups"
        ]
      },
      {
        subtitle: "Family Connection",
        points: [
          "Video calls with family",
          "Photo and message sharing",
          "Family event planning",
          "Activity updates"
        ]
      }
    ]
  },
  {
    type: 'content',
    icon: Wallet,
    title: "Support Services",
    description: "Comprehensive assistance for daily living needs",
    sections: [
      {
        subtitle: "Daily Assistance",
        points: [
          "Transportation services",
          "Grocery delivery",
          "Home maintenance help",
          "Meal preparation support"
        ]
      },
      {
        subtitle: "Financial Management",
        points: [
          "Bill payment reminders",
          "Expense tracking",
          "Financial advice",
          "Secure transactions"
        ]
      }
    ]
  },
  {
    type: 'content',
    icon: GraduationCap,
    title: "Learning & Growth",
    description: "Continuous personal development opportunities",
    sections: [
      {
        subtitle: "Skill Development",
        points: [
          "Technology tutorials",
          "Hobby workshops",
          "Online courses",
          "Creative activities"
        ]
      },
      {
        subtitle: "Knowledge Sharing",
        points: [
          "Mentoring opportunities",
          "Experience sharing",
          "Community teaching",
          "Cultural exchange"
        ]
      }
    ]
  },
  {
    type: 'content',
    icon: Cpu,
    title: "Smart Features",
    description: "AI-powered assistance and automation",
    sections: [
      {
        subtitle: "AI Assistance",
        points: [
          "Voice commands",
          "Smart reminders",
          "Personalized recommendations",
          "Emergency detection"
        ]
      },
      {
        subtitle: "Safety & Security",
        points: [
          "Emergency alerts",
          "Location tracking",
          "Fall detection",
          "Security monitoring"
        ]
      }
    ]
  }
];

export default function ConceptualModel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % modelSections.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + modelSections.length) % modelSections.length);
  };

  const renderSlide = (section: typeof modelSections[0], index: number) => {
    if (section.type === 'image') {
      return (
        <div className="relative h-[600px] w-full">
          <img 
            src={section.image} 
            alt={section.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg">
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-4">{section.title}</h3>
              <p className="text-xl text-gray-200">{section.description}</p>
            </div>
          </div>
        </div>
      );
    }

    const Icon = section.icon;
    return (
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">{section.title}</h3>
            <p className="text-gray-600">{section.description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {section.sections?.map((subsection, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">
                {subsection.subtitle}
              </h4>
              <ul className="space-y-3">
                {subsection.points.map((point, pointIdx) => (
                  <li key={pointIdx} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Conceptual Model</h2>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute -left-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous section"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute -right-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next section"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Content Slider */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div 
              className="transition-transform duration-300 ease-in-out flex"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {modelSections.map((section, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  {renderSlide(section, index)}
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {modelSections.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}