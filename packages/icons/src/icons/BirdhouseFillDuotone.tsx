import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BirdhouseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BirdhouseFillDuotone = memo(
  forwardRef<SVGSVGElement, BirdhouseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="birdhouse-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M11.59 4.54c.23-.21.59-.21.83 0l7.2 6.4-1.56 8.19H5.94l-1.56-8.19zm.4 5.46a2.5 2.5 0 1 0 .01 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" opacity={.4} />
        <path d="M12 10a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M19 19.12a.88.88 0 0 1 0 1.75H5a.88.88 0 0 1 0-1.75z" />
        <path d="M10.42 3.23c.9-.8 2.26-.8 3.16 0l8 7.12a.88.88 0 0 1-1.16 1.3l-8-7.11a.6.6 0 0 0-.83 0l-8 7.11a.88.88 0 0 1-1.17-1.3z" />
    </IconBase>
  ))
);

BirdhouseFillDuotone.displayName = 'BirdhouseFillDuotone';

// Triple export pattern (lucide-react style)
export { BirdhouseFillDuotone, BirdhouseFillDuotone as BirdhouseFillDuotoneIcon, BirdhouseFillDuotone as SiBirdhouseFillDuotone };
export default BirdhouseFillDuotone;
export type { BirdhouseFillDuotoneProps };
