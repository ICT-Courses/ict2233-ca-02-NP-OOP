import NetworkCanvas from "../components/NetworkCanvas";
import { motion } from "framer-motion";
import useTypingEffect from "../hooks/useTypingEffect";

export default function Home() {
  const cliText = `
Router> enable
Router# configure terminal
Router(config)# interface GigabitEthernet0/1
Router(config-if)# ip address 192.168.1.1 255.255.255.0
Router(config-if)# no shutdown
Router(config-if)# exit
Router(config)# router ospf 1
Router(config-router)# network 192.168.1.0 0.0.0.255 area 0
Router(config-router)# exit
Router(config)# exit
Router# show ip route
`;

  const typedCLI = useTypingEffect(cliText, 40);

  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/profile.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          filter: "blur(30px) brightness(0.5)", // match About.jsx
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[100vh] px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-mono font-bold mb-6 text-blue-700 dark:text-blue-400"
        >
          Hi, I'm P.D.N.N. Palihena
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-2xl md:text-3xl font-mono mb-12 max-w-2xl text-gray-700 dark:text-gray-300"
        >
          Aspiring Network Security Engineer |{" "}
          <span className="font-bold">CCNA in Progress</span>
        </motion.p>

        {/* VLAN Animation */}
        <div className="w-full max-w-3xl h-[250px] md:h-[300px] lg:h-[350px] bg-blue-900 rounded-lg shadow-lg overflow-hidden">
          <NetworkCanvas />
        </div>
      </section>

      {/* CLI Simulation Section */}
      <section className="relative z-10 w-full max-w-4xl px-6 py-12 bg-black text-green-400 font-mono rounded-xl shadow-lg mb-16">
        <h2 className="text-2xl font-bold mb-4">Network Configurations</h2>
        <pre className="whitespace-pre-wrap">
          {typedCLI}
          <span className="inline-block w-2 h-5 bg-green-400 animate-blink ml-1"></span>
        </pre>
      </section>

      {/* Network Security Focus */}
      <section className="relative z-10 max-w-4xl px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">My Focus Areas</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
          I am passionate about network security, routing & switching, 
          firewall configurations, VLAN management, and secure enterprise network architecture. 
          Through practical simulations, real-time monitoring, and hands-on labs, 
          I constantly strengthen my skills to build reliable and secure networks.
        </p>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-gray-100 dark:bg-gray-800 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Busy Works. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
