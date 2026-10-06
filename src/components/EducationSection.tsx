import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Education = {
  degree: string;
  school: string;
  period: string;
  result: string;
  icon: 'graduation' | 'school' | 'book';
};

const EducationSection = () => {
  const education: Education[] = [
    {
      degree: 'B.E. Computer Science and Engineering',
      school: 'K. Ramakrishnan College of Engineering',
      period: '2023 – 2027',
      result: 'CGPA: 8.482/10',
      icon: 'graduation',
    },
    {
      degree: 'HSC',
      school: 'Kalaimagal Matric Higher Secondary School',
      period: '2022 – 2023',
      result: '93.33%',
      icon: 'school',
    },
    {
      degree: 'SSLC',
      school: 'Kalaimagal Matric Higher Secondary School',
      period: '2020 – 2021',
      result: '100%',
      icon: 'book',
    },
  ];

  const icons = {
    graduation: GraduationCap,
    school: School,
    book: BookOpen,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6"
        >
          {education.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start gap-5 p-6">
                    <div className="shrink-0 p-3 rounded-full bg-gradient-to-br from-primary to-secondary glow-effect">
                      <Icon size={24} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardHeader className="p-0 pb-2">
                        <CardTitle className="text-lg md:text-xl gradient-text">
                          {item.degree}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-foreground break-words">{item.school}</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                          <span className="text-sm text-muted-foreground">{item.period}</span>
                          <span className="text-sm font-semibold text-primary">{item.result}</span>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default EducationSection;
