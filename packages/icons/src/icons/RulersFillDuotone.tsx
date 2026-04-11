import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RulersFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RulersFillDuotone = memo(
  forwardRef<SVGSVGElement, RulersFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 6.13c-.48 0-.87.39-.87.87v2.88h-2.25V7a.88.88 0 0 0-1.76 0v2.88H9.89v2.24H7a.88.88 0 0 0 0 1.76h2.88v2.24H7a.88.88 0 0 0 0 1.75h2.88v1.88c0 1.17-.96 2.13-2.13 2.13h-3.5a2.13 2.13 0 0 1-2.12-2.13V9.88h7.75V2.12h9.87c1.17 0 2.13.96 2.13 2.13v3.5c0 1.17-.96 2.12-2.13 2.13h-1.87V7c0-.48-.4-.87-.88-.87" opacity={0.4} />
        <path d="M8.13 3.88v4.25H3.87V4q.01-.11.13-.12z" opacity={0.4} />
        <path d="M9.88 17.88H7a.88.88 0 0 1 0-1.75h2.88zM9.88 13.88H7a.88.88 0 0 1 0-1.76h2.88z" />
        <path fillRule="evenodd" d="M9.88 9.88H2.12V4c0-1.04.84-1.87 1.88-1.87h5.88zM4 3.88a.12.12 0 0 0-.12.12v4.13h4.25V3.87z" clipRule="evenodd" />
        <path d="M13 6.13c.48 0 .88.39.88.87v2.88h-1.76V7c0-.48.4-.87.88-.87M17 6.13c.48 0 .88.39.88.87v2.88h-1.75V7c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

RulersFillDuotone.displayName = 'RulersFillDuotone';

// Triple export pattern (lucide-react style)
export { RulersFillDuotone, RulersFillDuotone as RulersFillDuotoneIcon, RulersFillDuotone as SiRulersFillDuotone };
export default RulersFillDuotone;
export type { RulersFillDuotoneProps };
