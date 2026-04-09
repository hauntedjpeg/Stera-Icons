import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusCircleFillProps = Omit<IconBaseProps, 'children'>;

const MinusCircleFill = memo(
  forwardRef<SVGSVGElement, MinusCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="minus-circle-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-4 9a.87.87 0 1 0 0 1.74h8a.88.88 0 0 0 0-1.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

MinusCircleFill.displayName = 'MinusCircleFill';

// Triple export pattern (lucide-react style)
export { MinusCircleFill, MinusCircleFill as MinusCircleFillIcon, MinusCircleFill as SiMinusCircleFill };
export default MinusCircleFill;
export type { MinusCircleFillProps };
