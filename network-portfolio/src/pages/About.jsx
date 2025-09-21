import useTypingEffect from "../hooks/useTypingEffect";

export default function About() {
  const text = `
Hi, I'm Busy Works.
Aspiring Network Engineer | CCNA in Progress.
Skills: Networking, React, Tailwind CSS, JavaScript, Problem Solving.
Education: BSc IT - Semester II
Let's build amazing networks together!
  `;
  const typedText = useTypingEffect(text, 20); // adjust speed as needed

  return (
    <div className="min-h-screen bg-[#0f111a] text-white px-6 py-16 font-mono">
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
      <pre className="whitespace-pre-wrap">{typedText}</pre>
    </div>
  );
}
