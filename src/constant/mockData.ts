export const MovieFilterOptions = [
  {label: 'All', value: 'all'},
  {label: 'Now Playing', value: 'now_playing'},
  {label: 'Upcoming', value: 'upcoming'},
  {label: 'Popular', value: 'popular'},
];

export const MovieSortOptions = [
  {label: 'By alphabetical order', value: 'alphabetical'},
  {label: 'By rating', value: 'rating'},
  {label: 'By release date', value: 'release_date'},
];

export const Movies = [
  {
    id: 1,
    title: 'Barbie',
    releaseDate: '2023-07-19',
    description:
      'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi8Qzsk8qwwvt.jpg',
    rating: 7.2,
    genre: ['Comedy', 'Adventure', 'Fantasy'],
    category: 'now_playing',
  },
  {
    id: 2,
    title: 'Oppenheimer',
    releaseDate: '2023-07-21',
    description:
      'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    rating: 8.4,
    genre: ['Drama', 'History', 'Thriller'],
    category: 'now_playing',
  },
  {
    id: 3,
    title: 'The Avengers: Endgame',
    releaseDate: '2019-04-26',
    description:
      'After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    rating: 8.4,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    category: 'popular',
  },
  {
    id: 4,
    title: 'Inception',
    releaseDate: '2010-07-16',
    description:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    rating: 8.8,
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    category: 'popular',
  },
  {
    id: 5,
    title: 'Interstellar',
    releaseDate: '2014-11-07',
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    imageUrl: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    rating: 8.6,
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    category: 'popular',
  },
  {
    id: 6,
    title: 'The Dark Knight',
    releaseDate: '2008-07-18',
    description:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    rating: 9.0,
    genre: ['Action', 'Crime', 'Drama'],
    category: 'popular',
  },
  {
    id: 7,
    title: 'Pulp Fiction',
    releaseDate: '1994-10-14',
    description:
      'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    rating: 8.9,
    genre: ['Crime', 'Drama'],
    category: 'popular',
  },
  {
    id: 8,
    title: 'The Shawshank Redemption',
    releaseDate: '1994-10-14',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    rating: 9.3,
    genre: ['Drama'],
    category: 'popular',
  },
  {
    id: 9,
    title: 'Parasite',
    releaseDate: '2019-05-30',
    description:
      'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    rating: 8.6,
    genre: ['Comedy', 'Drama', 'Thriller'],
    category: 'popular',
  },
  {
    id: 10,
    title: 'Dune',
    releaseDate: '2021-10-22',
    description:
      'Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
    rating: 8.0,
    genre: ['Adventure', 'Sci-Fi'],
    category: 'upcoming',
  },
];
