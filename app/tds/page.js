'use client'

import { endpoints } from "@/app/api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function TDS() {
  const tdsGames = useGetDataByCategory(endpoints.games, "TDS");
  return (
    <main className="main-inner">
      {tdsGames && tdsGames.length > 0 ? <CardsListSection id="tds" title="TDS" data={tdsGames} /> : <Preloader />}
    </main>
  );
}