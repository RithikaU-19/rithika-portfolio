import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticlesBackground from './ParticlesBackground';
import FloatingShape from './FloatingShape';
const portraitUrl = '/rithika-portrait.jpeg';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["I'm a Software Developer", "I'm a Tech Enthusiast", "I'm a Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      {/* Floating 3D Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingShape delay={0} />
        <FloatingShape delay={2} />
        <FloatingShape delay={4} />
      </div>

      <div className="container mx-auto px-4 z-10 pt-20 md:pt-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left order-2 md:order-1">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Rithika</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-20 md:h-24 mb-8"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-semibold text-primary glow-effect"
              >
                {roles[currentRole]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            I'm a passionate software developer who loves turning logic into impactful solutions.
            <br />
            <span className="gradient-text font-semibold">
              Driven by curiosity, creativity, and clean code.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 glow-effect text-lg px-8"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
              onClick={() => scrollToSection('#projects')}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8"
              onClick={() => scrollToSection('#contact')}
            >
              Get in Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center md:justify-start gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors glow-effect p-3 rounded-full glass-card"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors glow-effect p-3 rounded-full glass-card"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:rithika2k2005@gmail.com"
              className="text-foreground hover:text-primary transition-colors glow-effect p-3 rounded-full glass-card"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-lg opacity-70" />
              <img
                src={portraitUrl}
                alt="Rithika Umasankar"
                className="relative w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover object-top border-4 border-background"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary flex justify-center p-2"
        >
          <motion.div className="w-1 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
