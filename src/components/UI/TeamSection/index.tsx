'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  TeamGrid,
  TeamMember,
  ImageCtn,
  MemberInfo,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import RevealCover from '@/components/Common/RevealCover';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrases,
  mobileHeaderPhrases,
  desktopSubPhrases,
  mobileSubPhrases,
  teamMembers,
} from './constants';

const TeamSection = () => {
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
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember key={index}>
              <ImageCtn>
                <RevealCover />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </ImageCtn>
              <MemberInfo>
                <MaskText phrases={[member.name]} tag="h3" />
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </MemberInfo>
            </TeamMember>
          ))}
        </TeamGrid>
      </Inner>
    </Wrapper>
  );
};

export default TeamSection;
