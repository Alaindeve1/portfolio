'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-20">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Get In Touch
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Email Me</h3>
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  your.email@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Call Me</h3>
                <a 
                  href="tel:+1234567890" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">
                  Kigali, Rwanda
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-card p-6 rounded-xl border"
        >
          <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}