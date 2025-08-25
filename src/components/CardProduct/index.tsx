import Image from 'next/image';

export default function CardProduct() {
  return (
    <div className="w-full h-[140px] rounded-xl bg-[#2F3651] flex">
      <div className="w-[130px] h-full relative">
        <Image
          src="/assets/img/mouse-razer.png"
          fill
          className="object-cover"
          alt="mouse image"
        />
      </div>

      <div className='border flex-1 px-5 items-center justify-center'>

        <div className='border'>
          <p>Mouse</p>
          <p>Razer Deathadder R-X1</p>
          <p>View More</p>
        </div>

      </div>

    </div>
  );
}
