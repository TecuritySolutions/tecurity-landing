'use client';
import { useState } from 'react';
import {
  Form,
  FormGrid,
  SubmitButton,
  ErrorMessage,
  SuccessMessage,
} from './styles';
import FormInput from '../FormInput';
import FormTextarea from '../FormTextarea';

interface ContactFormProps {
  onSuccess?: () => void;
}

interface FormData {
  name: string;
  email: string;
  contact: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  contact?: string;
  message?: string;
}

const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    contact: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Contact validation
    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact is required';
    } else if (formData.contact.trim().length < 10) {
      newErrors.contact = 'Please enter a valid contact number';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', contact: '', message: '' });
        setErrors({});
        if (onSuccess) onSuccess();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGrid>
        <FormInput
          label="Name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
          required
          placeholder="Enter your full name"
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          error={errors.email}
          required
          placeholder="Enter your email address"
        />
        <FormInput
          label="Contact"
          name="contact"
          type="tel"
          value={formData.contact}
          onChange={(e) =>
            setFormData({ ...formData, contact: e.target.value })
          }
          error={errors.contact}
          required
          placeholder="Enter your phone number"
        />
      </FormGrid>
      <FormTextarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={(e) =>
          setFormData({ ...formData, message: e.target.value })
        }
        error={errors.message}
        rows={6}
        required
        placeholder="Tell us how we can help you..."
      />
      {submitStatus === 'success' && (
        <SuccessMessage>
          Message sent successfully! We&apos;ll get back to you soon.
        </SuccessMessage>
      )}
      {submitStatus === 'error' && (
        <ErrorMessage>
          Failed to send message. Please try again later.
        </ErrorMessage>
      )}
      <SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </SubmitButton>
    </Form>
  );
};

export default ContactForm;
