"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Maximize2, X } from "lucide-react";
import { projects } from "@/db/project";
import { Project } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  containerVariants,
  itemVariants,
  modalVariants,
  overlayVariants,
} from "@/motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

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
