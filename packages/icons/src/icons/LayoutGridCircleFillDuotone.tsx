import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, LayoutGridCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.88 13C9.15 13 11 14.85 11 17.13s-1.85 4.12-4.12 4.12-4.13-1.85-4.13-4.12S4.6 13 6.88 13M17.13 2.75c2.27 0 4.12 1.85 4.12 4.13S19.4 11 17.13 11 13 9.15 13 6.88s1.85-4.13 4.13-4.13" opacity={0.4} />
        <path d="M17.13 13c2.27 0 4.12 1.85 4.12 4.13s-1.85 4.12-4.12 4.12S13 19.4 13 17.13 14.85 13 17.13 13M6.88 2.75C9.15 2.75 11 4.6 11 6.88S9.15 11 6.88 11 2.75 9.15 2.75 6.88 4.6 2.75 6.88 2.75" />
    </IconBase>
  ))
);

LayoutGridCircleFillDuotone.displayName = 'LayoutGridCircleFillDuotone';

// Triple export pattern
export { LayoutGridCircleFillDuotone, LayoutGridCircleFillDuotone as LayoutGridCircleFillDuotoneIcon, LayoutGridCircleFillDuotone as SiLayoutGridCircleFillDuotone };
export default LayoutGridCircleFillDuotone;
export type { LayoutGridCircleFillDuotoneProps };
