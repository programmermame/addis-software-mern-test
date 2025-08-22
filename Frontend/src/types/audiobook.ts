export interface IAudiobook {
  _id?: string;
  title: string;
  narrator: string;
  series: string;
  category: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IStats {
  totalAudiobooks: number;
  totalCategories: number;
  totalNarrators: number;
  totalSeries: number;
  categories: { _id: string; count: number }[];
  narrators: { _id: string; count: number }[];
  series: { _id: string; count: number }[];
  seriesPerNarrator: { narrator: string; seriesCount: number }[];
}
