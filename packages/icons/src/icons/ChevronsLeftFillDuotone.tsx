import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-left-fill-duotone" {...props}>
      <path d="M10.12 4.12a1.25 1.25 0 1 1 1.76 1.76L5.77 12l6.11 6.12a1.25 1.25 0 1 1-1.76 1.76l-7-7a1.25 1.25 0 0 1 0-1.76z" />
        <path d="M18.12 4.12a1.25 1.25 0 1 1 1.76 1.76L13.77 12l6.11 6.12a1.25 1.25 0 1 1-1.76 1.76l-7-7a1.25 1.25 0 0 1 0-1.76z" opacity={.4} />
    </IconBase>
  ))
);

ChevronsLeftFillDuotone.displayName = 'ChevronsLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronsLeftFillDuotone, ChevronsLeftFillDuotone as ChevronsLeftFillDuotoneIcon, ChevronsLeftFillDuotone as SiChevronsLeftFillDuotone };
export default ChevronsLeftFillDuotone;
export type { ChevronsLeftFillDuotoneProps };
