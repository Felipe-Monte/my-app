import Image from 'next/image';
import {
  IconDiscord,
  IconMap,
  IconTwitch,
  IconX,
} from '../../../public/assets/svg';

export default function FirstCardHeader() {
  return (
    <div className="w-full h-[176px] bg-[#2F3651] flex-nowrap rounded-xl flex">
      <div className="h-full w-[120px] relative">
        <Image
          fill
          className="object-cover rounded-l-xl"
          src="/assets/img/brtt.png"
          alt="image player"
        />
      </div>

      <div className="h-full flex-1 p-[15px] md:p-[25px]">
        <div className="w-full h-full flex flex-col justify-evenly">
          <h2 className="font-bold text-2xl">brTT paiN</h2>
          <p className="font-medium text-[10px]">
            Fala aê, meu nome é brTT e eu sou profissional de League of Legends.
          </p>

          <div className="flex items-center">
            <IconMap />
            <p className="font-bold text-[10px] text-[#747DA4]">
              Rio de Janeiro, Brasil
            </p>
            <IconX />
            <IconTwitch color='#747DA4'/>
            <IconDiscord color='#747DA4'/>
          </div>

          <button className="bg-[#454F76] px-2.5 py-1 rounded-[4px] font-bold text-[10px] w-[180px]">
            painbrtt@contact.com.br
          </button>
        </div>
      </div>
    </div>
  );
}
