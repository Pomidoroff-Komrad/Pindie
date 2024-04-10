"use client"

import { CardsList } from '../Components/CardsListSection/CardsList';
import { useGetDataByCategory } from '../api/api-hooks';
import { endpoints } from '../api/config';
import { Preloader } from "../Components/Preloader/Preloader";

 export default function Home() {
  const newGames = useGetDataByCategory(endpoints.games, "shooter")
  return (  
    <main className="main-inner">
      {newGames ? (
        <CardsList title="Шутеры" data={newGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
