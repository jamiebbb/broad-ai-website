"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const services = [
  {
    title: "Compliance Automation",
    description: "Streamline regulatory compliance with intelligent automation systems that reduce manual work and ensure accuracy.",
    icon: "⚖️",
  },
  {
    title: "RNS Feed Automation",
    description: "Real-time regulatory news service integration and automated processing for instant market insights.",
    icon: "📰",
  },
  {
    title: "Live Share Price Display",
    description: "Dynamic market data integration with real-time stock price tracking and visualization.",
    icon: "📈",
  },
  {
    title: "Web Scraping",
    description: "Advanced data extraction solutions to gather, process, and structure information from any source.",
    icon: "🕷️",
  },
  {
    title: "Intelligent Chatbots",
    description: "AI-powered conversational interfaces that understand context and deliver exceptional user experiences.",
    icon: "💬",
  },
  {
    title: "Custom AI Solutions",
    description: "Tailored artificial intelligence implementations designed to solve your unique business challenges.",
    icon: "🤖",
  },
];

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const serviceCards = servicesRef.current?.querySelectorAll(".service-card");
    serviceCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-gray-950 to-cyan-950 animate-gradient"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
            AI Solutions for
            <br />
            Modern Business
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Tech-first consultancy specializing in intelligent automation,
            compliance, and cutting-edge AI implementations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all glow-hover"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-blue-500 rounded-full text-white font-semibold text-lg hover:bg-blue-500/10 transition-all"
            >
              Learn More
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              What We Do
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Delivering cutting-edge AI solutions that transform how businesses
              operate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card opacity-0 bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-950 via-gray-950 to-cyan-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how Broad.AI can help you leverage artificial
            intelligence to achieve your goals
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all glow-hover"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
