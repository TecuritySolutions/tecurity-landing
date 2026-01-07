'use client';
import { Wrapper, Inner, Pill, HeroTextContainer } from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeroPhrases,
  mobileHeroPhrases,
  desktopSubPhrases,
  mobileSubPhrases,
} from './constants';

const AboutHero = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Pill>🌟 Our Journey</Pill>
        <HeroTextContainer>
          {isMobile ? (
            <>
              <MaskText phrases={mobileHeroPhrases} tag="h1" />
              <MaskText phrases={mobileSubPhrases} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={desktopHeroPhrases} tag="h1" />
              <MaskText phrases={desktopSubPhrases} tag="p" />
            </>
          )}
        </HeroTextContainer>
      </Inner>
    </Wrapper>
  );
};

export default AboutHero;
