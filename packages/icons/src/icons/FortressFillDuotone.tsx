import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FortressFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FortressFillDuotone = memo(
  forwardRef<SVGSVGElement, FortressFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="fortress-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M4 3.13c.33 0 .63.18.78.48l.76 1.52h.92l.76-1.52.06-.1A.9.9 0 0 1 8 3.12h2c.48 0 .88.39.88.87v4.13h2.24V4c0-.48.4-.87.88-.87h2c.33 0 .63.18.78.48l.76 1.52h.92l.76-1.52.06-.1a.9.9 0 0 1 .72-.38h2c.48 0 .88.39.88.87v15.13h-8.75V17a2.13 2.13 0 0 0-4.26 0v2.13H1.13V4c0-.48.39-.87.87-.87zm2 5.5c-.48 0-.87.39-.87.87V11a.88.88 0 0 0 1.75 0V9.5c0-.48-.4-.87-.88-.87m12 0c-.48 0-.87.39-.87.87V11a.88.88 0 0 0 1.75 0V9.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M10 19.13a.88.88 0 0 1 0 1.75H1a.88.88 0 0 1 0-1.75zM23 19.13a.88.88 0 0 1 0 1.75h-9a.88.88 0 0 1 0-1.75zM6 8.63c.48 0 .88.39.88.87V11a.88.88 0 0 1-1.75 0V9.5c0-.48.39-.87.87-.87M18 8.63c.48 0 .88.39.88.87V11a.88.88 0 0 1-1.75 0V9.5c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

FortressFillDuotone.displayName = 'FortressFillDuotone';

// Triple export pattern (lucide-react style)
export { FortressFillDuotone, FortressFillDuotone as FortressFillDuotoneIcon, FortressFillDuotone as SiFortressFillDuotone };
export default FortressFillDuotone;
export type { FortressFillDuotoneProps };
