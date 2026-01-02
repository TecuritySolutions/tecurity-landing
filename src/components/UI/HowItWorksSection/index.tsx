'use client';
import {
  Wrapper,
  Inner,
  Header,
  StepsGrid,
  Step,
  StepNumber,
  StepTitle,
  StepDescription,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrases,
  mobileHeaderPhrases,
  desktopSubPhrases,
  mobileSubPhrases,
  steps,
} from './constants';

const HowItWorksSection = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Header>
          {isMobile ? (
            <>
              <MaskText phrases={mobileHeaderPhrases} tag="h2" />
              <MaskText phrases={mobileSubPhrases} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={desktopHeaderPhrases} tag="h2" />
              <MaskText phrases={desktopSubPhrases} tag="p" />
            </>
          )}
        </Header>
        <StepsGrid>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepNumber>{step.number}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Step>
          ))}
        </StepsGrid>
      </Inner>
    </Wrapper>
  );
};

export default HowItWorksSection;
