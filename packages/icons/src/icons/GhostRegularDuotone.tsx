import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GhostRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GhostRegularDuotone = memo(
  forwardRef<SVGSVGElement, GhostRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c4.83 0 8.75 3.92 8.75 8.75v10q0 .22-.13.42c-.23.34-.7.43-1.04.2l-2.54-1.7-2.07 1.67c-.28.22-.66.22-.94 0L12 19.96 9.97 21.6c-.28.22-.66.22-.94 0l-2.07-1.66-2.54 1.7c-.35.22-.81.13-1.04-.21q-.13-.2-.13-.42V11c0-4.83 3.92-8.75 8.75-8.75m0 1.5C8 3.75 4.75 7 4.75 11v8.6l1.83-1.22.1-.06c.26-.12.57-.08.79.1l2.03 1.62 2.03-1.63.1-.07c.27-.14.6-.12.84.07l2.03 1.63 2.03-1.63.1-.06c.24-.14.55-.13.79.03l1.83 1.22V11c0-4-3.25-7.25-7.25-7.25" clipRule="evenodd" opacity={.4} />
        <path d="M9 9.25c.97 0 1.75.78 1.75 1.75S9.97 12.75 9 12.75 7.25 11.97 7.25 11 8.03 9.25 9 9.25M15 9.25c.97 0 1.75.78 1.75 1.75s-.78 1.75-1.75 1.75-1.75-.78-1.75-1.75.78-1.75 1.75-1.75" />
    </IconBase>
  ))
);

GhostRegularDuotone.displayName = 'GhostRegularDuotone';

// Triple export pattern
export { GhostRegularDuotone, GhostRegularDuotone as GhostRegularDuotoneIcon, GhostRegularDuotone as SiGhostRegularDuotone };
export default GhostRegularDuotone;
export type { GhostRegularDuotoneProps };
