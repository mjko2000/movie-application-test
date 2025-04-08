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
      'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
    imageUrl:
      'https://static.wikia.nocookie.net/filmguide/images/9/98/Barbie_2023_film.jpg',
    rating: 7.4,
    genre: ['Comedy', 'Adventure', 'Fantasy'],
    category: 'now_playing',
    details: {
      releaseDate: '20/07/2023 (SG)',
      runtime: '1h 54m',
      rating: 'PG13',
      originalLanguage: 'English',
      status: 'Released',
      tagline: "She's everything. He's just Ken.",
      director: 'Greta Gerwig',
      writer: ['Greta Gerwig', 'Noah Baumbach'],
    },
    cast: [
      {
        name: 'Margot Robbie',
        character: 'Barbie',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/euDPyqLnuwaWMHajcH5Soc4c4GC.jpg',
      },
      {
        name: 'Ryan Gosling',
        character: 'Ken',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/lyUyVARQKhGxJpZm2yPJtGpYwdI.jpg',
      },
      {
        name: 'America Ferrera',
        character: 'Gloria',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/vQBsQw7Kqpao0Hj9GapQsY6lN6b.jpg',
      },
    ],
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
    details: {
      releaseDate: '21/07/2023 (US)',
      runtime: '3h 0m',
      rating: 'R',
      originalLanguage: 'English',
      status: 'Released',
      tagline: 'The world forever changes',
      director: 'Christopher Nolan',
      writer: ['Christopher Nolan'],
    },
    cast: [
      {
        name: 'Cillian Murphy',
        character: 'J. Robert Oppenheimer',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/llkbyWKwpfowZ6C8peBjIV9jj99.jpg',
      },
      {
        name: 'Emily Blunt',
        character: 'Katherine Oppenheimer',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/xDc5SSvoyenXnGxnd1jvk6xtF1T.jpg',
      },
      {
        name: 'Robert Downey Jr.',
        character: 'Lewis Strauss',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/im9SAqJPZKEbVZGmjXuLI4O7RvM.jpg',
      },
    ],
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
    details: {
      releaseDate: '26/04/2019 (US)',
      runtime: '3h 1m',
      rating: 'PG-13',
      originalLanguage: 'English',
      status: 'Released',
      tagline: 'Part of the journey is the end',
      director: 'Anthony Russo, Joe Russo',
      writer: ['Christopher Markus', 'Stephen McFeely'],
    },
    cast: [
      {
        name: 'Robert Downey Jr.',
        character: 'Tony Stark / Iron Man',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/im9SAqJPZKEbVZGmjXuLI4O7RvM.jpg',
      },
      {
        name: 'Chris Evans',
        character: 'Steve Rogers / Captain America',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/3bOGNsHlrswhyW79uvIHH1V43JI.jpg',
      },
      {
        name: 'Mark Ruffalo',
        character: 'Bruce Banner / Hulk',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/5GilHMOq2qZbTdrPZHnVyPBfgKJ.jpg',
      },
    ],
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
    details: {
      releaseDate: '16/07/2010 (US)',
      runtime: '2h 28m',
      rating: 'PG-13',
      originalLanguage: 'English',
      status: 'Released',
      tagline: 'Your mind is the scene of the crime',
      director: 'Christopher Nolan',
      writer: ['Christopher Nolan'],
    },
    cast: [
      {
        name: 'Leonardo DiCaprio',
        character: 'Dom Cobb',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg',
      },
      {
        name: 'Joseph Gordon-Levitt',
        character: 'Arthur',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/4U9G4YwTlIEbAymBaseltS44nzm.jpg',
      },
      {
        name: 'Ellen Page',
        character: 'Ariadne',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/uQYUfGvOZkB5x25Z19UeyLABHmr.jpg',
      },
    ],
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
    details: {
      releaseDate: '07/11/2014 (US)',
      runtime: '2h 49m',
      rating: 'PG-13',
      originalLanguage: 'English',
      status: 'Released',
      tagline: 'Mankind was born on Earth. It was never meant to die here.',
      director: 'Christopher Nolan',
      writer: ['Christopher Nolan', 'Jonathan Nolan'],
    },
    cast: [
      {
        name: 'Matthew McConaughey',
        character: 'Cooper',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/wJiGedOCZhwMx9DezCITfT3yD5h.jpg',
      },
      {
        name: 'Anne Hathaway',
        character: 'Amelia Brand',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/tLelKoPNiyJCSEtQTz1FGrqp9bt.jpg',
      },
      {
        name: 'Jessica Chastain',
        character: 'Murphy Cooper',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/lodMzLKSdrPcBry6TdoDsMN3Vge.jpg',
      },
    ],
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
    details: {
      releaseDate: '18/07/2008 (US)',
      runtime: '2h 32m',
      rating: 'PG-13',
      originalLanguage: 'English',
      status: 'Released',
      tagline: 'Why so serious?',
      director: 'Christopher Nolan',
      writer: ['Jonathan Nolan', 'Christopher Nolan', 'David S. Goyer'],
    },
    cast: [
      {
        name: 'Christian Bale',
        character: 'Bruce Wayne / Batman',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/83o3koL82jt30EJ0rz4Bnzrt2dd.jpg',
      },
      {
        name: 'Heath Ledger',
        character: 'Joker',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/5YnQyXwbGmcmUNKgDSjyD0hPaLA.jpg',
      },
      {
        name: 'Aaron Eckhart',
        character: 'Harvey Dent / Two-Face',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/vkkJStWFYwFFqOeYKnHdUCFOF1e.jpg',
      },
    ],
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
    details: {
      releaseDate: '14/10/1994 (US)',
      runtime: '2h 34m',
      rating: 'R',
      originalLanguage: 'English',
      status: 'Released',
      tagline: "You won't know the facts until you've seen the fiction",
      director: 'Quentin Tarantino',
      writer: ['Quentin Tarantino', 'Roger Avary'],
    },
    cast: [
      {
        name: 'John Travolta',
        character: 'Vincent Vega',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/bUe7TlzRBXFB6I7ezQbCJCnvnee.jpg',
      },
      {
        name: 'Samuel L. Jackson',
        character: 'Jules Winnfield',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/nCJJ3NVksYNxIzEHcyC1XziwPVj.jpg',
      },
      {
        name: 'Uma Thurman',
        character: 'Mia Wallace',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/6KxiEWyIDpz1ikmD7nv3GTX4Uoj.jpg',
      },
    ],
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
    details: {
      releaseDate: '14/10/1994 (US)',
      runtime: '2h 22m',
      rating: 'R',
      originalLanguage: 'English',
      status: 'Released',
      tagline: 'Fear can hold you prisoner. Hope can set you free.',
      director: 'Frank Darabont',
      writer: ['Frank Darabont', 'Stephen King'],
    },
    cast: [
      {
        name: 'Tim Robbins',
        character: 'Andy Dufresne',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/A4fRB4aZyS5rQ8MoLzWZQGDx5jZ.jpg',
      },
      {
        name: 'Morgan Freeman',
        character: "Ellis Boyd 'Red' Redding",
        imageUrl:
          'https://image.tmdb.org/t/p/w500/oIciQWr8VwKoR8TmAw1owaiZFyb.jpg',
      },
      {
        name: 'Bob Gunton',
        character: 'Warden Norton',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/ffcx4jD3GhVGS8FDyyJkc2L8w1B.jpg',
      },
    ],
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
    details: {
      releaseDate: '30/05/2019 (KR)',
      runtime: '2h 12m',
      rating: 'R',
      originalLanguage: 'Korean',
      status: 'Released',
      tagline: 'Act like you own the place.',
      director: 'Bong Joon-ho',
      writer: ['Bong Joon-ho', 'Han Jin-won'],
    },
    cast: [
      {
        name: 'Song Kang-ho',
        character: 'Kim Ki-taek',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/jVsJkVKFvuCcH9ncyfXGWVMLBpo.jpg',
      },
      {
        name: 'Lee Sun-kyun',
        character: 'Park Dong-ik',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/qngHlxcdZQvMg2ffTjRXyX3E9Fz.jpg',
      },
      {
        name: 'Cho Yeo-jeong',
        character: 'Choi Yeon-gyo',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/kUH7pxdDhIRymrbMwfD9eLVWAq1.jpg',
      },
    ],
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
    details: {
      releaseDate: '22/10/2021 (US)',
      runtime: '2h 35m',
      rating: 'PG-13',
      originalLanguage: 'English',
      status: 'Released',
      tagline: 'Beyond fear, destiny awaits.',
      director: 'Denis Villeneuve',
      writer: ['Jon Spaihts', 'Denis Villeneuve', 'Eric Roth'],
    },
    cast: [
      {
        name: 'Timothée Chalamet',
        character: 'Paul Atreides',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/BE2sdjpgsa2rjqbfJPI8MG2b0Ec.jpg',
      },
      {
        name: 'Rebecca Ferguson',
        character: 'Lady Jessica Atreides',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/lJloTOheuQS90jXwKUxz9bmSUWo.jpg',
      },
      {
        name: 'Oscar Isaac',
        character: 'Duke Leto Atreides',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/dW5U5yrIIPmMjRThR9KT2xH6nTz.jpg',
      },
    ],
  },
];
