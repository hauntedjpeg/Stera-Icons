import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EggFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EggFillDuotone = memo(
  forwardRef<SVGSVGElement, EggFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.88c1.32 0 2.97 1.09 4.35 3.02a12 12 0 0 1 2.27 6.6c0 4.38-3.49 6.63-6.62 6.63s-6.62-2.25-6.62-6.63c0-2.27.92-4.72 2.27-6.6C9.03 4.97 10.68 3.87 12 3.87" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.13c2.18 0 4.28 1.67 5.77 3.75a13.6 13.6 0 0 1 2.6 7.62c0 5.56-4.5 8.38-8.37 8.38s-8.37-2.82-8.37-8.38c0-2.7 1.07-5.5 2.6-7.62C7.72 3.8 9.83 2.13 12 2.13m0 1.75c-1.32 0-2.97 1.09-4.35 3.02a12 12 0 0 0-2.28 6.6c0 4.38 3.5 6.63 6.63 6.63s6.63-2.25 6.63-6.63c0-2.27-.93-4.72-2.28-6.6-1.38-1.93-3.03-3.03-4.35-3.03" clipRule="evenodd" />
    </IconBase>
  ))
);

EggFillDuotone.displayName = 'EggFillDuotone';

// Triple export pattern
export { EggFillDuotone, EggFillDuotone as EggFillDuotoneIcon, EggFillDuotone as SiEggFillDuotone };
export default EggFillDuotone;
export type { EggFillDuotoneProps };
