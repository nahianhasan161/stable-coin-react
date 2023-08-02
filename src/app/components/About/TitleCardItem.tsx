import Image from 'next/image';
import * as React from 'react';

export interface ITitleCardItemProps {
    title:string,
    image:string,
    description:string
}

export default function TitleCardItem (props: ITitleCardItemProps) {
  return (
    <div className="px-10 py-3  flex   sm:flex-row flex-col items-center">
    <Image src={props.image} alt="icon" height={100} width={100} />

    <div className="space-y-1">
      <h1 className="text-black font-bold md:text-lg whitespace-nowrap">{props.title}</h1>
      <p className="text-sm text-offwhite_100 space-y-2 ">{props.description}</p>
    </div>
</div>
  );
}
