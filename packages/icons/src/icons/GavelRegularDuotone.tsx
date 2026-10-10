import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GavelRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GavelRegularDuotone = memo(
  forwardRef<SVGSVGElement, GavelRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.55 5.7q.13.37.4.66l.54.53-4.6 4.6 3.18 3.18 4.6-4.6.53.53q.29.3.65.41l-.83.83 5.48 5.48c.88.88.88 2.3 0 3.18s-2.3.88-3.18 0l-5.48-5.48-.83.83q-.13-.36-.4-.65l-4.25-4.24q-.3-.3-.65-.41zm2.35 8.26 5.48 5.48c.3.3.77.3 1.06 0s.3-.77 0-1.06l-5.48-5.48z" clipRule="evenodd" opacity={0.4} />
        <path d="M14.27 7.55 12.02 5.3z" opacity={0.4} />
        <path fillRule="evenodd" d="M3.88 10.96c.69-.69 1.8-.69 2.48 0l4.24 4.24c.69.68.68 1.79 0 2.47l-.7.7c-.69.7-1.8.7-2.48 0l-4.24-4.23c-.69-.69-.69-1.8 0-2.48zm1.42 1.06c-.1-.1-.26-.1-.36 0l-.7.7c-.1.1-.1.26 0 .36l4.24 4.24c.1.1.26.1.35 0l.71-.7c.1-.1.1-.26 0-.36zM11.66 3.18c.69-.69 1.8-.69 2.48 0l4.24 4.24c.68.68.68 1.8 0 2.47l-.7.71c-.69.69-1.8.69-2.48 0l-4.24-4.24c-.69-.68-.69-1.8 0-2.48zm1.42 1.06c-.1-.1-.26-.1-.36 0l-.7.7c-.1.1-.1.26 0 .36l4.24 4.24c.1.1.25.1.35 0l.71-.7c.1-.1.1-.26 0-.36z" clipRule="evenodd" />
    </IconBase>
  ))
);

GavelRegularDuotone.displayName = 'GavelRegularDuotone';

// Triple export pattern
export { GavelRegularDuotone, GavelRegularDuotone as GavelRegularDuotoneIcon, GavelRegularDuotone as SiGavelRegularDuotone };
export default GavelRegularDuotone;
export type { GavelRegularDuotoneProps };
