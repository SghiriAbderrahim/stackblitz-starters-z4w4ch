'use client';
import Image from 'next/image';
import React from 'react';
import { Star } from './svgs';
import { usePathname } from 'next/navigation';
export default function AnimeContainer(promps) {
  const { anime } = promps;
  const path = usePathname();
  //
  const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)
  return (
    <div
      className=" relative border-[var(--gr)] aspect-[1/1.5] rounded overflow-hidden relative bg-[var(--gr)] "
      style={{ boxShadow: '0 0 5px var(--shadow)' }}
    >
      <div className="absolute bg-[var(--color-30)] text-[var(--color-10)] font-bold text-sm top-1 left-1 rounded-md py-1 px-2 ">
      {path === '/' ? null : anime.type}
      </div>
      
      <Image
         placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        src={
          path === '/'
            ? anime.entry.images.jpg.large_image_url
            : anime.images.jpg.large_image_url
        }
        width={225}
        height={385}
        alt={path === '/' ? anime.entry.title : anime.title}
        className=" object-fill w-full h-full"
      />
      
      <div className="z-10 w-8 absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-black to-[rgba(0,0,0,0.3)]">
        <p className=" [text-shadow:_0_0_10px_black] text-sm font-medium  w-full h-1/2 truncate text-center px-1">
          {path === '/' ? anime.entry.title : anime.title}
        </p>

        {path === '/' ? (
          <p className="  w-full h-1/2 flex text-[var(--color-10)] text-xs font-bold justify-between p-1">
            {anime.episodes[0].title}
          </p>
        ) : (
          <div className="w-full h-1/2 flex text-xs font-bold justify-between p-1">
            <p className="flex gap-1 fill-yellow-400 text-yellow-400">
              <Star />
              {anime.score}
            </p>
            <p>{anime.aired.prop.from.year}</p>
          </div>
        )}
      </div>
    </div>
  );
}
