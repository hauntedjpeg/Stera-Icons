import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, LabelAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.92 7.69c.45-.32 1.07-.22 1.4.23l1.66 2.34c.75 1.04.75 2.44 0 3.48l-1.67 2.34c-.32.45-.94.55-1.4.23-.44-.32-.54-.94-.22-1.4l1.67-2.33c.24-.35.24-.81 0-1.16l-1.67-2.34c-.32-.45-.22-1.07.23-1.4" />
        <path d="M15.97 4c.97 0 1.88.47 2.44 1.26l1.9 2.66c-.32-.45-.94-.55-1.4-.23-.44.32-.54.94-.22 1.4l-1.9-2.67q-.32-.4-.82-.42H3.94l3.04 4.26c.75 1.04.75 2.44 0 3.48L3.94 18h12.03c.32 0 .63-.16.81-.42l1.9-2.66c-.31.45-.21 1.07.24 1.4.45.31 1.07.21 1.4-.24l-1.9 2.66c-.57.8-1.48 1.26-2.45 1.26H3.94c-1.62 0-2.57-1.84-1.62-3.16l3.04-4.26c.24-.35.24-.81 0-1.16L2.32 7.16C1.37 5.84 2.32 4 3.94 4z" opacity={.4} />
    </IconBase>
  ))
);

LabelAltBoldDuotone.displayName = 'LabelAltBoldDuotone';

// Triple export pattern
export { LabelAltBoldDuotone, LabelAltBoldDuotone as LabelAltBoldDuotoneIcon, LabelAltBoldDuotone as SiLabelAltBoldDuotone };
export default LabelAltBoldDuotone;
export type { LabelAltBoldDuotoneProps };
