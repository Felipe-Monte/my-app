import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export default function SectionContainer({ children }: ContainerProps) {
  return <div className="w-full border bg-red-600">{children}</div>;
}
