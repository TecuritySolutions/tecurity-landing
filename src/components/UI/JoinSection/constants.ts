import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "“Tecurity gave us early visibility into credit risk that we never had before.” The predictive insights helped us identify high-risk accounts early and take corrective action. The integration was smooth and the AI explanations were clear and actionable.",
    person: 'Risk & Credit Head, NBFC',
    avatar: robert_fox,
  },
  {
    testimony:
      "“A game-changer for managing trade credit in FMCG distribution.”Tecurity’s retailer credit scoring allowed us to extend stock credit more confidently while protecting our cash flow. It brought structure and intelligence to a very manual process.",
    person: 'Distribution & Finance Lead, FMCG Brand',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "“Strong technology with a deep understanding of real-world credit challenges.” What stood out was the accuracy of the models and the explainable nature of the insights. Tecurity fits well into regulated environments and scales effortlessly.",
    person: 'Chief Technology Officer, Fintech Platform',
    avatar: esther_howard,
  },
];

export const desktopHeaderPhrase = ['Join over 3 million', 'members'];
