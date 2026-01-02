'use client';
import { Wrapper, Inner, Pill, HeroTextContainer } from './styles';
import MaskText from '@/components/Common/MaskText';
import GetStartedButton from '@/components/Common/GetStartedButton';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeroPhrases,
  mobileHeroPhrases,
  desktopSubPhrases,
  mobileSubPhrases,
} from './constants';

const SolutionsHero = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Pill>🤖 AI-Powered Solutions</Pill>
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
        <GetStartedButton padding="1rem 2rem" />
      </Inner>
    </Wrapper>
  );
};

export default SolutionsHero;
