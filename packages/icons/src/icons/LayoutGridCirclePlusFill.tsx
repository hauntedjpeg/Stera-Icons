import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridCirclePlusFillProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCirclePlusFill = memo(
  forwardRef<SVGSVGElement, LayoutGridCirclePlusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.13 12.88c.48 0 .87.39.87.87v2.5h2.5c.48 0 .88.4.88.88s-.4.87-.88.87H18v2.5c0 .48-.4.88-.87.88-.49 0-.88-.4-.88-.88V18h-2.5c-.48 0-.87-.4-.87-.87 0-.49.39-.88.87-.88h2.5v-2.5c0-.48.4-.87.88-.87M6.88 13C9.15 13 11 14.85 11 17.13s-1.85 4.12-4.12 4.12-4.13-1.85-4.13-4.12S4.6 13 6.88 13M6.88 2.75C9.15 2.75 11 4.6 11 6.88S9.15 11 6.88 11 2.75 9.15 2.75 6.88 4.6 2.75 6.88 2.75M17.13 2.75c2.27 0 4.12 1.85 4.12 4.13S19.4 11 17.13 11 13 9.15 13 6.88s1.85-4.13 4.13-4.13" />
    </IconBase>
  ))
);

LayoutGridCirclePlusFill.displayName = 'LayoutGridCirclePlusFill';

// Triple export pattern
export { LayoutGridCirclePlusFill, LayoutGridCirclePlusFill as LayoutGridCirclePlusFillIcon, LayoutGridCirclePlusFill as SiLayoutGridCirclePlusFill };
export default LayoutGridCirclePlusFill;
export type { LayoutGridCirclePlusFillProps };
