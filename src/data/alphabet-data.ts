export interface ImageItem {
  src: string;
  word: string;
}

export interface LetterItem {
  letter: string;
  images: ImageItem[];
}

// Using online images from Unsplash and other royalty-free sources
export const LetterData: LetterItem[] = [
  {
    letter: "A",
    images: [
      {
        src: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=500",
        word: "Apple",
      },
      {
        src: "https://images.unsplash.com/photo-1532973497172-04b34d604825?w=500",
        word: "Airplane",
      },
    ],
  },
  {
    letter: "B",
    images: [
      {
        src: "https://images.unsplash.com/photo-1517627043994-b991abb62fc8?w=500",
        word: "Ball",
      },
      {
        src: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=500",
        word: "Banana",
      },
    ],
  },
  {
    letter: "C",
    images: [
      {
        src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500",
        word: "Cat",
      },
      {
        src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500",
        word: "Car",
      },
    ],
  },
  {
    letter: "D",
    images: [
      {
        src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500",
        word: "Dog",
      },
      {
        src: "https://images.unsplash.com/photo-1582845512747-e42001c95638?w=500",
        word: "Duck",
      },
    ],
  },
  {
    letter: "E",
    images: [
      {
        src: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=500",
        word: "Elephant",
      },
      {
        src: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=500",
        word: "Egg",
      },
    ],
  },
  {
    letter: "F",
    images: [
      {
        src: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=500",
        word: "Fish",
      },
      {
        src: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=500",
        word: "Flower",
      },
    ],
  },
  {
    letter: "G",
    images: [
      {
        src: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=500",
        word: "Giraffe",
      },
      {
        src: "https://images.unsplash.com/photo-1596363505729-4190a9506133?w=500",
        word: "Grapes",
      },
    ],
  },
  {
    letter: "H",
    images: [
      {
        src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500",
        word: "House",
      },
      {
        src: "https://images.unsplash.com/photo-1534307250431-ef2530a9d8c5?w=500",
        word: "Horse",
      },
    ],
  },
  {
    letter: "I",
    images: [
      {
        src: "https://images.unsplash.com/photo-1566454419290-57a0589c9c51?w=500",
        word: "Ice Cream",
      },
      {
        src: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=500",
        word: "Igloo",
      },
    ],
  },
  {
    letter: "J",
    images: [
      {
        src: "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=500",
        word: "Jellyfish",
      },
      {
        src: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500",
        word: "Juice",
      },
    ],
  },
  {
    letter: "K",
    images: [
      {
        src: "https://images.unsplash.com/photo-1600034691340-f691a36b7655?w=500",
        word: "Kite",
      },
      {
        src: "https://images.unsplash.com/photo-1564416510675-e7cab5cb5f75?w=500",
        word: "Kangaroo",
      },
    ],
  },
  {
    letter: "L",
    images: [
      {
        src: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=500",
        word: "Lion",
      },
      {
        src: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=500",
        word: "Lemon",
      },
    ],
  },
  {
    letter: "M",
    images: [
      {
        src: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=500",
        word: "Monkey",
      },
      {
        src: "https://images.unsplash.com/photo-1532329683184-6ffd13057d1c?w=500",
        word: "Moon",
      },
    ],
  },
  {
    letter: "N",
    images: [
      {
        src: "https://images.unsplash.com/photo-1518401543587-7cf77d4e26b4?w=500",
        word: "Nest",
      },
      {
        src: "https://images.unsplash.com/photo-1559599076-9c61d8e1b77c?w=500",
        word: "Nose",
      },
    ],
  },
  {
    letter: "O",
    images: [
      {
        src: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=500",
        word: "Orange",
      },
      {
        src: "https://images.unsplash.com/photo-1626471867503-02c93e9b58c7?w=500",
        word: "Owl",
      },
    ],
  },
  {
    letter: "P",
    images: [
      {
        src: "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=500",
        word: "Penguin",
      },
      {
        src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
        word: "Pizza",
      },
    ],
  },
  {
    letter: "Q",
    images: [
      {
        src: "https://images.unsplash.com/photo-1574236170880-658689620112?w=500",
        word: "Queen",
      },
      {
        src: "https://images.unsplash.com/photo-1598040420124-8e5967e208c3?w=500",
        word: "Quilt",
      },
    ],
  },
  {
    letter: "R",
    images: [
      {
        src: "https://images.unsplash.com/photo-1535241749838-299277b6305f?w=500",
        word: "Rabbit",
      },
      {
        src: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=500",
        word: "Robot",
      },
    ],
  },
  {
    letter: "S",
    images: [
      {
        src: "https://images.unsplash.com/photo-1595320929930-4ffd61d11893?w=500",
        word: "Sun",
      },
      {
        src: "https://images.unsplash.com/photo-1581212356451-d6bd04011af9?w=500",
        word: "Snake",
      },
    ],
  },
  {
    letter: "T",
    images: [
      {
        src: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=500",
        word: "Tiger",
      },
      {
        src: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=500",
        word: "Tree",
      },
    ],
  },
  {
    letter: "U",
    images: [
      {
        src: "https://images.unsplash.com/photo-1558213275-a081e2a73f14?w=500",
        word: "Umbrella",
      },
      {
        src: "https://images.unsplash.com/photo-1559375503-15c1ff27f5bf?w=500",
        word: "Unicorn",
      },
    ],
  },
  {
    letter: "V",
    images: [
      {
        src: "https://images.unsplash.com/photo-1529386317747-0a2a51add902?w=500",
        word: "Violin",
      },
      {
        src: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=500",
        word: "Volcano",
      },
    ],
  },
  {
    letter: "W",
    images: [
      {
        src: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=500",
        word: "Watermelon",
      },
      {
        src: "https://images.unsplash.com/photo-1566396223829-30043303cf14?w=500",
        word: "Whale",
      },
    ],
  },
  {
    letter: "X",
    images: [
      {
        src: "https://images.unsplash.com/photo-1551971334-9797623fa317?w=500",
        word: "Xylophone",
      },
      {
        src: "https://images.unsplash.com/photo-1585645568877-692e5490ce89?w=500",
        word: "X-ray",
      },
    ],
  },
  {
    letter: "Y",
    images: [
      {
        src: "https://images.unsplash.com/photo-1557800634-7bf3c7305596?w=500",
        word: "Yellow",
      },
      {
        src: "https://images.unsplash.com/photo-1546768292-f54f29fc6638?w=500",
        word: "Yacht",
      },
    ],
  },
  {
    letter: "Z",
    images: [
      {
        src: "https://images.unsplash.com/photo-1577114995803-d8ce0e2b4aa9?w=500",
        word: "Zebra",
      },
      {
        src: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500",
        word: "Zipper",
      },
    ],
  },
];
