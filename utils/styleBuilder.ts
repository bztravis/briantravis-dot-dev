// returns class name built with given style data
// styleBuilder(["a", "b"]) -> "a b"
// styleBuilder(["a", ["b", condition]]) -> "a b" if condition else "a"
export function styleBuilder(
  styles: (string | [string, boolean] | undefined)[]
) {
  const usedStyles: string[] = [];
  for (const style of styles) {
    if (!style) continue;
    if (typeof style === 'string') usedStyles.push(style);
    else if (style[1]) usedStyles.push(style[0]);
  }
  return usedStyles.join(' ') || undefined;
}
