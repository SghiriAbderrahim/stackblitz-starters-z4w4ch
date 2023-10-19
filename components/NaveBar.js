'use client';
import React, { useState } from 'react';
import { Back, Filter, Search, Menu, Sort } from './svgs';
import Icon from './IconContainer';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SortContainer from './sort/SortContainer';
import FilterContainer from './filter/FilterContainer';
import { useShow, useSearch } from '@/stores/store';

export default function NaveBar() {
  const reset = useSearch((state) => state.reset);
  const path = usePathname();
  const setSortShow = useShow((state) => state.setSortShow);
  const setFilterShow = useShow((state) => state.setFilterShow);
  return (
    <nav
      class=" fixed z-50 left-0 top-0  flex w-screen items-center justify-between p-6 lg:px-8 h-8 bg-[var(--color-60)] border-b border-[var(--gr)]"
      aria-label="Global"
    >
      <SortContainer />
      <FilterContainer />
      <div className="flex gap-2">
        {path !== '/' ? (
          <Link href="/">
            <Icon
              Action={() => {
                reset();
              }}
              icon={<Back />}
            ></Icon>
          </Link>
        ) : null}

        {path === '/' ? (
          <Link href="/search">
            <Icon
              Action={() => {
                reset();
              }}
              icon={<Search />}
            ></Icon>
          </Link>
        ) : null}
      </div>
      <div className="flex gap-2">
        {path === '/search' ? (
          <Icon
            Action={() => {
              setSortShow(true);
            }}
            icon={<Sort />}
          ></Icon>
        ) : null}
        {path === '/search' ? (
          <Icon
            Action={() => {
              setFilterShow(true);
            }}
            icon={<Filter />}
          ></Icon>
        ) : null}
        {path === '/search' ? null : (
          <Icon
            Action={() => {
              console.log('menu');
            }}
            icon={<Menu />}
          ></Icon>
        )}
      </div>
    </nav>
  );
}
