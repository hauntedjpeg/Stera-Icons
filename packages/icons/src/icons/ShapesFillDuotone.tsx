import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShapesFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShapesFillDuotone = memo(
  forwardRef<SVGSVGElement, ShapesFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.25 14.63c1.45 0 2.63 1.17 2.63 2.62s-1.18 2.63-2.63 2.63-2.62-1.18-2.62-2.63 1.17-2.62 2.62-2.62M8.5 14.88c.35 0 .63.27.63.62V19c0 .35-.28.63-.63.63H5c-.35 0-.62-.28-.62-.63v-3.5c0-.35.27-.62.62-.62zM14.17 9H9.82L12 5.25z" opacity={0.4} />
        <path fillRule="evenodd" d="M17.25 12.88c2.42 0 4.38 1.95 4.38 4.37s-1.96 4.38-4.38 4.38-4.37-1.96-4.37-4.38 1.95-4.37 4.37-4.37m0 1.74c-1.45 0-2.62 1.18-2.62 2.63s1.17 2.63 2.62 2.63 2.63-1.18 2.63-2.63-1.18-2.62-2.63-2.62M8.5 13.13c1.31 0 2.38 1.06 2.38 2.37V19c0 1.31-1.07 2.38-2.38 2.38H5c-1.31 0-2.37-1.07-2.37-2.38v-3.5c0-1.31 1.06-2.37 2.37-2.37zM5 14.87c-.35 0-.62.28-.62.63V19c0 .35.27.63.62.63h3.5c.35 0 .63-.28.63-.63v-3.5c0-.35-.28-.62-.63-.62zM12 2.63c.31 0 .6.16.76.43l3.68 6.38c.15.27.15.6 0 .87-.16.27-.45.44-.76.44H8.32c-.31 0-.6-.17-.76-.44-.15-.27-.15-.6 0-.87l3.68-6.38c.16-.27.45-.44.76-.44M9.83 9h4.33L12 5.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShapesFillDuotone.displayName = 'ShapesFillDuotone';

// Triple export pattern
export { ShapesFillDuotone, ShapesFillDuotone as ShapesFillDuotoneIcon, ShapesFillDuotone as SiShapesFillDuotone };
export default ShapesFillDuotone;
export type { ShapesFillDuotoneProps };
