"use client"

import {Banner} from './Components/Banner/Banner';
import {Promo} from './Components/Promo/Promo'; 
import { CardsListSection } from './Components/CardsListSection/CardsListSection';
import { useGetDataByCategory } from './api/api-hooks';
import { endpoints } from './api/config';
import { Preloader } from './Components/Preloader/Preloader';

export default function Home() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular")
  const newGames = useGetDataByCategory(endpoints.games, "new")
  return (
    <main className="main">
      <Banner/>
      {popularGames ? (
        <CardsListSection type="slider" id="popular" title="Популярные" data={popularGames} />
      ) : (
        <Preloader />
      )}
      {newGames ? (
        <CardsListSection type="slider" id="new" title="Новинки" data={newGames} />
      ) : (
        <Preloader />
      )}
      <Promo/>
    </main>
  );
}
