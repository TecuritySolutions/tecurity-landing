'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  GridLayout,
  SolutionCard,
  ImageCtn,
  TextCtn,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import RevealCover from '@/components/Common/RevealCover';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrases,
  mobileHeaderPhrases,
  desktopSubPhrases,
  mobileSubPhrases,
  solutions,
} from './constants';

const SolutionsGrid = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Header>
          {isMobile ? (
            <>
              <MaskText phrases={mobileHeaderPhrases} tag="h1" />
              <MaskText phrases={mobileSubPhrases} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={desktopHeaderPhrases} tag="h1" />
              <MaskText phrases={desktopSubPhrases} tag="p" />
            </>
          )}
        </Header>
        <GridLayout>
          {solutions.map((solution, index) => (
            <SolutionCard key={index}>
              <ImageCtn>
                <RevealCover />
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </ImageCtn>
              <TextCtn>
                <MaskText phrases={[solution.title]} tag="h2" />
                <p>{solution.description}</p>
              </TextCtn>
            </SolutionCard>
          ))}
        </GridLayout>
      </Inner>
    </Wrapper>
  );
};

export default SolutionsGrid;
