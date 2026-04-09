import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-left-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M18.98 18.98A9.88 9.88 0 1 0 5.02 5.02a9.88 9.88 0 0 0 13.96 13.96m-3.53-3.53a.87.87 0 0 1-1.24 0l-4.16-4.17v3.55a.88.88 0 0 1-1.75 0V9.17a.9.9 0 0 1 .87-.87h5.66a.88.88 0 0 1 0 1.75h-3.55l4.17 4.16c.34.34.34.9 0 1.24" clipRule="evenodd" opacity={.4} />
        <path d="M15.45 15.45a.87.87 0 0 0 0-1.24l-4.17-4.16h3.55a.88.88 0 0 0 0-1.75H9.17a.9.9 0 0 0-.87.87v5.66a.88.88 0 0 0 1.75 0v-3.54l4.16 4.16c.34.34.9.34 1.24 0" />
    </IconBase>
  ))
);

ArrowCircleUpLeftFillDuotone.displayName = 'ArrowCircleUpLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpLeftFillDuotone, ArrowCircleUpLeftFillDuotone as ArrowCircleUpLeftFillDuotoneIcon, ArrowCircleUpLeftFillDuotone as SiArrowCircleUpLeftFillDuotone };
export default ArrowCircleUpLeftFillDuotone;
export type { ArrowCircleUpLeftFillDuotoneProps };
