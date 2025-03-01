"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Layout,
  Layers,
  GitBranch,
  Cpu,
  Globe,
  Smartphone,
  Cloud,
  LineChart,
  Palette,
  Terminal,
  Workflow,
  Lightbulb,
  Zap,
  Bookmark,
  BookOpen,
  Briefcase,
  Users,
  MessageSquare,
  PenTool,
  Headphones,
  Monitor,
  Sliders,
  Shield,
  Search,
  Compass
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import AnimatedSection from "@/components/animated-section";
import { cn } from "@/lib/utils";

// Skill Category Card Component
interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    description?: string;
  }[];
  className?: string;
  index: number;
}

function SkillCategory({ title, icon, skills, className, index }: SkillCategoryProps) {
  return (
    <motion.div
      className={cn(
        "bg-card/80 backdrop-blur-sm border border-primary/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300",
        className
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-primary/10 rounded-full text-primary mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        <div className="space-y-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium text-foreground">{skill.name}</h4>
              {skill.description && (
                <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("technical");

  const technicalSkills = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-5 w-5" />,
      skills: [
        { name: "React.js", description: "Advanced state management, hooks, context API" },
        { name: "TypeScript", description: "Type safety, interfaces, generics" },
        { name: "Next.js", description: "SSR, ISR, API routes, middleware" },
        { name: "CSS/Tailwind", description: "Responsive design, animations, custom themes" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js", description: "Express, Fastify, middleware patterns" },
        { name: "GraphQL", description: "Apollo Server, schema design, resolvers" },
        { name: "REST APIs", description: "RESTful principles, versioning, documentation" },
        { name: "Authentication", description: "JWT, OAuth, session management" }
      ]
    },
    {
      title: "Database Technologies",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "MongoDB", description: "Schema design, aggregation, indexing" },
        { name: "PostgreSQL", description: "Relational modeling, complex queries" },
        { name: "Redis", description: "Caching, pub/sub, data structures" },
        { name: "Prisma/Mongoose", description: "ORM/ODM, migrations, relations" }
      ]
    }
  ];

  const softSkills = [
    {
      title: "Communication",
      icon: <MessageSquare className="h-5 w-5" />,
      skills: [
        { name: "Technical Writing", description: "Documentation, tutorials, articles" },
        { name: "Presentation", description: "Tech talks, client presentations" },
        { name: "Active Listening", description: "Understanding requirements and feedback" },
        { name: "Clarity", description: "Explaining complex concepts simply" }
      ]
    },
    {
      title: "Collaboration",
      icon: <Users className="h-5 w-5" />,
      skills: [
        { name: "Team Work", description: "Cross-functional collaboration" },
        { name: "Mentoring", description: "Knowledge sharing, code reviews" },
        { name: "Conflict Resolution", description: "Finding constructive solutions" },
        { name: "Remote Work", description: "Async communication, self-management" }
      ]
    },
    {
      title: "Problem Solving",
      icon: <Lightbulb className="h-5 w-5" />,
      skills: [
        { name: "Critical Thinking", description: "Analyzing problems from multiple angles" },
        { name: "Debugging", description: "Systematic troubleshooting" },
        { name: "Research", description: "Finding solutions and best practices" },
        { name: "Innovation", description: "Creative approaches to challenges" }
      ]
    }
  ];

  const learningSkills = [
    {
      title: "Currently Learning",
      icon: <BookOpen className="h-5 w-5" />,
      skills: [
        { name: "Rust", description: "Systems programming, performance" },
        { name: "WebAssembly", description: "High-performance web applications" },
        { name: "AI/ML Integration", description: "LLMs, embeddings, vector DBs" },
        { name: "Web3 Technologies", description: "Smart contracts, decentralized apps" }
      ]
    },
    {
      title: "Learning Methods",
      icon: <Compass className="h-5 w-5" />,
      skills: [
        { name: "Project-Based", description: "Learning through building" },
        { name: "Documentation", description: "Reading official docs and specs" },
        { name: "Courses", description: "Online platforms and certifications" },
        { name: "Community", description: "Open source, forums, meetups" }
      ]
    },
    {
      title: "Future Interests",
      icon: <Zap className="h-5 w-5" />,
      skills: [
        { name: "Quantum Computing", description: "Exploring quantum algorithms" },
        { name: "AR/VR Development", description: "Immersive technology applications" },
        { name: "Cybersecurity", description: "Security protocols and practices" },
        { name: "Data Science", description: "Statistical analysis and visualization" }
      ]
    }
  ];

  const renderSkillGrid = (skills: typeof technicalSkills) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((category, index) => (
        <SkillCategory
          key={category.title}
          title={category.title}
          icon={category.icon}
          skills={category.skills}
          index={index}
        />
      ))}
    </div>
  );

  return (
    <div 
      className="min-h-screen pt-24 pb-16 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="My Skills"
          subtitle="A comprehensive overview of my expertise and capabilities"
          className="text-white"
        />

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-secondary/50 backdrop-blur-sm rounded-lg">
            {[
              { id: "technical", label: "Technical Skills" },
              { id: "soft", label: "Soft Skills" },
              { id: "learning", label: "Learning & Growth" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-white hover:text-foreground hover:bg-primary/20"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "technical" && renderSkillGrid(technicalSkills)}
            {activeTab === "soft" && renderSkillGrid(softSkills)}
            {activeTab === "learning" && renderSkillGrid(learningSkills)}
          </motion.div>
        </AnimatePresence>

        <AnimatedSection className="mt-20">
          <SectionHeading
            title="Certifications"
            subtitle="Professional certifications and achievements"
            className="mb-8 text-white"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AWS Certified Developer",
                issuer: "Amazon Web Services",
                date: "2022",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "Full-Stack Web Development",
                issuer: "Udacity",
                date: "2021",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "React.js Certification",
                issuer: "Meta",
                date: "2020",
                image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop",
              },
            ].map((cert, i) => (
              <motion.div
                key={cert.title}
                className="bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="relative h-40">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${cert.image})` }}
                  />
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-2 text-white">{cert.title}</h3>
                  <p className="text-muted-foreground">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}