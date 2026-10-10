import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastCircleFillProps = Omit<IconBaseProps, 'children'>;

const ContrastCircleFill = memo(
  forwardRef<SVGSVGElement, ContrastCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.5c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5z" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 5.75c-1.2 0-2.34.47-3.18 1.32C7.97 9.66 7.5 10.8 7.5 12s.47 2.34 1.32 3.18c.84.85 1.99 1.32 3.18 1.32v3.25c4.28 0 7.75-3.47 7.75-7.75S16.28 4.25 12 4.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastCircleFill.displayName = 'ContrastCircleFill';

// Triple export pattern
export { ContrastCircleFill, ContrastCircleFill as ContrastCircleFillIcon, ContrastCircleFill as SiContrastCircleFill };
export default ContrastCircleFill;
export type { ContrastCircleFillProps };
