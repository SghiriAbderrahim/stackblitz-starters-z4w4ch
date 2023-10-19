import { create } from 'zustand';

export const useSearch = create((set) => ({
  search: '',
  setSearch: (searchValue) =>
    set({ animeData: [], page: 1, search: searchValue }),
  page: 1,
  setPage: () => set((state) => ({ page: state.page + 1 })),
  reset: () => set({ search: '', page: 1, animeData: [] }),
  sort: 'title',
  setSort: (sortValue) => set({ animeData: [], page: 1, sort: sortValue }),
  sortDirection: true,
  setSortDirection: () =>
    set((state) => ({
      animeData: [],
      page: 1,
      sortDirection: !state.sortDirection,
    })),
  animeData: [],
  setAnimeData: (newData) => set({ animeData: newData }),
}));

export const useShow = create((set) => ({
  sortShow: false,
  setSortShow: (show) => set({ sortShow: show }),
  filterShow: false,
  setFilterShow: (show) => set({ filterShow: show }),
}));
