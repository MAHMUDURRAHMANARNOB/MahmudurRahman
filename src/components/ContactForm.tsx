import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Copy, Mail } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('mahmudur.rahman2023@gmail.com');
      toast.success('Email copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy email');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recaptchaValue) {
      toast.error('Please complete the reCAPTCHA');
      return;
    }

    setIsSubmitting(true);

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          formRef.current,
          'YOUR_PUBLIC_KEY'
        );
        toast.success('Message sent successfully!');
        formRef.current.reset();
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/3"
        >
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="flex items-center gap-4 mb-4">
            <Mail className="text-primary" size={20} />
            <span className="text-gray-600 dark:text-gray-300">mahmudur.rahman2023@gmail.com</span>
            <button
              onClick={copyEmail}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Copy email"
            >
              <Copy size={16} />
            </button>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-2/3 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-700"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-700"
            ></textarea>
          </div>

          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={(value) => setRecaptchaValue(value)}
          />

          <button
            type="submit"
            disabled={isSubmitting || !recaptchaValue}
            className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </div>
  );
}