import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SunriseFillProps = Omit<IconBaseProps, 'children'>;

const SunriseFill = memo(
  forwardRef<SVGSVGElement, SunriseFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sunrise-fill" {...props}>
      <path d="M14 20.13a.88.88 0 0 1 0 1.75h-4a.88.88 0 0 1 0-1.75zM18 16.8a.87.87 0 1 1 0 1.74H6a.88.88 0 0 1 0-1.75zM22 13.46a.88.88 0 0 1 0 1.75H2a.87.87 0 1 1 0-1.75zM12 2.13c4.9 0 8.88 3.97 8.88 8.87 0 .48-.4.88-.88.88H4a.9.9 0 0 1-.87-.88c0-4.9 3.97-8.87 8.87-8.87" />
    </IconBase>
  ))
);

SunriseFill.displayName = 'SunriseFill';

// Triple export pattern (lucide-react style)
export { SunriseFill, SunriseFill as SunriseFillIcon, SunriseFill as SiSunriseFill };
export default SunriseFill;
export type { SunriseFillProps };
