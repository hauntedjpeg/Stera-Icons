import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutMasonryFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutMasonryFillDuotone = memo(
  forwardRef<SVGSVGElement, LayoutMasonryFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 14.13c1.17 0 2.13.95 2.13 2.12v3c0 1.17-.96 2.13-2.13 2.13H4.75a2.13 2.13 0 0 1-2.12-2.13v-3c0-1.17.95-2.12 2.12-2.12zM19.25 2.63c1.17 0 2.13.95 2.13 2.12v3c0 1.17-.96 2.13-2.13 2.13H15a2.13 2.13 0 0 1-2.12-2.13v-3c0-1.17.95-2.12 2.12-2.12z" opacity={0.4} />
        <path d="M19.25 11.63c1.17 0 2.13.95 2.13 2.12v5.5c0 1.17-.96 2.13-2.13 2.13H15a2.13 2.13 0 0 1-2.12-2.13v-5.5c0-1.17.95-2.12 2.12-2.12zM9 2.63c1.17 0 2.13.95 2.13 2.12v5.5c0 1.17-.96 2.13-2.13 2.13H4.75a2.13 2.13 0 0 1-2.12-2.13v-5.5c0-1.17.95-2.12 2.12-2.12z" />
    </IconBase>
  ))
);

LayoutMasonryFillDuotone.displayName = 'LayoutMasonryFillDuotone';

// Triple export pattern (lucide-react style)
export { LayoutMasonryFillDuotone, LayoutMasonryFillDuotone as LayoutMasonryFillDuotoneIcon, LayoutMasonryFillDuotone as SiLayoutMasonryFillDuotone };
export default LayoutMasonryFillDuotone;
export type { LayoutMasonryFillDuotoneProps };
