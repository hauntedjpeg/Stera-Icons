import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OptionKeyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const OptionKeyFillDuotone = memo(
  forwardRef<SVGSVGElement, OptionKeyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 3.75c.69 0 1.25.56 1.25 1.25S21.69 6.25 21 6.25h-6.5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" opacity={.4} />
        <path d="M9 3.75c.5 0 .95.3 1.15.76l5.67 13.24H21c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-6c-.5 0-.95-.3-1.15-.76L8.18 6.25H3c-.69 0-1.25-.56-1.25-1.25S2.31 3.75 3 3.75z" />
    </IconBase>
  ))
);

OptionKeyFillDuotone.displayName = 'OptionKeyFillDuotone';

// Triple export pattern
export { OptionKeyFillDuotone, OptionKeyFillDuotone as OptionKeyFillDuotoneIcon, OptionKeyFillDuotone as SiOptionKeyFillDuotone };
export default OptionKeyFillDuotone;
export type { OptionKeyFillDuotoneProps };
