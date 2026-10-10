import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeartFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HeartFillDuotone = memo(
  forwardRef<SVGSVGElement, HeartFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.29 5.13c2.11 0 3.84 1.72 3.84 3.87 0 1.53-.73 2.81-1.2 3.52l-.2.27c-1.89 2.67-4.46 4.55-6.73 6.34-2.27-1.8-4.84-3.67-6.74-6.34-.43-.62-1.38-2.04-1.38-3.8 0-2.14 1.72-3.86 3.83-3.86 1.55 0 2.89.92 3.5 2.25.14.31.45.51.79.51s.65-.2.8-.5c.6-1.34 1.94-2.26 3.49-2.26" opacity={.4} />
        <path fillRule="evenodd" d="M16.29 3.38c3.09 0 5.59 2.52 5.59 5.62 0 2.05-.96 3.7-1.51 4.5l-.2.3c-2.24 3.15-5.35 5.3-7.62 7.13-.32.26-.78.26-1.1 0-2.12-1.71-5-3.72-7.19-6.55l-.43-.58c-.45-.65-1.7-2.46-1.7-4.8 0-3.1 2.5-5.62 5.58-5.62 1.73 0 3.27.78 4.29 2.01 1.02-1.23 2.56-2.01 4.29-2.01m0 1.75c-1.55 0-2.88.92-3.5 2.25-.14.31-.45.51-.79.51s-.65-.2-.8-.5c-.6-1.34-1.94-2.26-3.49-2.26C5.6 5.13 3.88 6.85 3.88 9c0 1.75.95 3.17 1.38 3.79 1.9 2.67 4.47 4.55 6.74 6.34 2.27-1.8 4.84-3.67 6.74-6.34l.18-.27c.48-.7 1.2-1.99 1.2-3.52 0-2.15-1.72-3.87-3.83-3.87" clipRule="evenodd" />
    </IconBase>
  ))
);

HeartFillDuotone.displayName = 'HeartFillDuotone';

// Triple export pattern
export { HeartFillDuotone, HeartFillDuotone as HeartFillDuotoneIcon, HeartFillDuotone as SiHeartFillDuotone };
export default HeartFillDuotone;
export type { HeartFillDuotoneProps };
