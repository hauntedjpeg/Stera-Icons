import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MartiniFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MartiniFillDuotone = memo(
  forwardRef<SVGSVGElement, MartiniFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.39 4.88 12 11.26 5.61 4.88z" opacity={.4} />
        <path fillRule="evenodd" d="M20.5 3.13c.35 0 .67.2.8.54.14.32.07.7-.18.95l-8.25 8.24v6.27H16c.48 0 .87.39.87.87s-.39.88-.87.88H8c-.48 0-.88-.4-.88-.88s.4-.87.88-.87h3.12v-6.27L2.88 4.62c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54zM12 11.26l6.39-6.38H5.6z" clipRule="evenodd" />
    </IconBase>
  ))
);

MartiniFillDuotone.displayName = 'MartiniFillDuotone';

// Triple export pattern
export { MartiniFillDuotone, MartiniFillDuotone as MartiniFillDuotoneIcon, MartiniFillDuotone as SiMartiniFillDuotone };
export default MartiniFillDuotone;
export type { MartiniFillDuotoneProps };
