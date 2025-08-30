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
    <div className="flex flex-col gap-3.5">
      {products.map((item, index) => (
        <CardProduct
          key={index}
          image={item.image}
          item={item.item}
          mark={item.mark}
          name={item.name}
        />
      ))}
    </div>
  );
}
