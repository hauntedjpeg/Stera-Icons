import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.89 14.12H7.1L12 9.24z" opacity={.4} />
        <path fillRule="evenodd" d="M11.38 7.38a.9.9 0 0 1 1.24 0l7 7a.88.88 0 0 1-.62 1.5H5a.88.88 0 0 1-.62-1.5zm-4.27 6.74h9.78L12 9.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullUpFillDuotone.displayName = 'ChevronFullUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullUpFillDuotone, ChevronFullUpFillDuotone as ChevronFullUpFillDuotoneIcon, ChevronFullUpFillDuotone as SiChevronFullUpFillDuotone };
export default ChevronFullUpFillDuotone;
export type { ChevronFullUpFillDuotoneProps };
