import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SunriseFillProps = Omit<IconBaseProps, 'children'>;

const SunriseFill = memo(
  forwardRef<SVGSVGElement, SunriseFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 20.13c.48 0 .88.39.88.87s-.4.88-.88.88h-4c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM18 16.8c.48 0 .88.38.88.87 0 .48-.4.87-.88.87H6c-.48 0-.87-.39-.87-.87 0-.49.39-.88.87-.88zM22 13.46c.48 0 .88.39.88.87 0 .49-.4.88-.88.88H2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM12 2.13c4.9 0 8.88 3.97 8.88 8.87 0 .48-.4.88-.88.88H4c-.48 0-.87-.4-.87-.88 0-4.9 3.97-8.87 8.87-8.87" />
    </IconBase>
  ))
);

SunriseFill.displayName = 'SunriseFill';

// Triple export pattern
export { SunriseFill, SunriseFill as SunriseFillIcon, SunriseFill as SiSunriseFill };
export default SunriseFill;
export type { SunriseFillProps };
