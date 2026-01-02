'use client';
import { useState } from 'react';
import { Wrapper, Inner, Header, ContentGrid } from './styles';
import MaskText from '@/components/Common/MaskText';
import ContactForm from '@/components/Common/ContactForm';
import ContactInfoCards from '@/components/Common/ContactInfoCards';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrases,
  mobileHeaderPhrases,
  contactInfo,
} from './constants';

const ContactSection = () => {
  const isMobile = useIsMobile();
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Wrapper>
      <Inner>
        <Header>
          {isMobile ? (
            <MaskText phrases={mobileHeaderPhrases} tag="h1" />
          ) : (
            <MaskText phrases={desktopHeaderPhrases} tag="h1" />
          )}
        </Header>
        <ContentGrid>
          <ContactForm onSuccess={() => setIsSubmitted(true)} />
          <ContactInfoCards contactInfo={contactInfo} />
        </ContentGrid>
      </Inner>
    </Wrapper>
  );
};

export default ContactSection;
