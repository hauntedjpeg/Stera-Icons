import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ContrastCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4c4.42 0 8 3.58 8 8s-3.58 8-8 8v-3.5c-1.2 0-2.34-.47-3.18-1.32C7.97 14.34 7.5 13.2 7.5 12s.47-2.34 1.32-3.18C9.66 7.97 10.8 7.5 12 7.5zm0 12.5c2.49 0 4.5-2.01 4.5-4.5S14.49 7.5 12 7.5z" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.5c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5z" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 5.5c-1.2 0-2.34.47-3.18 1.32C7.97 9.66 7.5 10.8 7.5 12s.47 2.34 1.32 3.18c.84.85 1.99 1.32 3.18 1.32V20c4.42 0 8-3.58 8-8s-3.58-8-8-8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastCircleBoldDuotone.displayName = 'ContrastCircleBoldDuotone';

// Triple export pattern
export { ContrastCircleBoldDuotone, ContrastCircleBoldDuotone as ContrastCircleBoldDuotoneIcon, ContrastCircleBoldDuotone as SiContrastCircleBoldDuotone };
export default ContrastCircleBoldDuotone;
export type { ContrastCircleBoldDuotoneProps };
