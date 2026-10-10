import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendHFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendHFillDuotone = memo(
  forwardRef<SVGSVGElement, SendHFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2.97 5.6c-.95-1.73.9-3.64 2.66-2.76l14.73 7.36c1.48.74 1.48 2.86 0 3.6L5.63 21.16c-1.76.88-3.6-1.03-2.66-2.76l3.01-5.52H13c.48 0 .87-.4.87-.88s-.39-.87-.87-.87H5.98z" opacity={.4} />
        <path d="M13 11.13c.48 0 .88.39.88.87s-.4.88-.88.88H5.98l.48-.88-.48-.87z" />
    </IconBase>
  ))
);

SendHFillDuotone.displayName = 'SendHFillDuotone';

// Triple export pattern
export { SendHFillDuotone, SendHFillDuotone as SendHFillDuotoneIcon, SendHFillDuotone as SiSendHFillDuotone };
export default SendHFillDuotone;
export type { SendHFillDuotoneProps };
