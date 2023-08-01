import * as React from 'react';
import HeadingTitle from '../../typography/HeadingTitle';

export interface IAppProps {
    title:string
}

export default function AttestationSection (props: IAppProps) {
  return (
    <>
       <section className="pl-5 px-10">
          <div className="px-10">
            <HeadingTitle title={props.title} />
          </div>

          <div className="overflow-x-auto">
            <div className=" text-xl">
              <div className="flex gap-3">
                <ul className="flex gap-12 ml-4 px-10">
                  <li className="py-10 hover:bg-yallow_70 hover:text-yallow_150 rounded cursor-pointer ">
                    2020
                  </li>
                  <li className="py-10 hover:bg-yallow_70 hover:text-yallow_150 rounded cursor-pointer">
                    2021
                  </li>
                  <li className="py-10  hover:bg-yallow_70 hover:text-yallow_150 rounded cursor-pointer">
                    2022
                  </li>
                  <li className="py-10  bg-yallow_70 text-yallow_150 rounded cursor-pointer">
                    2023
                  </li>

                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Jan
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Feb
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Mar
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Apr
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    May
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Jun
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Jul
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Aug
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Sep
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Oct
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Nov
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Dec
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
