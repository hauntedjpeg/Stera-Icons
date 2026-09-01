import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PillBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PillBoldDuotone = memo(
  forwardRef<SVGSVGElement, PillBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.8 3.8a5.24 5.24 0 0 1 7.4 7.4L16.42 15 15 13.59l3.8-3.8a3.24 3.24 0 0 0-4.6-4.58L10.42 9 9 7.59z" opacity={.4} />
        <path fillRule="evenodd" d="m16.41 15-5.2 5.2a5.24 5.24 0 0 1-7.42-7.4L9 7.58zm-11.2-.8a3.24 3.24 0 0 0 4.58 4.6l3.8-3.8L9 10.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

PillBoldDuotone.displayName = 'PillBoldDuotone';

// Triple export pattern (lucide-react style)
export { PillBoldDuotone, PillBoldDuotone as PillBoldDuotoneIcon, PillBoldDuotone as SiPillBoldDuotone };
export default PillBoldDuotone;
export type { PillBoldDuotoneProps };
