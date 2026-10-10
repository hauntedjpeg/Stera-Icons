import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellBoldDuotone = memo(
  forwardRef<SVGSVGElement, BellBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c3.91 0 7 3.31 7 7.3v.38c0 1 .3 1.96.84 2.78l.92 1.38c1.33 1.99-.1 4.66-2.5 4.66H5.74c-2.4 0-3.83-2.67-2.5-4.66l.92-1.38c.55-.82.84-1.79.84-2.78V9.3C5 5.31 8.09 2 12 2m0 2C9.28 4 7 6.33 7 9.3v.38c0 1.39-.4 2.74-1.18 3.89l-.91 1.38c-.45.66.03 1.55.83 1.55h12.52c.8 0 1.28-.89.83-1.55l-.91-1.38C17.4 12.42 17 11.07 17 9.68V9.3C17 6.33 14.72 4 12 4" clipRule="evenodd" />
        <path d="M16.39 18.5c-.46 2-2.25 3.5-4.39 3.5s-3.93-1.5-4.39-3.5h2.1c.39.88 1.27 1.5 2.29 1.5s1.9-.62 2.29-1.5z" opacity={.4} />
    </IconBase>
  ))
);

BellBoldDuotone.displayName = 'BellBoldDuotone';

// Triple export pattern
export { BellBoldDuotone, BellBoldDuotone as BellBoldDuotoneIcon, BellBoldDuotone as SiBellBoldDuotone };
export default BellBoldDuotone;
export type { BellBoldDuotoneProps };
