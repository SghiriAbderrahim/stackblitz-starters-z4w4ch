'use client';

import React from 'react';
import Option from './Option';


export default function Type() {
return(
  <div className="w-full flex justify-center item-center">
<select class=" appearance-none accent-pink-500 bg-[var(--color-60)] border border-[var(--gr)] rounded-sm focus:ring-[var(--color-10)] focus:border-[var(--color-10)] block w-3/4 px-2 py-1 text-center font-semibold overflow-hidden selection:text-[var(--color-10)] ">
  <Option value="all" name="All" />
  <Option value="tv" name="Tv" />
  <Option value="movie" name="Movie" />
  <Option value="ova" name="Ova" />
  <Option value="special" name="Special" />
  <Option value="ona" name="Ona" />
</select>
  </div>
)
}