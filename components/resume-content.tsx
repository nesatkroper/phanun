"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"

export default function ResumeContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description:
        "Led the development of the company's flagship web application using React and Next.js. Implemented state management with Redux and optimized performance. Mentored junior developers and conducted code reviews.",
      skills: ["React", "Next.js", "TypeScript", "Redux", "Jest"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2018 - 2021",
      description:
        "Developed and maintained multiple web applications using the MERN stack. Designed and implemented RESTful APIs. Collaborated with UX/UI designers to implement responsive designs.",
      skills: ["MongoDB", "Express", "React", "Node.js", "GraphQL"],
    },
    {
      title: "Web Developer",
      company: "Creative Agency",
      period: "2016 - 2018",
      description:
        "Built responsive websites for clients across various industries. Implemented custom WordPress themes and plugins. Optimized website performance and SEO.",
      skills: ["HTML/CSS", "JavaScript", "WordPress", "PHP", "jQuery"],
    },
  ]

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      period: "2014 - 2016",
      description: "Specialized in Web Technologies and Software Engineering. Graduated with honors.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      period: "2010 - 2014",
      description:
        "Focused on programming fundamentals, data structures, and algorithms. Participated in coding competitions.",
    },
  ]

  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2022",
    },
    {
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2021",
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google",
      date: "2020",
    },
  ]

  return (
    <motion.div className="space-y-8" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div className="flex justify-between items-center" variants={itemVariants}>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Your Name</h1>
          <p className="text-xl text-muted-foreground mt-1">Full Stack Developer</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" /> Download Resume
        </Button>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">your.email@example.com</p>
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
              <div>
                <p className="font-medium">Website</p>
                <p className="text-muted-foreground">yourportfolio.com</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Briefcase className="mr-2 h-5 w-5 text-primary" /> Work Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 md:mt-0">{exp.period}</p>
                </div>
                <p className="my-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <GraduationCap className="mr-2 h-5 w-5 text-primary" /> Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 md:mt-0">{edu.period}</p>
                </div>
                <p className="mt-4">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Award className="mr-2 h-5 w-5 text-primary" /> Certifications
        </h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="font-semibold">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>HTML/CSS</li>
                  <li>JavaScript/TypeScript</li>
                  <li>React/Next.js</li>
                  <li>Redux</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>GraphQL</li>
                  <li>REST APIs</li>
                  <li>Authentication</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Database</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>Redis</li>
                  <li>ORM/ODM</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">DevOps & Tools</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Git/GitHub</li>
                  <li>Docker</li>
                  <li>CI/CD</li>
                  <li>AWS/GCP</li>
                  <li>Testing (Jest, Cypress)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
