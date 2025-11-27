const gameUrl = "http://localhost:8000";
export const getGame = async (gameId) => {
  const res = await fetch(`${gameUrl}/games/id/${gameId}`);
  if (!res.ok) throw new Error("Erro fetching game");
  return res.json();
};
