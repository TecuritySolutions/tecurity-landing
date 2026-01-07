'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  ValuesGrid,
  ValueCard,
  IconContainer,
  ValueContent,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrases,
  mobileHeaderPhrases,
  desktopSubPhrases,
  mobileSubPhrases,
  values,
} from './constants';

const ValuesSection = () => {
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
        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard key={index}>
              <IconContainer>
                <Image src={value.icon} alt={value.title} width={48} height={48} />
              </IconContainer>
              <ValueContent>
                <MaskText phrases={[value.title]} tag="h3" />
                <p>{value.description}</p>
              </ValueContent>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Inner>
    </Wrapper>
  );
};

export default ValuesSection;
