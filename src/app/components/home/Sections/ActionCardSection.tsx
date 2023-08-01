import * as React from 'react';
import InfoCard from '../../card/InfoCard';

export interface IActionCardSectionProps {
}

export default function ActionCardSection (props: IActionCardSectionProps) {
  return (
    <>
       <section className="my-5 md:px-10">
          <div className=" flex md:flex-row flex-col md:px-10 items-center">
            <InfoCard
              title="Convert Stablecoin"
              btn="0 fees"
              info="0 transection fee for BUSD/USD"
              image="/coinroundicon.png"
              action="Convert to BUSD >"
              className="flex-1"
            />
            <InfoCard
              title="Convert Stablecoin"
              btn="0 fees"
              info="0 transection fee for BUSD/USD"
              image="/coinroundicon.png"
              action="Convert to BUSD >"
              className="flex-1"
            />
            <InfoCard
              title="Convert Stablecoin"
              btn="0 fees"
              info="0 transection fee for BUSD/USD"
              image="/coinroundicon.png"
              action="Convert to BUSD >"
              className="flex-1"
            />
          </div>
        </section> 
    </>
  );
}
