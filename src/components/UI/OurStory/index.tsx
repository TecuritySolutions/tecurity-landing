'use client';
import { Wrapper, Inner, Header, ContentGrid, StoryCard, TextContent } from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrases,
  mobileHeaderPhrases,
  desktopSubPhrases,
  mobileSubPhrases,
  storyCards,
} from './constants';

const OurStory = () => {
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
        <ContentGrid>
          {storyCards.map((card, index) => (
            <StoryCard key={index}>
              <TextContent>
                <MaskText phrases={[card.title]} tag="h3" />
                <p>{card.description}</p>
              </TextContent>
            </StoryCard>
          ))}
        </ContentGrid>
      </Inner>
    </Wrapper>
  );
};

export default OurStory;
