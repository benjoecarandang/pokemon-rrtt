import { useExtractColors } from "../../node_modules/react-extract-colors";

export const generateBackgroundColor = (imageUrl: string) => {
  const { dominantColor } = useExtractColors(imageUrl);
  return dominantColor;
};
