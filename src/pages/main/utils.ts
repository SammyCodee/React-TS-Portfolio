import { Book, Movie, Laptop } from "../../components/basicSelect/types";

export const booksData: Book[] = [
    {
      id: "1",
      title: "Good omens",
      author: "Terry Pratchett & Neil Gaiman",
      value: "Good_Omens_Terry_Neil"
    },
    {
      id: "2",
      title: "The Truth",
      author: "Terry Pratchett",
      value: "The_Truth_Terry"
    }
  ];

export const moviesData: Movie[] = [
    {
      id: "1",
      title: "Captain Marvel",
      releaseDate: "2019",
      value: "Captain_Marvel_2019"
    },
    {
      id: "2",
      title: "Good Omens",
      releaseDate: "2019",
      value: "Good_Omens_2019"
    }
  ];

export const laptopsData: Laptop[] = [
  {
    id: "1",
    model: "Orangebook Pro",
    releaseDate: "2019",
    value: "Orangebook_Pro"
  },
  {
    id: "2",
    model: "Orangebook Pro Extreme",
    releaseDate: "2022",
    value: "Orangebook_Pro_Extreme"
  }
];