import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.2 10q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05V18c0 .55-.45 1-1 1s-1-.45-1-1v-2.2c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18-.45-.04-1.03-.04-1.89-.04H6.41l-1-1 1-1z" opacity={.4} />
        <path d="M8.3 5.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L5.42 11l4.3 4.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-5-5q-.28-.28-.29-.7 0-.36.23-.63l.06-.08z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftBoldDuotone.displayName = 'ArrowCornerUpLeftBoldDuotone';

// Triple export pattern
export { ArrowCornerUpLeftBoldDuotone, ArrowCornerUpLeftBoldDuotone as ArrowCornerUpLeftBoldDuotoneIcon, ArrowCornerUpLeftBoldDuotone as SiArrowCornerUpLeftBoldDuotone };
export default ArrowCornerUpLeftBoldDuotone;
export type { ArrowCornerUpLeftBoldDuotoneProps };
