import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'rithika2k2005@gmail.com', href: 'mailto:rithika2k2005@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 78240 10304', href: 'tel:+917824010304' },
    { icon: MapPin, label: 'Location', value: 'Jayankondam, Tamil Nadu, India', href: null },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 glow-effect">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6">
            Let's create something amazing together
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-full bg-gradient-to-br from-primary to-secondary glow-effect">
                        <info.icon size={24} className="text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-lg font-semibold gradient-text hover:underline break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-semibold gradient-text break-words">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            <Card className="glass-card">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold gradient-text mb-4">Download Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Get a comprehensive overview of my experience and skills
                </p>
                <Button
                  className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 glow-effect"
                  size="lg"
                  asChild
                >
                  <a href="/resume.pdf" download="Rithika_Umasankar_Resume.pdf">
                    Download PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-primary/20 via-secondary/20 to-transparent rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default ContactSection;
