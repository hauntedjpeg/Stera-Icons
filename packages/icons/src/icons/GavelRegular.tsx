import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GavelRegularProps = Omit<IconBaseProps, 'children'>;

const GavelRegular = memo(
  forwardRef<SVGSVGElement, GavelRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.66 3.18c.69-.69 1.8-.69 2.48 0l4.24 4.24c.68.68.68 1.8 0 2.47l-.7.71c-.5.5-1.21.63-1.83.41l-.83.83 5.48 5.48c.88.88.88 2.3 0 3.18s-2.3.88-3.18 0l-5.48-5.48-.83.83c.22.62.08 1.33-.4 1.82l-.72.7c-.68.7-1.79.7-2.47 0l-4.24-4.23c-.69-.69-.69-1.8 0-2.48l.7-.7c.5-.5 1.21-.63 1.83-.42l4.84-4.83c-.22-.62-.09-1.33.4-1.83zm1.24 10.78 5.48 5.48c.3.3.77.3 1.06 0s.3-.77 0-1.06l-5.48-5.48zm-7.6-1.94c-.1-.1-.26-.1-.36 0l-.7.7c-.1.1-.1.26 0 .36l4.24 4.24c.1.1.26.1.35 0l.71-.7c.1-.1.1-.26 0-.36zm1.6-.53 3.17 3.18 4.6-4.6-3.18-3.18zm6.18-7.25c-.1-.1-.26-.1-.36 0l-.7.7c-.1.1-.1.26 0 .36l4.24 4.24c.1.1.25.1.35 0l.71-.7c.1-.1.1-.26 0-.36z" clipRule="evenodd" />
    </IconBase>
  ))
);

GavelRegular.displayName = 'GavelRegular';

// Triple export pattern
export { GavelRegular, GavelRegular as GavelRegularIcon, GavelRegular as SiGavelRegular };
export default GavelRegular;
export type { GavelRegularProps };
