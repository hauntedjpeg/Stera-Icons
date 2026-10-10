import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SunriseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SunriseFillDuotone = memo(
  forwardRef<SVGSVGElement, SunriseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 20.13c.48 0 .88.39.88.87s-.4.88-.88.88h-4c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM18 16.8c.48 0 .88.38.88.87 0 .48-.4.87-.88.87H6c-.48 0-.87-.39-.87-.87 0-.49.39-.88.87-.88zM22 13.46c.48 0 .88.39.88.87 0 .49-.4.88-.88.88H2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" opacity={0.4} />
        <path d="M12 2.13c4.9 0 8.88 3.97 8.88 8.87 0 .48-.4.88-.88.88H4c-.48 0-.87-.4-.87-.88 0-4.9 3.97-8.87 8.87-8.87" />
    </IconBase>
  ))
);

SunriseFillDuotone.displayName = 'SunriseFillDuotone';

// Triple export pattern
export { SunriseFillDuotone, SunriseFillDuotone as SunriseFillDuotoneIcon, SunriseFillDuotone as SiSunriseFillDuotone };
export default SunriseFillDuotone;
export type { SunriseFillDuotoneProps };
