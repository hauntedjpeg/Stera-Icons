import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridCircleFillProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCircleFill = memo(
  forwardRef<SVGSVGElement, LayoutGridCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.88 12.88c2.34 0 4.25 1.9 4.25 4.24s-1.9 4.25-4.26 4.25c-2.34 0-4.24-1.9-4.24-4.25 0-2.34 1.9-4.25 4.25-4.25M17.13 12.88c2.34 0 4.25 1.9 4.25 4.24s-1.9 4.25-4.25 4.25-4.25-1.9-4.25-4.25c0-2.34 1.9-4.25 4.24-4.25M6.88 2.63c2.34 0 4.25 1.9 4.25 4.25 0 2.34-1.9 4.25-4.26 4.25-2.34 0-4.24-1.9-4.24-4.26 0-2.34 1.9-4.24 4.25-4.24M17.13 2.63c2.34 0 4.25 1.9 4.25 4.25 0 2.34-1.9 4.25-4.25 4.25s-4.25-1.9-4.25-4.26c0-2.34 1.9-4.24 4.24-4.24" />
    </IconBase>
  ))
);

LayoutGridCircleFill.displayName = 'LayoutGridCircleFill';

// Triple export pattern
export { LayoutGridCircleFill, LayoutGridCircleFill as LayoutGridCircleFillIcon, LayoutGridCircleFill as SiLayoutGridCircleFill };
export default LayoutGridCircleFill;
export type { LayoutGridCircleFillProps };
