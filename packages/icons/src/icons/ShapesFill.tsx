import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShapesFillProps = Omit<IconBaseProps, 'children'>;

const ShapesFill = memo(
  forwardRef<SVGSVGElement, ShapesFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.25 12.88c2.42 0 4.38 1.95 4.38 4.37s-1.96 4.38-4.38 4.38-4.37-1.96-4.37-4.38 1.95-4.37 4.37-4.37M8.75 13.13c1.17 0 2.13.95 2.13 2.12v4c0 1.17-.96 2.13-2.13 2.13h-4c-1.17 0-2.12-.96-2.12-2.13v-4c0-1.17.95-2.12 2.12-2.12zM12 2.63c.31 0 .6.16.76.43l3.68 6.38c.15.27.15.6 0 .87-.16.27-.45.44-.76.44H8.32c-.31 0-.6-.17-.76-.44-.15-.27-.15-.6 0-.87l3.68-6.38c.16-.27.45-.44.76-.44" />
    </IconBase>
  ))
);

ShapesFill.displayName = 'ShapesFill';

// Triple export pattern
export { ShapesFill, ShapesFill as ShapesFillIcon, ShapesFill as SiShapesFill };
export default ShapesFill;
export type { ShapesFillProps };
