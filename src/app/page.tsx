import FirstCardHeader from '@/components/FirstCardHeader';
import SocialArea from '@/components/SocialArea';

export default function App() {
  return (
    <div className="w-full">
      <SocialArea />

      <main className="w-full bg-[#212430] px-4">
        <FirstCardHeader />
      </main>
    </div>
  );
}
