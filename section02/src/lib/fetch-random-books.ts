import { BookData } from "@/types";

export default async function fetchRandomBooks(): Promise<BookData[]> {
  const url = "http://onebite-books-server-main-gamma-teal.vercel.app/book/random";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
