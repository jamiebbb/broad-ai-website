import Image from "next/image";

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-gray-950 to-cyan-950 animate-gradient"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Who We Are
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A tech-first AI consultancy built on innovation, expertise, and a
            passion for solving complex problems
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">
              Our Mission
            </h2>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                At Broad.AI, we believe that artificial intelligence and
                intelligent automation should be accessible to every business,
                regardless of size or industry. Our mission is to demystify AI
                and deliver practical, impactful solutions that drive real
                business value.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We specialize in transforming complex business challenges into
                streamlined, automated processes. From compliance automation and
                regulatory monitoring to web scraping and intelligent chatbots,
                we build bespoke solutions tailored to your unique needs.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our tech-first approach combines cutting-edge AI capabilities
                with deep industry understanding, ensuring that every solution
                we deliver is not just technologically advanced, but also
                practical, scalable, and aligned with your business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">
            Meet Our Team
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-96 md:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
                  <Image
                    src="/team/jamie-broadhurst.jpg"
                    alt="Jamie Broadhurst"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-2 text-white">
                    Jamie Broadhurst
                  </h3>
                  <p className="text-xl text-blue-400 mb-6">
                    Founder & Lead AI Consultant
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Jamie is a technology innovator with a proven track record
                    in delivering cutting-edge AI and automation solutions.
                    With expertise spanning compliance automation, financial
                    data integration, web scraping, and conversational AI, Jamie
                    has helped businesses transform their operations through
                    intelligent technology.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed mb-8">
                    From building RNS feed automation systems to creating
                    real-time share price displays and sophisticated chatbots,
                    Jamie combines technical excellence with a deep
                    understanding of business needs to deliver solutions that
                    make a real impact.
                  </p>

                  {/* Contact Links */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="mailto:jamie@broadhurst.com"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-cyan-700 transition-all glow-hover"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Email
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jamie-broadhurst-77b18618b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-500 rounded-full text-white font-medium hover:bg-blue-500/10 transition-all"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-blue-500 transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold mb-3 text-white">
                Results-Driven
              </h3>
              <p className="text-gray-400">
                We focus on delivering measurable outcomes that directly impact
                your bottom line and operational efficiency.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-blue-500 transition-all duration-300">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-3 text-white">
                Innovation First
              </h3>
              <p className="text-gray-400">
                We stay at the forefront of AI technology to bring you the most
                advanced and effective solutions available.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-blue-500 transition-all duration-300">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold mb-3 text-white">
                Partnership Approach
              </h3>
              <p className="text-gray-400">
                We work closely with you to understand your challenges and build
                solutions that truly fit your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

