import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, ContrastCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.5c-1.2 0-2.34.47-3.18 1.32C7.97 9.66 7.5 10.8 7.5 12s.47 2.34 1.32 3.18c.84.85 1.99 1.32 3.18 1.32v5.38c-2.62 0-5.13-1.05-6.98-2.9s-2.9-4.36-2.9-6.98 1.05-5.13 2.9-6.98 4.36-2.9 6.98-2.9zM12 7.5c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5z" />
        <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88V16.5c-1.2 0-2.34-.47-3.18-1.32C7.97 14.34 7.5 13.2 7.5 12s.47-2.34 1.32-3.18C9.66 7.97 10.8 7.5 12 7.5zm0 14.37c2.49 0 4.5-2.01 4.5-4.5S14.49 7.5 12 7.5z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

ContrastCircleFillDuotone.displayName = 'ContrastCircleFillDuotone';

// Triple export pattern
export { ContrastCircleFillDuotone, ContrastCircleFillDuotone as ContrastCircleFillDuotoneIcon, ContrastCircleFillDuotone as SiContrastCircleFillDuotone };
export default ContrastCircleFillDuotone;
export type { ContrastCircleFillDuotoneProps };
