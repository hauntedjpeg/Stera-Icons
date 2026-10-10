import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandRightFillProps = Omit<IconBaseProps, 'children'>;

const HandRightFill = memo(
  forwardRef<SVGSVGElement, HandRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.96 2.95c.73 0 1.31.59 1.31 1.31v6.18c0 .35.28.63.63.63s.62-.28.62-.63V7.03c.08-.66.63-1.18 1.31-1.18.72 0 1.31.6 1.31 1.31v6.77c0 3.93-3.18 7.12-7.11 7.12-3.53 0-6.46-2.57-7.02-5.94L4.98 15 3.8 11.97l-.04-.08-.07-.12c-.27-.6-.04-1.33.55-1.67q.42-.23.86-.16c.38.06.72.28.92.64l1.6 2.7c.14.25.43.36.7.29.28-.07.46-.32.46-.6V5.23c0-.72.6-1.31 1.31-1.31.68 0 1.24.52 1.3 1.18l.01.13v4.73c0 .34.28.62.63.62s.62-.28.62-.62v-5.7c0-.72.59-1.3 1.31-1.3" />
    </IconBase>
  ))
);

HandRightFill.displayName = 'HandRightFill';

// Triple export pattern
export { HandRightFill, HandRightFill as HandRightFillIcon, HandRightFill as SiHandRightFill };
export default HandRightFill;
export type { HandRightFillProps };
