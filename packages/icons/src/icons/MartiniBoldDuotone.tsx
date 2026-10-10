import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MartiniBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MartiniBoldDuotone = memo(
  forwardRef<SVGSVGElement, MartiniBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 19h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-6.09l.3.3a1 1 0 0 0 1.4 0l.3-.3z" opacity={.4} />
        <path fillRule="evenodd" d="M20.5 3a1 1 0 0 1 .7 1.7l-8.5 8.5a1 1 0 0 1-1.4 0L2.8 4.7A1 1 0 0 1 3.5 3zM12 11.09 18.09 5H5.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

MartiniBoldDuotone.displayName = 'MartiniBoldDuotone';

// Triple export pattern
export { MartiniBoldDuotone, MartiniBoldDuotone as MartiniBoldDuotoneIcon, MartiniBoldDuotone as SiMartiniBoldDuotone };
export default MartiniBoldDuotone;
export type { MartiniBoldDuotoneProps };
