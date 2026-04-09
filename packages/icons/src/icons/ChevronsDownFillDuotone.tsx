import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-down-fill-duotone" {...props}>
      <path d="M18.12 4.12a1.25 1.25 0 1 1 1.76 1.76l-7 7a1.25 1.25 0 0 1-1.76 0l-7-7a1.25 1.25 0 1 1 1.76-1.76L12 10.23z" opacity={.4} />
        <path d="M18.12 12.12a1.25 1.25 0 1 1 1.76 1.76l-7 7a1.25 1.25 0 0 1-1.76 0l-7-7a1.25 1.25 0 1 1 1.76-1.76L12 18.23z" />
    </IconBase>
  ))
);

ChevronsDownFillDuotone.displayName = 'ChevronsDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronsDownFillDuotone, ChevronsDownFillDuotone as ChevronsDownFillDuotoneIcon, ChevronsDownFillDuotone as SiChevronsDownFillDuotone };
export default ChevronsDownFillDuotone;
export type { ChevronsDownFillDuotoneProps };
