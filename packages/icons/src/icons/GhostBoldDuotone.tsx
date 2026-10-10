import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GhostBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GhostBoldDuotone = memo(
  forwardRef<SVGSVGElement, GhostBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c4.97 0 9 4.03 9 9v10q0 .29-.17.55c-.3.46-.93.59-1.38.28l-2.4-1.6-1.93 1.55c-.36.3-.88.3-1.24 0L12 20.28l-1.87 1.5c-.37.3-.89.3-1.26 0l-1.92-1.54-2.4 1.6c-.45.3-1.08.17-1.38-.29Q2.99 21.3 3 21V11c0-4.97 4.03-9 9-9m0 2c-3.87 0-7 3.13-7 7v8.13l1.45-.96.14-.08c.33-.15.74-.1 1.04.13l1.87 1.5 1.88-1.5.14-.1c.35-.19.79-.16 1.1.1l1.88 1.5 1.88-1.5.13-.1c.32-.17.73-.16 1.04.05l1.45.96V11c0-3.87-3.13-7-7-7" clipRule="evenodd" opacity={.4} />
        <path d="M9 9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M15 9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" />
    </IconBase>
  ))
);

GhostBoldDuotone.displayName = 'GhostBoldDuotone';

// Triple export pattern
export { GhostBoldDuotone, GhostBoldDuotone as GhostBoldDuotoneIcon, GhostBoldDuotone as SiGhostBoldDuotone };
export default GhostBoldDuotone;
export type { GhostBoldDuotoneProps };
