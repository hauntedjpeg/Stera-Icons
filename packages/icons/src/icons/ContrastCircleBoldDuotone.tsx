import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ContrastCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4a8 8 0 1 1 0 16v-3.5a4.5 4.5 0 0 1 0-9zm0 12.5a4.5 4.5 0 1 0 0-9z" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.5a4.5 4.5 0 1 1 0 9z" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 5.5a4.5 4.5 0 0 0 0 9V20a8 8 0 1 0 0-16z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastCircleBoldDuotone.displayName = 'ContrastCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { ContrastCircleBoldDuotone, ContrastCircleBoldDuotone as ContrastCircleBoldDuotoneIcon, ContrastCircleBoldDuotone as SiContrastCircleBoldDuotone };
export default ContrastCircleBoldDuotone;
export type { ContrastCircleBoldDuotoneProps };
