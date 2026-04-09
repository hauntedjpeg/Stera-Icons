import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoundingBoxFillProps = Omit<IconBaseProps, 'children'>;

const BoundingBoxFill = memo(
  forwardRef<SVGSVGElement, BoundingBoxFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bounding-box-fill" {...props}>
      <path fillRule="evenodd" d="M8 3.13c.48 0 .88.39.88.87v1.13h6.24V4c0-.48.4-.87.88-.87h4c.48 0 .88.39.88.87v4c0 .48-.4.88-.88.88h-1.12v6.24H20c.48 0 .88.4.88.88v4c0 .48-.4.88-.88.88h-4a.9.9 0 0 1-.87-.88v-1.12H8.87V20c0 .48-.39.88-.87.88H4a.9.9 0 0 1-.87-.88v-4c0-.48.39-.87.87-.87h1.13V8.87H4A.87.87 0 0 1 3.13 8V4c0-.48.39-.87.87-.87zM8.88 8c0 .48-.4.88-.88.88H6.88v6.24H8c.48 0 .88.4.88.88v1.13h6.24V16c0-.48.4-.87.88-.87h1.13V8.87H16a.9.9 0 0 1-.87-.87V6.88H8.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoundingBoxFill.displayName = 'BoundingBoxFill';

// Triple export pattern (lucide-react style)
export { BoundingBoxFill, BoundingBoxFill as BoundingBoxFillIcon, BoundingBoxFill as SiBoundingBoxFill };
export default BoundingBoxFill;
export type { BoundingBoxFillProps };
