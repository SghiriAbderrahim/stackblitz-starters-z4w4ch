'use client';

import React from 'react';
import AnimeContainer from './AnimeContainer';
import { useSearch } from '@/stores/store';
export default function List() {
  const animeData = useSearch((state) => state.animeData);
  const list = (list) => {
    return list?.map((item) => <AnimeContainer anime={item} />);
  };
  return (
    <div className=" overflow-hidden w-fill grid xl:grid-cols-6  md:grid-cols-4 grid-cols-2 gap-2 p-3">
      
      {list(animeData)}
    </div>
  );
}
