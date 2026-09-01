import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, LabelAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.92 7.69a1 1 0 0 1 1.4.23l1.66 2.34a3 3 0 0 1 0 3.48l-1.67 2.34a1 1 0 1 1-1.62-1.16l1.67-2.34a1 1 0 0 0 0-1.16l-1.67-2.34a1 1 0 0 1 .23-1.4" />
        <path d="M15.97 4a3 3 0 0 1 2.44 1.26l1.9 2.66a1 1 0 1 0-1.62 1.16l-1.9-2.66a1 1 0 0 0-.82-.42H3.94l3.04 4.26a3 3 0 0 1 0 3.48L3.94 18h12.03a1 1 0 0 0 .81-.42l1.9-2.66a1 1 0 1 0 1.63 1.16l-1.9 2.66A3 3 0 0 1 15.97 20H3.94a2 2 0 0 1-1.62-3.16l3.04-4.26a1 1 0 0 0 0-1.16L2.32 7.16A2 2 0 0 1 3.94 4z" opacity={.4} />
    </IconBase>
  ))
);

LabelAltBoldDuotone.displayName = 'LabelAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { LabelAltBoldDuotone, LabelAltBoldDuotone as LabelAltBoldDuotoneIcon, LabelAltBoldDuotone as SiLabelAltBoldDuotone };
export default LabelAltBoldDuotone;
export type { LabelAltBoldDuotoneProps };
