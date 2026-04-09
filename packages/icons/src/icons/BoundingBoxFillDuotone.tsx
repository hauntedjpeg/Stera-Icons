import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoundingBoxFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoundingBoxFillDuotone = memo(
  forwardRef<SVGSVGElement, BoundingBoxFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bounding-box-fill-duotone" {...props}>
      <path d="M15.13 18.88H8.87v-1.75h6.26zM18.88 15.13h-1.75V8.87h1.75zM6.88 15.13H5.13V8.87h1.75zM15.13 6.88H8.87V5.13h6.26z" opacity={0.4} />
        <path d="M8 15.13c.48 0 .88.39.88.87v4c0 .48-.4.88-.88.88H4a.9.9 0 0 1-.87-.88v-4c0-.48.39-.87.87-.87zM20 15.13c.48 0 .88.39.88.87v4c0 .48-.4.88-.88.88h-4a.9.9 0 0 1-.87-.88v-4c0-.48.39-.87.87-.87zM8 3.13c.48 0 .88.39.88.87v4c0 .48-.4.88-.88.88H4A.87.87 0 0 1 3.13 8V4c0-.48.39-.87.87-.87zM20 3.13c.48 0 .88.39.88.87v4c0 .48-.4.88-.88.88h-4a.9.9 0 0 1-.87-.88V4c0-.48.39-.87.87-.87z" />
    </IconBase>
  ))
);

BoundingBoxFillDuotone.displayName = 'BoundingBoxFillDuotone';

// Triple export pattern (lucide-react style)
export { BoundingBoxFillDuotone, BoundingBoxFillDuotone as BoundingBoxFillDuotoneIcon, BoundingBoxFillDuotone as SiBoundingBoxFillDuotone };
export default BoundingBoxFillDuotone;
export type { BoundingBoxFillDuotoneProps };
