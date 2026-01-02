import ic_email from '../../../../public/svgs/ic_email.svg';
import ic_phone from '../../../../public/svgs/ic_phone.svg';
import ic_location from '../../../../public/svgs/ic_location.svg';

export const desktopHeaderPhrases = ['Get in Touch'];
export const mobileHeaderPhrases = ['Get in', 'Touch'];

export const contactInfo = [
  {
    icon: ic_email,
    title: 'Email',
    value: 'contact@tecurity.com',
    link: 'mailto:contact@tecurity.com',
  },
  {
    icon: ic_phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: ic_location,
    title: 'Address',
    value: '123 Financial Street, New York, NY 10001',
    link: 'https://maps.google.com/?q=123+Financial+Street+New+York+NY',
  },
];
