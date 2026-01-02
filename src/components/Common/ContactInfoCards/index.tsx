'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { CardsGrid, InfoCard, IconContainer, CardValue } from './styles';
import MaskText from '../MaskText';

export interface ContactInfo {
  icon: StaticImageData | string;
  title: string;
  value: string;
  link?: string;
}

interface ContactInfoCardsProps {
  contactInfo: ContactInfo[];
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
};

const ContactInfoCards = ({ contactInfo }: ContactInfoCardsProps) => {
  const cardsRef = useRef(null);
  const isInView = useInView(cardsRef, {
    once: true,
    margin: '-10%',
    amount: 0.4,
  });

  return (
    <CardsGrid ref={cardsRef}>
      {contactInfo.map((info, index) => (
        <InfoCard
          key={index}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={index}
        >
          <IconContainer>
            <Image src={info.icon} alt={info.title} />
          </IconContainer>
          <MaskText phrases={[info.title]} tag="h3" />
          <CardValue href={info.link || '#'}>{info.value}</CardValue>
        </InfoCard>
      ))}
    </CardsGrid>
  );
};

export default ContactInfoCards;
