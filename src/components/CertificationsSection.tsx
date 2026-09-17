import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type Certification = {
  title: string;
  subtitle: string;
  file: string;
  issuer: string;
};

const CertificationsSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null);

  const certifications: Certification[] = [
    {
      title: 'SkillCraft Technology',
      subtitle: 'Letter of Recommendation',
      file: '/certificates/skillcraft-recommendation.pdf',
      issuer: 'SkillCraft Technology',
    },
    {
      title: 'Microsoft Azure',
      subtitle: 'Global Certification',
      file: '/certificates/azure-global-certification.pdf',
      issuer: 'Microsoft',
    },
    {
      title: 'Introduction to Internet of Things',
      subtitle: 'NPTEL Certification',
      file: '/certificates/nptel-iot.pdf',
      issuer: 'NPTEL',
    },
    {
      title: 'Cloud Computing',
      subtitle: 'NPTEL Certification',
      file: '/certificates/nptel-cloud-computing.pdf',
      issuer: 'NPTEL',
    },
    {
      title: 'Java Programming',
      subtitle: 'Course Completion',
      file: '/certificates/udemy-java.pdf',
      issuer: 'Udemy',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6">
            Continuous learning and professional development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glass-card hover:scale-105 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-primary to-secondary glow-effect">
                      <Award size={24} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg gradient-text mb-2">
                        {cert.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{cert.subtitle}</p>
                      <p className="text-xs text-muted-foreground mt-1 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => setSelectedCertificate(cert)}
                  >
                    <span>
                      View Certificate
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog
        open={selectedCertificate !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedCertificate(null);
        }}
      >
        <DialogContent className="w-[calc(100%-2rem)] max-w-5xl gap-0 overflow-hidden p-0">
          <DialogHeader className="border-b border-border px-6 py-4 pr-12">
            <DialogTitle className="gradient-text">
              {selectedCertificate?.title}
            </DialogTitle>
            <DialogDescription>
              {selectedCertificate?.subtitle} · {selectedCertificate?.issuer}
            </DialogDescription>
          </DialogHeader>
          {selectedCertificate && (
            <div className="h-[70vh] min-h-[420px] bg-muted p-2 sm:p-4">
              <iframe
                src={`${selectedCertificate.file}#view=FitH`}
                title={`${selectedCertificate.title} certificate preview`}
                className="h-full w-full rounded-md border border-border bg-background"
              />
              <a
                href={selectedCertificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="sr-only"
              >
                Open certificate in a new browser tab
              </a>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default CertificationsSection;
