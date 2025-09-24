import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo)");
  };

  return (
    <div className="relative w-full min-h-screen bg-[#0f111a] text-gray-100 px-6 py-16 font-mono overflow-hidden flex items-center justify-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/formbackgriynd.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          filter: "blur(4px) brightness(0.5)",
        }}
      ></div>

      {/* Contact Section */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col md:flex-row gap-12">
        
        {/* Contact Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-blue-500">Contact Me</h2>
          <p className="text-gray-300 text-lg">
            I’m a Network Security Engineer in training. Whether you have a question, want to collaborate on a project, or discuss network security, feel free to reach out.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-blue-500 text-xl">📧</span>
              <a href="mailto:your.email@example.com" className="hover:text-blue-400">your.email@example.com</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-blue-500 text-xl">💼</span>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-blue-500 text-xl">🐙</span>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900 p-6 rounded-xl shadow-lg">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-3 rounded-lg shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
