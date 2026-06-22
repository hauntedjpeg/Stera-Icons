import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ContrastCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3.75a8.25 8.25 0 0 1 0 16.5V16.5a4.5 4.5 0 0 1 0-9zm0 12.75a4.5 4.5 0 1 0 0-9z" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.5a4.5 4.5 0 1 1 0 9z" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 5.25a4.5 4.5 0 0 0 0 9v3.75a8.25 8.25 0 0 0 0-16.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastCircleRegularDuotone.displayName = 'ContrastCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { ContrastCircleRegularDuotone, ContrastCircleRegularDuotone as ContrastCircleRegularDuotoneIcon, ContrastCircleRegularDuotone as SiContrastCircleRegularDuotone };
export default ContrastCircleRegularDuotone;
export type { ContrastCircleRegularDuotoneProps };
