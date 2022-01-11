export interface IBoardGame {
  id: number;
  official_url: string;
  description: string;
  image_url: string;
  name: string;
  description_preview: string;
  year_published: string;
  price: string;
  min_players: number;
  max_players: number;
  min_playtime: number;
  max_playtime: number;
  min_age: number;
}