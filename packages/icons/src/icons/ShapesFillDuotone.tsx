import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShapesFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShapesFillDuotone = memo(
  forwardRef<SVGSVGElement, ShapesFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.25 14.63a2.63 2.63 0 1 1 0 5.25 2.63 2.63 0 0 1 0-5.25M8.5 14.88c.35 0 .63.27.63.62V19c0 .35-.28.63-.63.63H5a.6.6 0 0 1-.62-.63v-3.5c0-.35.27-.62.62-.62zM14.17 9H9.82L12 5.25z" opacity={0.4} />
        <path fillRule="evenodd" d="M17.25 12.88a4.38 4.38 0 1 1 0 8.75 4.38 4.38 0 0 1 0-8.75m0 1.74a2.63 2.63 0 1 0 0 5.26 2.63 2.63 0 0 0 0-5.25M8.5 13.13a2.37 2.37 0 0 1 2.38 2.37V19a2.37 2.37 0 0 1-2.38 2.38H5A2.37 2.37 0 0 1 2.63 19v-3.5A2.37 2.37 0 0 1 5 13.13zM5 14.87a.6.6 0 0 0-.62.63V19c0 .35.27.63.62.63h3.5c.35 0 .63-.28.63-.63v-3.5a.6.6 0 0 0-.63-.62zM12 2.63c.31 0 .6.16.76.43l3.68 6.38a.88.88 0 0 1-.76 1.31H8.32a.88.88 0 0 1-.76-1.31l3.68-6.38a.9.9 0 0 1 .76-.44M9.83 9h4.33L12 5.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShapesFillDuotone.displayName = 'ShapesFillDuotone';

// Triple export pattern (lucide-react style)
export { ShapesFillDuotone, ShapesFillDuotone as ShapesFillDuotoneIcon, ShapesFillDuotone as SiShapesFillDuotone };
export default ShapesFillDuotone;
export type { ShapesFillDuotoneProps };
