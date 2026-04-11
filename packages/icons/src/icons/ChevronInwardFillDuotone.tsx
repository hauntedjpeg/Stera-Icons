import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronInwardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronInwardFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronInwardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.38 14.38a.9.9 0 0 1 1.24 0l6 6a.88.88 0 0 1-.62 1.5H6a.88.88 0 0 1-.62-1.5z" opacity={.4} />
        <path d="M18 2.13a.88.88 0 0 1 .62 1.49l-6 6a.9.9 0 0 1-1.24 0l-6-6A.88.88 0 0 1 6 2.12z" />
    </IconBase>
  ))
);

ChevronInwardFillDuotone.displayName = 'ChevronInwardFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronInwardFillDuotone, ChevronInwardFillDuotone as ChevronInwardFillDuotoneIcon, ChevronInwardFillDuotone as SiChevronInwardFillDuotone };
export default ChevronInwardFillDuotone;
export type { ChevronInwardFillDuotoneProps };
