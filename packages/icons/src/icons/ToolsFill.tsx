import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToolsFillProps = Omit<IconBaseProps, 'children'>;

const ToolsFill = memo(
  forwardRef<SVGSVGElement, ToolsFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.2 13.02q.72.12 1.45.06l3.27 3.27q-.06.72.06 1.46L7.78 21C6.46 22.33 4.32 22.33 3 21c-1.32-1.32-1.32-3.47 0-4.8z" />
        <path d="M6.03 2.9c1.48-.4 3.12-.01 4.28 1.15 1.12 1.12 1.5 2.69 1.17 4.13l4.34 4.34c1.44-.34 3.01.05 4.13 1.17 1.16 1.16 1.54 2.8 1.15 4.28q-.05.13-.18.18-.14.03-.24-.07l-1.38-1.37h-2.6v2.6l1.38 1.37q.11.11.07.24-.05.14-.18.18c-1.48.4-3.12.01-4.28-1.15-1.12-1.12-1.5-2.69-1.18-4.13l-4.33-4.34c-1.44.34-3.01-.05-4.13-1.17C2.89 9.15 2.5 7.5 2.9 6.03l.03-.06q.05-.09.15-.12.14-.03.24.07L4.7 7.3h2.6V4.7L5.92 3.32q-.1-.1-.07-.24.05-.14.18-.18" />
        <path d="M19.8 2.07c.36-.14.78-.06 1.06.22l.85.85c.32.32.38.83.15 1.22l-1.27 2.1c-.16.27-.43.45-.73.49s-.61-.07-.83-.29l-.14-.14L15.42 10l-1.41-1.41 3.46-3.47-.13-.14c-.22-.21-.32-.52-.29-.83s.22-.57.48-.73l2.11-1.27z" />
    </IconBase>
  ))
);

ToolsFill.displayName = 'ToolsFill';

// Triple export pattern
export { ToolsFill, ToolsFill as ToolsFillIcon, ToolsFill as SiToolsFill };
export default ToolsFill;
export type { ToolsFillProps };
