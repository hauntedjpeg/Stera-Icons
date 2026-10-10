import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinusCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, MinusCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m-4 9c-.48 0-.87.38-.87.87 0 .48.39.87.87.87h8c.48 0 .88-.4.88-.87 0-.49-.4-.88-.88-.88z" clipRule="evenodd" opacity={.4} />
        <path d="M16 11.12c.48 0 .88.4.88.88s-.4.87-.88.87H8c-.48 0-.87-.4-.87-.87 0-.49.39-.88.87-.88z" />
    </IconBase>
  ))
);

MinusCircleFillDuotone.displayName = 'MinusCircleFillDuotone';

// Triple export pattern
export { MinusCircleFillDuotone, MinusCircleFillDuotone as MinusCircleFillDuotoneIcon, MinusCircleFillDuotone as SiMinusCircleFillDuotone };
export default MinusCircleFillDuotone;
export type { MinusCircleFillDuotoneProps };
