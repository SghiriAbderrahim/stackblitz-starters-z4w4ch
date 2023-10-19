'use client';

import React from 'react';
import { useShow } from '@/stores/store';
import Type from './Type';

export default function FilterContainer() {
  const show = useShow((state) => state.filterShow);
  const setFilterShow = useShow((state) => state.setFilterShow);

  return (
    <div
      className={`${
        !show ? 'hidden' : null
      } grid place-items-center fixed backdrop-opacity-90  top-0 left-0 w-screen h-screen bg-black/60`}
    >
      <div className=" grid grid-rows-6 bg-[var(--color-60)] w-3/4 max-w-[550px] h-4/5 rounded-md ">
        <div className="flex justify-between items-center w-full py-2 px-6 fill-[var(--color-10)] ">
          <p className="font-bold text-xl ">Filter :</p>
        </div>

        <div className=" row-span-5">
          <Type />
        </div>

        <div className=" w-full py-3 pr-4 flex justify-end">
          <button
            onClick={() => {
              setFilterShow(false);
            }}
            className="font-bold hover:bg-[var(--color-30)] text-[var(--color-10)] py-1 px-3 rounded-full "
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
