import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PillBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PillBoldDuotone = memo(
  forwardRef<SVGSVGElement, PillBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.8 3.8c2.04-2.05 5.36-2.05 7.4 0s2.05 5.36 0 7.4L16.42 15 15 13.59l3.8-3.8c1.26-1.26 1.26-3.32 0-4.58-1.27-1.27-3.33-1.27-4.6 0L10.42 9 9 7.59z" opacity={.4} />
        <path fillRule="evenodd" d="m16.41 15-5.2 5.2c-2.05 2.05-5.37 2.05-7.42 0s-2.04-5.36 0-7.4L9 7.58zm-11.2-.8c-1.27 1.27-1.27 3.33 0 4.6 1.26 1.26 3.32 1.26 4.58 0l3.8-3.8L9 10.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

PillBoldDuotone.displayName = 'PillBoldDuotone';

// Triple export pattern
export { PillBoldDuotone, PillBoldDuotone as PillBoldDuotoneIcon, PillBoldDuotone as SiPillBoldDuotone };
export default PillBoldDuotone;
export type { PillBoldDuotoneProps };
