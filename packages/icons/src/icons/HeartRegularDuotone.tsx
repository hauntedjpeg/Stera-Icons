import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeartRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HeartRegularDuotone = memo(
  forwardRef<SVGSVGElement, HeartRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.29 3.5c3.02 0 5.46 2.47 5.46 5.5 0 2.3-1.23 4.08-1.69 4.73-2.21 3.12-5.3 5.26-7.58 7.1l.1-.1c.26-.33.21-.8-.1-1.06l-.48-.38c2.29-1.8 4.9-3.71 6.84-6.43.44-.62 1.41-2.06 1.41-3.86 0-2.22-1.78-4-3.96-4-1.6 0-2.98.95-3.6 2.33l-.05.08c.12-.2.15-.47.04-.7q-.27-.6-.68-1.12c1-1.27 2.54-2.09 4.29-2.09" opacity={.4} />
        <path d="M7.71 3.5c2.21 0 4.11 1.32 4.97 3.2.17.38 0 .83-.37 1-.38.17-.82 0-1-.37C10.7 5.95 9.32 5 7.72 5 5.53 5 3.75 6.78 3.75 9c0 1.8.97 3.24 1.4 3.86 2.07 2.9 4.93 4.88 7.32 6.8.32.27.37.74.11 1.06s-.73.37-1.05.11c-2.28-1.83-5.37-3.98-7.6-7.1-.45-.65-1.68-2.43-1.68-4.73 0-3.03 2.44-5.5 5.46-5.5" />
    </IconBase>
  ))
);

HeartRegularDuotone.displayName = 'HeartRegularDuotone';

// Triple export pattern
export { HeartRegularDuotone, HeartRegularDuotone as HeartRegularDuotoneIcon, HeartRegularDuotone as SiHeartRegularDuotone };
export default HeartRegularDuotone;
export type { HeartRegularDuotoneProps };
