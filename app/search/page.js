'use client';

import React, { useState, useEffect } from 'react';
import Load from '../../components/loading';
import List from '../../components/List';
import { useSearch } from '@/stores/store';
export default function Search() {
  const searchValue = useSearch((state) => state.search);
  const setSearchValue = useSearch((state) => state.setSearch);
  const page = useSearch((state) => state.page);
  const setPage = useSearch((state) => state.setPage);
  const animeData = useSearch((state) => state.animeData);
  const setAnimeData = useSearch((state) => state.setAnimeData);
  const sortValue = useSearch((state) => state.sort);
  const sortDirection = useSearch((state) => state.sortDirection);
  const reset = useSearch((state) => state.reset);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  const [error, setError] = useState(null);
  //
  useEffect(() => {
    reset();
  }, []);
  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?min_score=1&q=${searchValue}&order_by=${sortValue}&sort=${
          sortDirection ? 'desc' : 'asc'
        }&page=${page}`
      );
      const data = await response.json();

      setAnimeData([...animeData, ...data.data]);
      setHasNext(data.pagination.has_next_page);
      setPage();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const searching = async () => {
    setSearchValue(document.getElementById('inSearch').value);
  };
  useEffect(() => {
    fetchData();
  }, [searchValue, sortValue, sortDirection]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 50 &&
      !isLoading &&
      hasNext
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <div className="overflow-auto pt-14 flex flex-col">
      <div className=" my-1 flex justify-center w-full gap-2">
        <input
          onInput={() => {
            searching();
          }}
          id="inSearch"
          className="outline-none text-[var(--tx)] text-sm font-bold w-3/4  px-2 py-1 border-2  bg-[var(--gr)] focus:bg-[var(--color-60)] rounded-full border-[var(--gr)] focus:border-[var(--color-10)] "
          type="search"
          placeholder="Search for anime..."
        />
      </div>
      <List />
      {isLoading && <Load />}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
