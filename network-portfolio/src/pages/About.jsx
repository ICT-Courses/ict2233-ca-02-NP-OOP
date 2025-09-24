import React from "react";

export default function About() {
  const milestones = [
    { 
      title: "BSc. Hons in IT", 
      period: "2024 – 2027", 
      description: "Second year student. Learning C#, Java, Networking, Database Management, and Web Development." 
    },
    { 
      title: "Cisco CCNA", 
      period: "Feb 2025 – Dec 2025", 
      description: "Skills: Routing & Switching, Network Security, VLANs, OSPF, EIGRP, Packet Tracer simulations." 
    },
    { 
      title: "Fortinet NSE 1", 
      period: "Aug 2025 – Nov 2025", 
      description: "Skills: Basic Cybersecurity concepts, Firewall fundamentals, Network Protection." 
    },
    { 
      title: "Fortinet NSE 2", 
      period: "Dec 2025 – ongoing", 
      description: "Skills: Advanced Firewall configurations, Network Security Management, Threat Detection." 
    },
  ];

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0f111a] text-gray-900 dark:text-white px-6 py-16 font-mono transition-colors duration-300 overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/profile.jpg")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px) brightness(0.3)',
        }}
      ></div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-blue-500 relative z-10">
        About Me
      </h2>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
        
        {/* Profile Image */}
        <div className="flex-shrink-0 w-48 md:w-64 rounded-xl overflow-hidden shadow-lg border-2 border-blue-500">
          <img
            src="/profile.jpg"
            alt="P.D.N.N. Palihena"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description + Milestones */}
        <div className="flex-1 space-y-10 text-gray-100 text-lg md:text-xl">

          {/* Description */}
          <div className="space-y-6">
            <p>
              Hello! I'm <span className="font-bold text-blue-500">P.D.N.N. Palihena</span>, an aspiring <strong>Network Security Engineer</strong> currently pursuing the <strong>Cisco Certified Network Associate (CCNA)</strong> certification.
            </p>
            <p>
              I am also working on <strong>Fortinet NSE 1 & 2</strong> certifications to deepen my cybersecurity knowledge. I enjoy building and securing networks, and I am interested in <strong>cloud computing</strong>, network automation, and advanced network security solutions.
            </p>
            <p>
              Let's create secure, efficient, and scalable networks together!
            </p>
          </div>

          {/* Milestones / Ladder */}
          <div className="relative flex flex-col space-y-8 pl-8">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-500 rounded"></div>

            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex items-start relative z-10">

                {/* Timeline point */}
                <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full mt-1 absolute left-0"></div>

                {/* Milestone text */}
                <div className="ml-8">
                  <h3 className="font-bold text-blue-400">{milestone.title}</h3>
                  {milestone.period && <p className="text-gray-200">{milestone.period}</p>}
                  {milestone.description && <p className="text-gray-400">{milestone.description}</p>}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
