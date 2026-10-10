import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EyeBoldDuotone = memo(
  forwardRef<SVGSVGElement, EyeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4c4.92 0 9.1 3.17 10.93 7.62q.15.38 0 .76C21.1 16.83 16.93 20 12 20s-9.1-3.17-10.93-7.62q-.15-.38 0-.76C2.9 7.17 7.07 4 12 4m0 2c-3.89 0-7.3 2.42-8.91 6C4.7 15.58 8.1 18 12 18s7.29-2.42 8.91-6C19.3 8.42 15.9 6 12 6" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

EyeBoldDuotone.displayName = 'EyeBoldDuotone';

// Triple export pattern
export { EyeBoldDuotone, EyeBoldDuotone as EyeBoldDuotoneIcon, EyeBoldDuotone as SiEyeBoldDuotone };
export default EyeBoldDuotone;
export type { EyeBoldDuotoneProps };
