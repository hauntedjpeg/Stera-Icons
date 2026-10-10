import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MartiniFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MartiniFillDuotone = memo(
  forwardRef<SVGSVGElement, MartiniFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.39 4.88 12 11.26 5.61 4.88z" opacity={.4} />
        <path fillRule="evenodd" d="M20.5 3.13a.88.88 0 0 1 .62 1.49l-8.25 8.24v6.27H16a.87.87 0 1 1 0 1.75H8a.88.88 0 0 1 0-1.75h3.12v-6.27L2.88 4.62a.88.88 0 0 1 .62-1.5zM12 11.26l6.39-6.38H5.6z" clipRule="evenodd" />
    </IconBase>
  ))
);

MartiniFillDuotone.displayName = 'MartiniFillDuotone';

// Triple export pattern
export { MartiniFillDuotone, MartiniFillDuotone as MartiniFillDuotoneIcon, MartiniFillDuotone as SiMartiniFillDuotone };
export default MartiniFillDuotone;
export type { MartiniFillDuotoneProps };
