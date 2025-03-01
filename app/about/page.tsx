"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Award, Code, Heart, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image"; // Ensure Image is imported

// Interactive Card Component
interface InteractiveCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

function InteractiveCard({ title, icon, children, className }: InteractiveCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={cn(
        "bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300",
        className
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      <motion.div
        className="p-5 cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-900/20 rounded-full text-blue-400">
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 py-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Placeholder for SectionHeading (assuming it should accept props)
interface SectionHeadingProps {
  title: string;
  subtitle: string;
  className?: string;
}

function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-6", className)}>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <p className="text-gray-400 text-lg">{subtitle}</p>
    </div>
  );
}

// Placeholder for AnimatedSection (assuming it should accept props and children)
interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

function AnimatedSection({ children, delay = 0, className }: AnimatedSectionProps) {
  return (
    <motion.div
      className={cn("py-20", className)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

// Placeholder for TimelineItem (assuming it should accept props)
interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

function TimelineItem({ year, title, description, icon, className }: TimelineItemProps) {
  return (
    <div className={cn("relative mb-8 pb-8 last:pb-0", className)}>
      <div className="absolute left-5 top-0 w-1 h-full bg-gray-700" />
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-gray-400 text-sm">{year}</p>
          <p className="text-gray-300 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=2070&auto=format&fit=crop"
          alt="Background"
          fill
          className="object-cover opacity-20 blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Overlay for contrast */}
      </div>

      {/* Decorative Elements (optional, can be adjusted or removed for minimalism) */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-900 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gray-800 rounded-full blur-3xl" />
      </div>

      {/* Interactive Cards Section (Adjusted for prominence) */}
      <section className="py-16">
        <div className="container mx-auto px-12">
          <SectionHeading
            title="My Story"
            subtitle="Explore different aspects of my background and interests"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <InteractiveCard 
              title="About Me" 
              icon={<Code className="h-5 w-5" />}
              className="md:col-span-2"
            >
              <p className="text-gray-300 mb-4 leading-relaxed">
                I am a Full-Stack Developer with a passion for creating elegant, efficient, and user-friendly web applications. My journey in tech began at 14, tinkering with HTML and CSS to build simple websites, evolving into a deep love for software development.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Beyond coding, I am an avid reader, enjoy hiking in nature, and love exploring new technologies. I believe in continuous learning and pushing the boundaries of what’s possible with code, combining technical expertise with creative problem-solving to deliver flawless, exceptional user experiences.
              </p>
            </InteractiveCard>

            <InteractiveCard 
              title="Education" 
              icon={<GraduationCap className="h-5 w-5" />}
            >
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold text-white">BSc in Computer Science</h4>
                  <p className="text-gray-400">University of Technology, 2014-2018</p>
                  <p className="text-gray-500 text-sm mt-2">Graduated with honors, focusing on web development, algorithms, and software engineering.</p>
                </li>
                <li>
                  <h4 className="font-semibold text-white">Web Development Bootcamp</h4>
                  <p className="text-gray-400">Tech Academy, 2017</p>
                  <p className="text-gray-500 text-sm mt-2">Intensive 12-week program on modern JavaScript frameworks and backend development.</p>
                </li>
                <li>
                  <h4 className="font-semibold text-white">UI/UX Design Fundamentals</h4>
                  <p className="text-gray-400">Design Institute, 2019</p>
                  <p className="text-gray-500 text-sm mt-2">Certificate course on user interface design principles and user experience best practices.</p>
                </li>
              </ul>
            </InteractiveCard>

            <InteractiveCard 
              title="Certifications" 
              icon={<Award className="h-5 w-5" />}
            >
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold text-white">AWS Certified Developer</h4>
                  <p className="text-gray-400">Amazon Web Services, 2022</p>
                </li>
                <li>
                  <h4 className="font-semibold text-white">Full-Stack Web Development</h4>
                  <p className="text-gray-400">Udacity, 2021</p>
                </li>
                <li>
                  <h4 className="font-semibold text-white">React.js Certification</h4>
                  <p className="text-gray-400">Meta, 2020</p>
                </li>
                <li>
                  <h4 className="font-semibold text-white">Professional Scrum Master I</h4>
                  <p className="text-gray-400">Scrum.org, 2019</p>
                </li>
              </ul>
            </InteractiveCard>

            <InteractiveCard 
              title="Experience" 
              icon={<Briefcase className="h-5 w-5" />}
            >
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold text-white">Senior Full-Stack Developer</h4>
                  <p className="text-gray-400">TechCorp, 2022-Present</p>
                  <p className="text-gray-500 text-sm mt-2">Leading development of enterprise web applications using React, Node.js, and AWS.</p>
                </li>
                <li>
                  <h4 className="font-semibold text-white">Full-Stack Developer</h4>
                  <p className="text-gray-400">WebSolutions, 2020-2022</p>
                  <p className="text-gray-500 text-sm mt-2">Developed client projects using React, Express, and MongoDB.</p>
                </li>
                <li>
                  <h4 className="font-semibold text-white">Frontend Developer</h4>
                  <p className="text-gray-400">StartupX, 2018-2020</p>
                  <p className="text-gray-500 text-sm mt-2">Built responsive UIs using React and Redux.</p>
                </li>
              </ul>
            </InteractiveCard>

            <InteractiveCard 
              title="Hobbies & Interests" 
              icon={<Heart className="h-5 w-5" />}
              className="md:col-span-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-3">Tech & Coding</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Open source contributions</li>
                    <li>Building side projects</li>
                    <li>Learning new technologies</li>
                    <li>Tech meetups and conferences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">Creative Pursuits</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Digital photography</li>
                    <li>UI/UX design</li>
                    <li>Writing tech articles</li>
                    <li>Playing guitar</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">Lifestyle</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Hiking and nature walks</li>
                    <li>Reading sci-fi and tech books</li>
                    <li>Coffee brewing</li>
                    <li>International travel</li>
                  </ul>
                </div>
              </div>
            </InteractiveCard>
          </div>
        </div>
      </section>

      {/* Experience Timeline (Adjusted for prominence) */}
      <section className="py-16 bg-gray-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-12">
          <SectionHeading
            title="My Journey"
            subtitle="A timeline of my professional experience and education"
            className="mb-12"
          />

          <div className="max-w-4xl mx-auto">
            <TimelineItem
              year="2022 - Present"
              title="Senior Full-Stack Developer at TechCorp"
              description="Leading the development of enterprise web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices."
              icon={<Briefcase className="h-5 w-5 text-blue-400" />}
            />
            <TimelineItem
              year="2020 - 2022"
              title="Full-Stack Developer at WebSolutions"
              description="Developed and maintained multiple client projects using React, Express, and MongoDB. Implemented CI/CD pipelines and improved application performance."
              icon={<Briefcase className="h-5 w-5 text-blue-400" />}
            />
            <TimelineItem
              year="2018 - 2020"
              title="Frontend Developer at StartupX"
              description="Built responsive user interfaces using React and Redux. Collaborated with designers to implement pixel-perfect designs and animations."
              icon={<Code className="h-5 w-5 text-blue-400" />}
            />
            <TimelineItem
              year="2014 - 2018"
              title="BSc in Computer Science"
              description="Graduated with honors from University of Technology. Focused on web development, algorithms, and software engineering."
              icon={<GraduationCap className="h-5 w-5 text-blue-400" />}
            />
            <TimelineItem
              year="2017"
              title="Web Development Certification"
              description="Completed an intensive bootcamp focusing on modern JavaScript frameworks and backend development."
              icon={<Award className="h-5 w-5 text-blue-400" />}
              className="pb-0"
            />
          </div>
        </div>
      </section>

      {/* Skills Section (Adjusted for prominence) */}
      <section className="py-16">
        <div className="container mx-auto px-12">
          <SectionHeading
            title="My Skills"
            subtitle="A curated collection of my technical expertise and abilities"
            className="mb-12"
          />

          <div className="max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Technical Skills */}
                <motion.div
                  className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-300 font-medium text-lg">React.js</p>
                </motion.div>
                <motion.div
                  className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-300 font-medium text-lg">TypeScript</p>
                </motion.div>
                <motion.div
                  className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-300 font-medium text-lg">Next.js</p>
                </motion.div>
                <motion.div
                  className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-300 font-medium text-lg">CSS/Tailwind</p>
                </motion.div>
                <motion.div
                  className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-300 font-medium text-lg">Node.js</p>
                </motion.div>
                <motion.div
                  className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-300 font-medium text-lg">Express.js</p>
                </motion.div>
                <motion.div
                  className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-300 font-medium text-lg">MongoDB</p>
                </motion.div>
                <motion.div
                  className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-300 font-medium text-lg">PostgreSQL</p>
                </motion.div>
                <motion.div
                  className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-300 font-medium text-lg">Git/GitHub</p>
                </motion.div>
                <motion.div
                  className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-300 font-medium text-lg">Docker</p>
                </motion.div>
                <motion.div
                  className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-300 font-medium text-lg">AWS</p>
                </motion.div>
                <motion.div
                  className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-300 font-medium text-lg">CI/CD</p>
                </motion.div>
                {/* Soft Skills */}
                <motion.div
                  className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-300 font-medium text-lg">Problem Solving</p>
                </motion.div>
                <motion.div
                  className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-300 font-medium text-lg">Communication</p>
                </motion.div>
                <motion.div
                  className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-300 font-medium text-lg">Team Collaboration</p>
                </motion.div>
                <motion.div
                  className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-300 font-medium text-lg">Project Management</p>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}