import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  name?: string;
  handle?: string;
  quote?: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
