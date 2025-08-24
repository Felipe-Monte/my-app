import { IconDol, IconTrophy, IconUser } from '../../../public/assets/svg';

export default function Rewards() {
  return (
    <div className=" w-full h-[114px] bg-[#212430] flex items-center justify-around">
      <div className="flex flex-col items-center justify-center min-w-[100px]">
        <span>
          <IconTrophy />
        </span>
        <span className="font-bold text-4xl">124</span>
        <span className="font-medium text-xs text-[#747DA4]">Campeonatos</span>
      </div>

      <div className="flex flex-col items-center justify-center min-w-[100px]">
        <span>
          <IconUser />
        </span>
        <span className="font-bold text-4xl">2.6M</span>
        <span className="font-medium text-xs text-[#747DA4]">Seguidores</span>
      </div>

      <div className="flex flex-col items-center justify-center min-w-[100px]">
        <span>
          <IconDol />
        </span>
        <span className="font-bold text-4xl">14M</span>
        <span className="font-medium text-xs text-[#747DA4]">
          Recompensados
        </span>
      </div>
    </div>
  );
}
