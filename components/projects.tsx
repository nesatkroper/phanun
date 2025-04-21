"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Maximize2, X } from "lucide-react";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  details: string;
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const projects: Project[] = [
    {
      id: "project1",
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart, and checkout functionality.",
      image: "/placeholder.svg?height=400&width=600",
      category: ["frontend", "fullstack"],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Stripe",
        "MongoDB",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
      details:
        "This e-commerce platform features a responsive design, user authentication, product filtering, shopping cart functionality, and secure checkout with Stripe integration. The admin dashboard allows for product and order management. Built with Next.js for server-side rendering and optimized performance.",
    },
    {
      id: "project2",
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates.",
      image: "/placeholder.svg?height=400&width=600",
      category: ["frontend", "fullstack"],
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
      details:
        "This task management application allows teams to collaborate on projects in real-time. Features include drag-and-drop task organization, commenting, file attachments, and user permissions. The real-time functionality is implemented using Socket.io, while the backend API is built with Node.js and Express.",
    },
    {
      id: "project3",
      title: "Weather Dashboard",
      description:
        "A weather dashboard that displays current and forecasted weather data.",
      image: "/placeholder.svg?height=400&width=600",
      category: ["frontend"],
      technologies: ["React", "Chart.js", "OpenWeather API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
      details:
        "This weather dashboard provides users with current weather conditions and a 7-day forecast for any location. It features interactive charts for temperature, humidity, and wind speed trends. The application uses the OpenWeather API for data and implements client-side caching to minimize API calls.",
    },
    {
      id: "project4",
      title: "Content Management System",
      description:
        "A headless CMS for managing digital content across multiple platforms.",
      image: "/placeholder.svg?height=400&width=600",
      category: ["backend", "fullstack"],
      technologies: ["Node.js", "Express", "MongoDB", "GraphQL"],
      githubUrl: "https://github.com/yourusername/project",
      details:
        "This headless CMS provides a flexible backend for managing content across websites, mobile apps, and other digital platforms. It features a GraphQL API, role-based access control, content versioning, and media management. The system is designed to be extensible with a plugin architecture.",
    },
    {
      id: "project5",
      title: "Fitness Tracking App",
      description:
        "A mobile-first application for tracking workouts and nutrition.",
      image: "/placeholder.svg?height=400&width=600",
      category: ["frontend", "mobile"],
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
      details:
        "This fitness tracking application allows users to log workouts, track nutrition, set goals, and view progress over time. It features customizable workout plans, a barcode scanner for food logging, and social sharing capabilities. The app uses Firebase for authentication and real-time database functionality.",
    },
    {
      id: "project6",
      title: "API Gateway Service",
      description:
        "A microservice gateway for routing and authenticating API requests.",
      image: "/placeholder.svg?height=400&width=600",
      category: ["backend"],
      technologies: ["Node.js", "Express", "Redis", "Docker"],
      githubUrl: "https://github.com/yourusername/project",
      details:
        "This API gateway service provides a unified entry point for microservices architecture. It handles request routing, authentication, rate limiting, and request/response transformation. The service is containerized with Docker and uses Redis for caching and rate limiting.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory));

  return (
    <section id='projects' className='py-20'>
      <div className='px-4 md:px-6'>
        <motion.div
          className='space-y-12'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}>
          <motion.div className='text-center space-y-4' variants={itemVariants}>
            <h2 className='text-3xl md:text-4xl font-bold'>My Projects</h2>
            <div className='w-20 h-1 bg-primary mx-auto rounded-full'></div>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              {`Here are some of the projects I've worked on. Click on a project to learn more.`}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs
              defaultValue='all'
              className='w-full'
              onValueChange={setActiveCategory}>
              <div className='flex justify-center mb-8'>
                <TabsList>
                  <TabsTrigger value='all'>All</TabsTrigger>
                  <TabsTrigger value='frontend'>Frontend</TabsTrigger>
                  <TabsTrigger value='backend'>Backend</TabsTrigger>
                  <TabsTrigger value='fullstack'>Full Stack</TabsTrigger>
                  <TabsTrigger value='mobile'>Mobile</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value={activeCategory} className='mt-0'>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}>
                      <Card className='h-full overflow-hidden group'>
                        <div className='relative h-48 overflow-hidden'>
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className='object-cover transition-transform duration-300 group-hover:scale-105'
                          />
                          <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                            <Button
                              variant='secondary'
                              size='icon'
                              onClick={() => setSelectedProject(project)}>
                              <Maximize2 className='h-5 w-5' />
                            </Button>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className='flex flex-wrap gap-2 mt-2'>
                            {project.technologies.slice(0, 3).map((tech) => (
                              <Badge
                                key={tech}
                                variant='outline'
                                className='text-xs'>
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 3 && (
                              <Badge variant='outline' className='text-xs'>
                                +{project.technologies.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter className='flex justify-between'>
                          <Button
                            variant='ghost'
                            size='sm'
                            onClick={() => setSelectedProject(project)}>
                            View Details
                          </Button>
                          <div className='flex gap-2'>
                            {project.githubUrl && (
                              <Button variant='outline' size='icon' asChild>
                                <a
                                  href={project.githubUrl}
                                  target='_blank'
                                  rel='noopener noreferrer'>
                                  <Github className='h-4 w-4' />
                                  <span className='sr-only'>GitHub</span>
                                </a>
                              </Button>
                            )}
                            {project.liveUrl && (
                              <Button variant='outline' size='icon' asChild>
                                <a
                                  href={project.liveUrl}
                                  target='_blank'
                                  rel='noopener noreferrer'>
                                  <ExternalLink className='h-4 w-4' />
                                  <span className='sr-only'>Live Demo</span>
                                </a>
                              </Button>
                            )}
                          </div>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              className='fixed inset-0 bg-background/80 backdrop-blur-sm z-50'
              initial='hidden'
              animate='visible'
              exit='exit'
              variants={overlayVariants}
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              className='fixed inset-0 z-50 flex items-center justify-center p-4'
              initial='hidden'
              animate='visible'
              exit='exit'
              variants={modalVariants}>
              <div className='bg-card w-full max-w-3xl max-h-[90vh] overflow-auto rounded-lg shadow-lg'>
                <div className='relative h-64 sm:h-80'>
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className='object-cover'
                  />
                  <Button
                    variant='ghost'
                    size='icon'
                    className='absolute top-2 right-2 bg-background/50 backdrop-blur-sm hover:bg-background/70'
                    onClick={() => setSelectedProject(null)}>
                    <X className='h-5 w-5' />
                  </Button>
                </div>
                <div className='p-6'>
                  <h3 className='text-2xl font-bold mb-2'>
                    {selectedProject.title}
                  </h3>
                  <p className='text-muted-foreground mb-4'>
                    {selectedProject.description}
                  </p>

                  <div className='mb-6'>
                    <h4 className='text-lg font-semibold mb-2'>
                      Project Details
                    </h4>
                    <p>{selectedProject.details}</p>
                  </div>

                  <div className='mb-6'>
                    <h4 className='text-lg font-semibold mb-2'>
                      Technologies Used
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant='secondary'>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className='flex gap-4'>
                    {selectedProject.githubUrl && (
                      <Button asChild>
                        <a
                          href={selectedProject.githubUrl}
                          target='_blank'
                          rel='noopener noreferrer'>
                          <Github className='mr-2 h-4 w-4' /> View Code
                        </a>
                      </Button>
                    )}
                    {selectedProject.liveUrl && (
                      <Button asChild variant='outline'>
                        <a
                          href={selectedProject.liveUrl}
                          target='_blank'
                          rel='noopener noreferrer'>
                          <ExternalLink className='mr-2 h-4 w-4' /> Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
