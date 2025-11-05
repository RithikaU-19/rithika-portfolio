import { motion } from 'framer-motion';
import { Code2, Database, Palette, Terminal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const skills = [
    { icon: Code2, name: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
    { icon: Terminal, name: 'Backend', items: ['Java', 'C'] },
    { icon: Database, name: 'Database', items: ['MySQL', 'SQL'] },
    { icon: Palette, name: 'Version Control', items: ['Git', 'GitHub'] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm a software developer passionate about{' '}
              <span className="gradient-text font-semibold">learning, building, and improving</span>.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I believe in the power of code to{' '}
              <span className="gradient-text font-semibold">transform ideas into reality</span>,
              solving real-world problems with elegant solutions.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              My journey in tech is driven by{' '}
              <span className="gradient-text font-semibold">curiosity and continuous growth</span>,
              always exploring new technologies and best practices.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <Card className="glass-card hover:scale-105 transition-transform duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-3 rounded-full bg-gradient-to-br from-primary to-secondary glow-effect">
                        <skill.icon size={24} className="text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-lg gradient-text">{skill.name}</h3>
                      <div className="space-y-1">
                        {skill.items.map((item) => (
                          <p key={item} className="text-sm text-muted-foreground">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default AboutSection;
