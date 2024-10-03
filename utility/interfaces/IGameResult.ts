export interface IGameResult {
  slug: string;
  name: string;
  playtime: number;
  platforms: { platform: { id: number; name: string; slug: string } }[];
  stores: { store: { id: number; name: string; slug: string } }[];
  released: string;
  tba: boolean; // To be announced
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: { id: number; title: string; count: number; percent: number }[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  };
  metacritic: number;
  suggestions_count: number;
  updated: string;
  id: number;
  score: any | undefined;
  clip: any | undefined;
  tags: {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
  }[];
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
    name_en: string;
    name_ru: string;
  } | null;
  user_game: any | null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  short_screenshots: { id: number; image: string }[];
  parent_platforms: { platform: { id: number; name: string; slug: string } }[];
  genres: { id: number; name: string; slug: string }[];
}
