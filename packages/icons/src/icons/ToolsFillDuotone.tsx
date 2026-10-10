import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToolsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToolsFillDuotone = memo(
  forwardRef<SVGSVGElement, ToolsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.2 13.02q.73.12 1.45.06l3.27 3.27q-.06.72.06 1.46L7.78 21C6.46 22.33 4.31 22.33 3 21s-1.32-3.47 0-4.8zM19.8 2.07c.36-.14.78-.06 1.06.22l.85.85c.32.32.38.83.15 1.22l-1.27 2.1q-.26.42-.73.49c-.31.03-.62-.07-.83-.29l-.14-.14L15.42 10 14 8.58l3.46-3.47-.13-.14c-.22-.21-.32-.52-.29-.83s.22-.57.48-.73l2.11-1.27z" opacity={0.4} />
        <path d="M6.03 2.9c1.48-.4 3.12-.01 4.28 1.15 1.12 1.12 1.5 2.69 1.17 4.13l4.34 4.33c1.44-.33 3.01.06 4.13 1.18 1.16 1.16 1.54 2.8 1.15 4.28q-.04.13-.18.18-.14.03-.24-.07l-1.38-1.37h-2.6v2.6l1.38 1.37q.11.11.07.24-.05.14-.18.18c-1.48.4-3.12.01-4.28-1.15-1.12-1.12-1.5-2.69-1.18-4.13l-4.33-4.34c-1.44.34-3.01-.05-4.13-1.17C2.89 9.15 2.5 7.5 2.9 6.03l.03-.06q.04-.09.15-.12.14-.03.24.07L4.7 7.3h2.6V4.7L5.92 3.32q-.1-.1-.07-.24.05-.14.18-.18" />
    </IconBase>
  ))
);

ToolsFillDuotone.displayName = 'ToolsFillDuotone';

// Triple export pattern
export { ToolsFillDuotone, ToolsFillDuotone as ToolsFillDuotoneIcon, ToolsFillDuotone as SiToolsFillDuotone };
export default ToolsFillDuotone;
export type { ToolsFillDuotoneProps };
