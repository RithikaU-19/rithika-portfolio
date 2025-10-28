import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Full Stack Development',
      skills: [
        { name: 'React & Frontend', level: 85 },
        { name: 'Java Backend', level: 80 },
        { name: 'Database Design', level: 75 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'C Programming', level: 80 },
        { name: 'API Development', level: 75 },
      ],
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML & CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Responsive Design', level: 90 },
      ],
    },
    {
      title: 'Database Management',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQL Queries', level: 90 },
        { name: 'Database Optimization', level: 75 },
      ],
    },
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold gradient-text mb-6">
                    {category.title}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-primary">{skill.level}%</span>
                        </div>
                        <Progress
                          value={skill.level}
                          className="h-2 bg-muted"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-accent/20 via-primary/20 to-transparent rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default SkillsSection;
