"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const hiretrackCaseStudy = {
  title: "Hiretrack",
  subtitle: "AI-powered Multi-Tenant B2B SaaS for Recruitment",
  heroImage:
    "https://upforce.hiretrack.in/_next/image?url=%2Flogo.png&w=256&q=75", // Replace with actual image if available
  overview: `
Hiretrack is a next-generation recruitment platform designed for agencies and enterprises. It leverages AI to streamline candidate sourcing, automate workflows, and provide actionable analytics. Built as a multi-tenant SaaS, it enables organizations to manage multiple clients, job postings, and candidate pipelines from a single, secure dashboard.
  `,
  highlights: [
    "AI-powered candidate matching and resume parsing",
    "Multi-tenant architecture for agencies & enterprises",
    "Automated interview scheduling and communication",
    "Real-time analytics and reporting dashboards",
    "Role-based access control and secure data management",
    "Customizable workflows and integrations (Slack, Email, etc.)",
  ],
  techStack: [
    "Next.js",
    "React.js",
    "MongoDB",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "OpenAI API",
    "Vercel",
  ],
  liveUrl: "https://upforce.hiretrack.in",
  githubUrl: "", // If public
  sections: [
    {
      heading: "The Challenge",
      content: `
Recruitment agencies and large organizations often juggle multiple clients, job openings, and candidate pipelines. Manual processes lead to inefficiencies, missed opportunities, and poor candidate experiences. The goal was to build a scalable, AI-driven platform to automate and optimize the entire recruitment lifecycle.
      `,
    },
    {
      heading: "The Solution",
      content: `
Hiretrack offers a unified dashboard for managing clients, jobs, and candidates. AI algorithms parse resumes, match candidates to jobs, and suggest the best fits. Automated workflows handle interview scheduling, feedback collection, and communication. The multi-tenant design ensures data isolation and security for each client.
      `,
    },
    {
      heading: "Key Features",
      content: `
- **AI Resume Parsing:** Extracts skills, experience, and education from uploaded resumes.
- **Smart Matching:** Recommends candidates for jobs using AI-based scoring.
- **Multi-Tenant Support:** Agencies can manage multiple clients with isolated data.
- **Automated Workflows:** Schedule interviews, send notifications, and collect feedback automatically.
- **Analytics Dashboard:** Visualize hiring metrics, pipeline health, and conversion rates.
- **Integrations:** Connect with Slack, Email, and other tools for seamless communication.
      `,
    },
    {
      heading: "Results & Impact",
      content: `
Hiretrack reduced manual effort by over 60% for early adopters, improved candidate placement speed, and provided actionable insights for recruiters and managers. The platform's flexibility allows rapid onboarding of new clients and customization for unique workflows.
      `,
    },
  ],
};

export default function HiretrackCaseStudyPage() {
  return (
    <main className="bg-white min-h-screen text-black">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-green-100 to-green-50 py-16 px-4 flex flex-col items-center">
        <motion.img
          src={hiretrackCaseStudy.heroImage}
          alt="Hiretrack Logo"
          className="w-24 h-24 rounded-xl mb-6 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {hiretrackCaseStudy.title}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-green-700 mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {hiretrackCaseStudy.subtitle}
        </motion.p>
        <div className="flex gap-4 mb-4">
          <a
            href={hiretrackCaseStudy.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Visit Live Site
          </a>
          {hiretrackCaseStudy.githubUrl && (
            <a
              href={hiretrackCaseStudy.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              View Code
            </a>
          )}
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <motion.h2
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Overview
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {hiretrackCaseStudy.overview}
        </motion.p>
        <div className="mb-8">
          <h3 className="font-semibold mb-2">Highlights</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {hiretrackCaseStudy.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {hiretrackCaseStudy.techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Sections */}
      <section className="max-w-3xl mx-auto pb-16 px-4">
        {hiretrackCaseStudy.sections.map((section, idx) => (
          <motion.div
            key={idx}
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-bold mb-2">{section.heading}</h3>
            <div className="prose prose-green max-w-none text-gray-800">
              {section.content.split("\n").map((line, i) =>
                line.trim().startsWith("-") ? (
                  <ul key={i} className="list-disc list-inside">
                    <li>{line.replace(/^-+\s*/, "")}</li>
                  </ul>
                ) : (
                  <p key={i}>{line.trim()}</p>
                )
              )}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Back to Projects */}
      <div className="flex justify-center pb-12">
        <Link
          href="/projects"
          className="text-green-700 hover:underline font-semibold"
        >
          ← Back to Projects
        </Link>
      </div>
    </main>
  );
}
