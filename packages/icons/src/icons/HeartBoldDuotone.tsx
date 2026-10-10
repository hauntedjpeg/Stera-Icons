import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeartBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HeartBoldDuotone = memo(
  forwardRef<SVGSVGElement, HeartBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.9 7.45c.12-.26.14-.57.01-.85q-.35-.76-.91-1.4c1.05-1.2 2.58-1.95 4.29-1.95C19.45 3.25 22 5.83 22 9c0 2.39-1.27 4.22-1.73 4.87-2.25 3.17-5.38 5.34-7.64 7.16l-.03.02q.1-.07.18-.17c.35-.43.28-1.06-.15-1.4l-.63-.5c2.26-1.79 4.77-3.64 6.64-6.27.43-.6 1.36-2 1.36-3.71 0-2.08-1.67-3.75-3.71-3.75-1.5 0-2.79.89-3.38 2.18z" opacity={.4} />
        <path d="M7.71 3.25c2.32 0 4.3 1.38 5.2 3.35.23.5 0 1.1-.5 1.33s-1.1 0-1.32-.5c-.59-1.29-1.88-2.18-3.38-2.18C5.67 5.25 4 6.92 4 9c0 1.71.93 3.1 1.36 3.71 2.04 2.88 4.86 4.82 7.27 6.76.43.35.5.98.15 1.4-.35.44-.98.5-1.4.16-2.27-1.82-5.4-4-7.65-7.16C3.27 13.22 2 11.39 2 9c0-3.17 2.55-5.75 5.71-5.75" />
    </IconBase>
  ))
);

HeartBoldDuotone.displayName = 'HeartBoldDuotone';

// Triple export pattern
export { HeartBoldDuotone, HeartBoldDuotone as HeartBoldDuotoneIcon, HeartBoldDuotone as SiHeartBoldDuotone };
export default HeartBoldDuotone;
export type { HeartBoldDuotoneProps };
