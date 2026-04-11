import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinusCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, MinusCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-4 9a.87.87 0 1 0 0 1.74h8a.88.88 0 0 0 0-1.75z" clipRule="evenodd" opacity={.4} />
        <path d="M16 11.12a.87.87 0 1 1 0 1.75H8a.88.88 0 0 1 0-1.75z" />
    </IconBase>
  ))
);

MinusCircleFillDuotone.displayName = 'MinusCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { MinusCircleFillDuotone, MinusCircleFillDuotone as MinusCircleFillDuotoneIcon, MinusCircleFillDuotone as SiMinusCircleFillDuotone };
export default MinusCircleFillDuotone;
export type { MinusCircleFillDuotoneProps };
