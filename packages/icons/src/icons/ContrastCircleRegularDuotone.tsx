import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ContrastCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3.75c4.56 0 8.25 3.7 8.25 8.25s-3.7 8.25-8.25 8.25V16.5c-1.2 0-2.34-.47-3.18-1.32C7.97 14.34 7.5 13.2 7.5 12s.47-2.34 1.32-3.18C9.66 7.97 10.8 7.5 12 7.5zm0 12.75c2.49 0 4.5-2.01 4.5-4.5S14.49 7.5 12 7.5z" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.5c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5z" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 5.25c-1.2 0-2.34.47-3.18 1.32C7.97 9.66 7.5 10.8 7.5 12s.47 2.34 1.32 3.18c.84.85 1.99 1.32 3.18 1.32v3.75c4.56 0 8.25-3.7 8.25-8.25S16.55 3.75 12 3.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastCircleRegularDuotone.displayName = 'ContrastCircleRegularDuotone';

// Triple export pattern
export { ContrastCircleRegularDuotone, ContrastCircleRegularDuotone as ContrastCircleRegularDuotoneIcon, ContrastCircleRegularDuotone as SiContrastCircleRegularDuotone };
export default ContrastCircleRegularDuotone;
export type { ContrastCircleRegularDuotoneProps };
