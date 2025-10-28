import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Event Management System',
      description: 'A comprehensive event management system for organizing and managing events efficiently.',
      tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
      github: 'https://github.com/RithikaU-19/Event-Management-System',
      gradient: 'from-primary to-secondary',
    },
    {
      title: 'Library Management System',
      description: 'A complete library management solution for tracking books, members, and transactions.',
      tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
      github: 'https://github.com/RithikaU-19/Library-Management-System',
      gradient: 'from-secondary to-accent',
    },
    {
      title: 'Online Voting System',
      description: 'A secure online voting platform with authentication and real-time vote counting.',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'],
      github: 'https://github.com/RithikaU-19/Online-Voting-System',
      gradient: 'from-accent to-primary',
    },
    {
      title: 'Temperature Converter',
      description: 'An interactive temperature converter tool supporting Celsius, Fahrenheit, and Kelvin.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/RithikaU-19/SCT_SD_1',
      gradient: 'from-primary to-accent',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6">
            Some of my recent work and side projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={projectVariants}>
              <Card className="glass-card group hover:scale-105 transition-all duration-300 h-full overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 gradient-text">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-muted hover:bg-muted/80"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      View Source
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Effect */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-gradient-to-l from-secondary/20 to-transparent rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default ProjectsSection;
