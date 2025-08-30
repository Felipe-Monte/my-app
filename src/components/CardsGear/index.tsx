import CardProduct from '../CardProduct';

const products = [
  {
    image: '/assets/img/mouse-razer.png',
    item: 'Mouse',
    mark: 'Razer',
    name: 'Deathadder R-X1',
  },
  {
    image: '/assets/img/keyboard-razer.png',
    item: 'Keyboard',
    mark: 'Razer',
    name: 'Blackwidow Chroma 2.0',
  },
  {
    image: '/assets/img/headset-razer.png',
    item: 'Headset',
    mark: 'Razer',
    name: 'Kraken X',
  },
];

export default function CardsGear() {
  return (
    <div className="w-full h-[486px]">
      <h2 className="font-bold text-xl mb-2.5">MEU GEAR</h2>

      <main className="flex flex-col gap-3.5">
        {products.map((item, index) => (
          <CardProduct
            key={index}
            image={item.image}
            item={item.item}
            mark={item.mark}
            name={item.name}
          />
        ))}
      </main>
    </div>
  );
}
