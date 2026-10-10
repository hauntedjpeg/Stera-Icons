import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BottleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BottleBoldDuotone = memo(
  forwardRef<SVGSVGElement, BottleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m14.6 4.05.34 3.76q.04.3.22.53l1.18 1.49c.43.53.66 1.19.66 1.87V19c0 1.66-1.34 3-3 3h-4c-1.66 0-3-1.34-3-3v-7.3c0-.68.23-1.34.66-1.87l1.18-1.49q.2-.23.22-.53l.34-3.76.01-.1q.16.05.34.05h1.9q-.23.02-.26.23l-.34 3.76q-.09.9-.64 1.6l-1.2 1.49q-.2.27-.21.62V19c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-7.3q0-.35-.22-.62L13.6 9.59q-.55-.7-.64-1.6l-.34-3.76q-.03-.21-.25-.23h1.89q.18 0 .34-.06z" opacity={.4} />
        <path d="M14.25 2c.55 0 1 .45 1 1s-.45 1-1 1h-4.5c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

BottleBoldDuotone.displayName = 'BottleBoldDuotone';

// Triple export pattern
export { BottleBoldDuotone, BottleBoldDuotone as BottleBoldDuotoneIcon, BottleBoldDuotone as SiBottleBoldDuotone };
export default BottleBoldDuotone;
export type { BottleBoldDuotoneProps };
