export interface IMovie {
  id: number;
  title: string;
  releaseDate: string;
  description: string;
  imageUrl: string;
  rating: number;
  genre: string[];
  category: string;
  details?: {
    releaseDate: string;
    runtime: string;
    rating: string;
    originalLanguage: string;
    status: string;
    tagline: string;
    director: string;
    writer: string[] | string;
  };
  cast?: ICastMember[];
}

export interface ICastMember {
  name: string;
  character: string;
  imageUrl: string;
}
