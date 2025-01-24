import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  User,
  Briefcase,
  Home as HomeIcon,
  Award,
  GraduationCap,
} from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50">
      {/* Fixed Navigation */}
      <nav className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50">
        <div className="bg-white/80 backdrop-blur-sm rounded-full shadow-lg p-4">
          <div className="flex flex-col space-y-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-600 hover:text-gray-900 hover:scale-110 transition-transform"
              title="Home"
            >
              <HomeIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-900 hover:scale-110 transition-transform"
              title="About"
            >
              <User className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-600 hover:text-gray-900 hover:scale-110 transition-transform"
              title="Experience"
            >
              <GraduationCap className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollToSection('certificates')}
              className="text-gray-600 hover:text-gray-900 hover:scale-110 transition-transform"
              title="Certificates"
            >
              <Award className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-600 hover:text-gray-900 hover:scale-110 transition-transform"
              title="Portfolio"
            >
              <Briefcase className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&h=300"
            alt="Profile"
            className="w-48 h-48 rounded-full mx-auto mb-8 object-cover"
          />
          <h1 className="text-5xl font-bold mb-4">Your Name</h1>
          <p className="text-xl text-gray-600 mb-8">Full Stack Developer</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:your@email.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-white py-20"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400"
                alt="Working"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-600 mb-4">
                I'm a passionate full-stack developer with expertise in React,
                Node.js, and modern web technologies. With a strong foundation
                in both front-end and back-end development, I create elegant
                solutions that solve real-world problems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold mb-2">Frontend</h3>
                  <ul className="text-gray-600">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Backend</h3>
                  <ul className="text-gray-600">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {/* Experience Item 1 */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">
                    Senior Full Stack Developer
                  </h3>
                  <p className="text-gray-600">Tech Company Inc.</p>
                </div>
                <span className="text-gray-500">2021 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Led development of microservices architecture</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>
                  Implemented CI/CD pipelines reducing deployment time by 50%
                </li>
              </ul>
            </div>

            {/* Experience Item 2 */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Full Stack Developer</h3>
                  <p className="text-gray-600">Digital Solutions Ltd.</p>
                </div>
                <span className="text-gray-500">2018 - 2021</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Developed and maintained multiple client applications</li>
                <li>Optimized database queries improving performance by 40%</li>
                <li>Integrated third-party APIs and payment gateways</li>
              </ul>
            </div>

            {/* Experience Item 3 */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Junior Developer</h3>
                  <p className="text-gray-600">StartUp Hub</p>
                </div>
                <span className="text-gray-500">2016 - 2018</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Built responsive web applications using React</li>
                <li>Collaborated with UX team to implement design systems</li>
                <li>Participated in agile development processes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="min-h-screen py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Certificates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certificate 1 */}
            <div className="bg-gray-50 rounded-xl shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=500&h=300"
                alt="AWS Certificate"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">
                  AWS Certified Solutions Architect
                </h3>
                <p className="text-gray-600 mb-4">Amazon Web Services</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">2023</span>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>

            {/* Certificate 2 */}
            <div className="bg-gray-50 rounded-xl shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&h=300"
                alt="React Certificate"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">
                  React Advanced Certification
                </h3>
                <p className="text-gray-600 mb-4">Meta</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">2022</span>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>

            {/* Certificate 3 */}
            <div className="bg-gray-50 rounded-xl shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&h=300"
                alt="Full Stack Certificate"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">
                  Full Stack Development
                </h3>
                <p className="text-gray-600 mb-4">freeCodeCamp</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">2021</span>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-xl overflow-hidden"
              >
                <img
                  src={`https://images.unsplash.com/photo-${
                    1550439062 + item
                  }-e214c965db21?auto=format&fit=crop&w=500&h=300`}
                  alt={`Project ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">Project {item}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project and the technologies used
                    in its development.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Project
                    </a>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
