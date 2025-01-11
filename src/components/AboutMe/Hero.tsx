import React from 'react';

export default function Hero() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">Hi, I'm NETAJI,</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
            “With 17+ years of experience, including over 9 years in UX and CX, I have honed my ability to craft user/customer-centric, AI-driven
solutions that meets business objectives while delivering impactful results. My expertise spans leadership and strategy, guiding
teams to align design visions with organizational goals. I leverage advanced AI technologies to enhance personalization and optimize
decision-making processes, alongside conducting research to inform data-driven decisions. Proficient in developing scalable systems
with inclusivity, ensuring products are usable by diverse audiences. My collaborative approach fosters seamless cross-functional
alignment with business, engineering, product, sales/marketing teams, driving innovation and delivering cohesive, user-focused
experiences across diverse industries.”
</p>            
          </div>
          <div className="relative">
            <img 
              src="/images/aboutme/netaji.jpg"
              alt="Netaji"
              className=" h-[400px] md:h-[400px] rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
