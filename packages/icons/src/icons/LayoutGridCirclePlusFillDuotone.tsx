import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridCirclePlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCirclePlusFillDuotone = memo(
  forwardRef<SVGSVGElement, LayoutGridCirclePlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.13 12.75c.55 0 1 .45 1 1v2.38h2.37c.55 0 1 .44 1 1 0 .55-.45 1-1 1h-2.37v2.37c0 .55-.45 1-1 1-.56 0-1-.45-1-1v-2.37h-2.38c-.55 0-1-.45-1-1 0-.56.45-1 1-1h2.38v-2.38c0-.55.44-1 1-1" opacity={.4} />
        <path d="M6.88 12.88c2.34 0 4.25 1.9 4.25 4.24s-1.9 4.25-4.26 4.25c-2.34 0-4.24-1.9-4.24-4.25 0-2.34 1.9-4.25 4.25-4.25M6.88 2.63c2.34 0 4.25 1.9 4.25 4.25 0 2.34-1.9 4.25-4.26 4.25-2.34 0-4.24-1.9-4.24-4.26 0-2.34 1.9-4.24 4.25-4.24M17.13 2.63c2.34 0 4.25 1.9 4.25 4.25 0 2.34-1.9 4.25-4.25 4.25s-4.25-1.9-4.25-4.26c0-2.34 1.9-4.24 4.24-4.24" />
    </IconBase>
  ))
);

LayoutGridCirclePlusFillDuotone.displayName = 'LayoutGridCirclePlusFillDuotone';

// Triple export pattern
export { LayoutGridCirclePlusFillDuotone, LayoutGridCirclePlusFillDuotone as LayoutGridCirclePlusFillDuotoneIcon, LayoutGridCirclePlusFillDuotone as SiLayoutGridCirclePlusFillDuotone };
export default LayoutGridCirclePlusFillDuotone;
export type { LayoutGridCirclePlusFillDuotoneProps };
