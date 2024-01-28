import { Section } from './components/section';
import {
  commission_1,
  commission_business_card_and_logo,
  commission_character,
  commission_logo,
  commission_painting_1,
  commission_painting_2,
  commission_portrait_1,
  commission_portrait_2,
  commission_portrait_3,
  commission_portrait_4,
  commission_portrait_5,
  commission_portrait_6,
  commission_wedding_1,
  commission_wedding_2,
} from '@/assets/images/commissions';

const images = [
  { alt: 'commission_1', src: commission_1 },
  {
    alt: 'commission_business_card_and_logo',
    src: commission_business_card_and_logo,
  },
  { alt: 'commission_character', src: commission_character },
  { alt: 'commission_logo', src: commission_logo },
  { alt: 'commission_painting_1', src: commission_painting_1 },
  { alt: 'commission_painting_2', src: commission_painting_2 },
  { alt: 'commission_portrait_1', src: commission_portrait_1 },
  { alt: 'commission_portrait_2', src: commission_portrait_2 },
  { alt: 'commission_portrait_3', src: commission_portrait_3 },
  { alt: 'commission_portrait_4', src: commission_portrait_4 },
  { alt: 'commission_portrait_5', src: commission_portrait_5 },
  { alt: 'commission_portrait_6', src: commission_portrait_6 },
  { alt: 'commission_wedding_1', src: commission_wedding_1 },
  { alt: 'commission_wedding_2', src: commission_wedding_2 },
];

export default function Page() {
  return (
    <div>
      <h1>Portfolio</h1>
      <Section title="Beställningar" images={images} />
      <Section title="Beställningar" images={images} />
    </div>
  );
}
