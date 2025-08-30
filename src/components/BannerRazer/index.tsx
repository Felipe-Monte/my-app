import Image from 'next/image';

export default function BannerRazer() {
  return (
    <div className="w-full rounded-3xl bg-[#111111] h-[200px] my-6 relative">
      <Image
        src="/assets/img/banner-razer.png"
        alt="banner image"
        fill
        className="object-contain rounded-3xl"
      />
    </div>
  );
}
