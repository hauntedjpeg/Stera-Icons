import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlusFillDuotone = memo(
  forwardRef<SVGSVGElement, PlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="plus-fill-duotone" {...props}>
      <path d="M10.75 13.25H4a1.25 1.25 0 1 1 0-2.5h6.75zM20 10.75a1.25 1.25 0 1 1 0 2.5h-6.75v-2.5z" opacity={0.4} />
        <path d="M12 2.75c.69 0 1.25.56 1.25 1.25v16a1.25 1.25 0 1 1-2.5 0V4c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

PlusFillDuotone.displayName = 'PlusFillDuotone';

// Triple export pattern (lucide-react style)
export { PlusFillDuotone, PlusFillDuotone as PlusFillDuotoneIcon, PlusFillDuotone as SiPlusFillDuotone };
export default PlusFillDuotone;
export type { PlusFillDuotoneProps };
