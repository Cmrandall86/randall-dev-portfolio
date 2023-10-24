export default function mediaQueries(
  prefix = 'min',
  breakpoints = 'md',
  rangeMin = '',
  rangeMax = ''
) {
  const screens = {
    sm: 576,
    md: 768,
    lg: 1024,
    xl: 1240,
    xxl: 1400,
  };

  let bpCustom = null;

  if (!Object.keys(screens).includes(breakpoints) && typeof breakpoints === 'number') {
    bpCustom = breakpoints;
  }

  if (prefix === 'min') {
    return `@media (min-width: ${screens[breakpoints] || bpCustom}px)`;
  }

  if (prefix === 'max') {
    return `@media (max-width: ${((screens[breakpoints] || bpCustom) - 0.02).toFixed(2)}px)`;
  }

  if (prefix === 'range') {
    return `@media (min-width: ${((screens[rangeMin] || bpCustom) - 0.02).toFixed(2)}px) and (max-width: ${((screens[rangeMax] || bpCustom) - 0.02).toFixed(2)}px)`;
  }
}
