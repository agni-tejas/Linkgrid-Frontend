// typings/tailwindcss.d.ts
declare module "tailwindcss/lib/util/flattenColorPalette" {
  type ColorValue = string | number | { [key: string]: ColorValue };

  const flattenColorPalette: (
    palette: Record<string, ColorValue>
  ) => Record<string, string>;

  export default flattenColorPalette;
}
