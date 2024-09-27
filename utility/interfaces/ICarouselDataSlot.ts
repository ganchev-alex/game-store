export default interface CarouselDataSlot {
  gameTitle: string;
  titleLogoUrl: string; // The image log of the game used as a title
  stateTag: string; // Such as: now available, on sale, new update, coming on, etc.
  description: string;
  price: number;
  discount?: number;
  thumb: string;
}
