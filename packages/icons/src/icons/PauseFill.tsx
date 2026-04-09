import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseFillProps = Omit<IconBaseProps, 'children'>;

const PauseFill = memo(
  forwardRef<SVGSVGElement, PauseFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="pause-fill" {...props}>
      <path d="M8.75 2.63c1.17 0 2.13.95 2.13 2.12v14.5c0 1.17-.96 2.13-2.13 2.13h-2.5a2.13 2.13 0 0 1-2.12-2.13V4.75c0-1.17.95-2.12 2.12-2.12zM17.75 2.63c1.17 0 2.13.95 2.13 2.12v14.5c0 1.17-.96 2.13-2.13 2.13h-2.5a2.13 2.13 0 0 1-2.12-2.13V4.75c0-1.17.95-2.12 2.12-2.12z" />
    </IconBase>
  ))
);

PauseFill.displayName = 'PauseFill';

// Triple export pattern (lucide-react style)
export { PauseFill, PauseFill as PauseFillIcon, PauseFill as SiPauseFill };
export default PauseFill;
export type { PauseFillProps };
