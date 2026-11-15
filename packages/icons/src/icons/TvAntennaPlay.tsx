import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TvAntennaPlayRegular } from './TvAntennaPlayRegular.js';
import { TvAntennaPlayRegularDuotone } from './TvAntennaPlayRegularDuotone.js';
import { TvAntennaPlayBold } from './TvAntennaPlayBold.js';
import { TvAntennaPlayBoldDuotone } from './TvAntennaPlayBoldDuotone.js';
import { TvAntennaPlayFill } from './TvAntennaPlayFill.js';
import { TvAntennaPlayFillDuotone } from './TvAntennaPlayFillDuotone.js';

export interface TvAntennaPlayProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TvAntennaPlay - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TvAntennaPlayRegular } from 'stera-icons/icons/TvAntennaPlayRegular';
 */
const TvAntennaPlay = memo(forwardRef<SVGSVGElement, TvAntennaPlayProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <TvAntennaPlayBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TvAntennaPlayBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TvAntennaPlayFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TvAntennaPlayFill ref={ref} {...rest} />;
  if (duotone) return <TvAntennaPlayRegularDuotone ref={ref} {...rest} />;
  return <TvAntennaPlayRegular ref={ref} {...rest} />;
}));

TvAntennaPlay.displayName = 'TvAntennaPlay';

// Triple export pattern
export { TvAntennaPlay, TvAntennaPlay as TvAntennaPlayIcon, TvAntennaPlay as SiTvAntennaPlay };
export default TvAntennaPlay;
