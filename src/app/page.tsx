import BannerRazer from '@/components/BannerRazer';
import CardsGear from '@/components/CardsGear';
import FirstCardHeader from '@/components/FirstCardHeader';
import Rewards from '@/components/Rewards';
import SocialArea from '@/components/SocialArea';

export default function App() {
  return (
    <div className="w-full">
      <SocialArea />

      <main className="w-full bg-[#212430] px-4">
        <FirstCardHeader />
        <Rewards />
        <CardsGear />
        <BannerRazer />
      </main>
    </div>
  );
}
