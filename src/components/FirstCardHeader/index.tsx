import Image from 'next/image';

export default function FirstCardHeader() {
  return (
    <div className="w-full h-[176px] bg-[#2F3651] rounded-xl flex">
      <div className="h-full w-[120px]">
        <Image
          height={80}
          width={120}
          className="w-full"
          src="/assets/img/brtt.png"
          alt="image player"
        />
      </div>

      <div className="h-full flex-1 items-center justify-center p-6">
        <h2 className="font-bold text-2xl">brTT paiN</h2>
        <p className="font-medium text-[10px]">
          Fala aê, meu nome é brTT e eu sou profissional de League of Legends.
        </p>
        <span className="font-bold text-[10px] text-[#747DA4]">
          Rio de Janeiro, Brasil
        </span>

        <button className="bg-[#454F76] px-2.5 py-1.5 rounded-[4px]">
          painbrtt@contact.com.br
        </button>
      </div>
    </div>
  );
}
