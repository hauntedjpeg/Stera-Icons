import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OptionKeyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const OptionKeyFillDuotone = memo(
  forwardRef<SVGSVGElement, OptionKeyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 3.75a1.25 1.25 0 0 1 0 2.5h-6.5a1.25 1.25 0 1 1 0-2.5z" opacity={.4} />
        <path d="M9 3.75c.5 0 .95.3 1.15.76l5.67 13.24H21a1.25 1.25 0 1 1 0 2.5h-6c-.5 0-.95-.3-1.15-.76L8.18 6.25H3a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

OptionKeyFillDuotone.displayName = 'OptionKeyFillDuotone';

// Triple export pattern (lucide-react style)
export { OptionKeyFillDuotone, OptionKeyFillDuotone as OptionKeyFillDuotoneIcon, OptionKeyFillDuotone as SiOptionKeyFillDuotone };
export default OptionKeyFillDuotone;
export type { OptionKeyFillDuotoneProps };
