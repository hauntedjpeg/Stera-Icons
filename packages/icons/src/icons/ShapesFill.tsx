import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShapesFillProps = Omit<IconBaseProps, 'children'>;

const ShapesFill = memo(
  forwardRef<SVGSVGElement, ShapesFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.25 12.88a4.38 4.38 0 1 1 0 8.75 4.38 4.38 0 0 1 0-8.75M8.75 13.13c1.17 0 2.13.95 2.13 2.12v4c0 1.17-.96 2.13-2.13 2.13h-4a2.13 2.13 0 0 1-2.12-2.13v-4c0-1.17.95-2.12 2.12-2.12zM12 2.63c.31 0 .6.16.76.43l3.68 6.38a.88.88 0 0 1-.76 1.31H8.32a.88.88 0 0 1-.76-1.31l3.68-6.38a.9.9 0 0 1 .76-.44" />
    </IconBase>
  ))
);

ShapesFill.displayName = 'ShapesFill';

// Triple export pattern (lucide-react style)
export { ShapesFill, ShapesFill as ShapesFillIcon, ShapesFill as SiShapesFill };
export default ShapesFill;
export type { ShapesFillProps };
