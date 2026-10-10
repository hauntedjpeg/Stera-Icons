import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashSimpleFillProps = Omit<IconBaseProps, 'children'>;

const CircleDashSimpleFill = memo(
  forwardRef<SVGSVGElement, CircleDashSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.06 19.04c.42-.24.96-.1 1.2.32s.1.95-.32 1.2c-1.46.83-3.14 1.32-4.94 1.32s-3.48-.49-4.94-1.33c-.42-.24-.56-.77-.32-1.2.24-.41.78-.55 1.2-.31 1.2.69 2.58 1.09 4.06 1.09s2.87-.4 4.06-1.1M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6M3.45 7.06c.24-.42.77-.56 1.2-.32.41.24.55.78.31 1.2-.69 1.2-1.08 2.58-1.08 4.06s.4 2.87 1.08 4.06c.24.42.1.96-.32 1.2s-.95.1-1.2-.32C2.62 15.48 2.14 13.8 2.14 12s.48-3.48 1.32-4.94M19.36 6.74c.42-.24.95-.1 1.2.32.83 1.46 1.32 3.14 1.32 4.94s-.49 3.48-1.33 4.94c-.24.42-.77.56-1.2.32-.41-.24-.55-.78-.31-1.2.69-1.2 1.09-2.58 1.09-4.06s-.4-2.87-1.1-4.06c-.23-.42-.1-.96.33-1.2M12 2.13c1.8 0 3.48.48 4.94 1.32.42.24.56.77.32 1.2-.24.41-.78.55-1.2.31-1.2-.69-2.58-1.08-4.06-1.08s-2.87.4-4.06 1.08c-.42.24-.96.1-1.2-.32s-.1-.95.32-1.2C8.52 2.62 10.2 2.14 12 2.14" />
    </IconBase>
  ))
);

CircleDashSimpleFill.displayName = 'CircleDashSimpleFill';

// Triple export pattern
export { CircleDashSimpleFill, CircleDashSimpleFill as CircleDashSimpleFillIcon, CircleDashSimpleFill as SiCircleDashSimpleFill };
export default CircleDashSimpleFill;
export type { CircleDashSimpleFillProps };
