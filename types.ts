export type Room = {
  id: string;
  name: string;
  description: string;
  amenities: string[];
  price: number;
  image: string;
  alt: string;
  note?: string;
};

export type Review = {
  id: string;
  name: string;
  when: string;
  quote: string;
};
