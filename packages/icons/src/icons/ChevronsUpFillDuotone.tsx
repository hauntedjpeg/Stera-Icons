import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-up-fill-duotone" {...props}>
      <path d="M12 2.75c.33 0 .65.13.88.37l7 7a1.25 1.25 0 0 1-1.76 1.76L12 5.77l-6.12 6.11a1.25 1.25 0 1 1-1.76-1.76l7-7q.37-.37.88-.37" />
        <path d="M12 10.75c.33 0 .65.13.88.37l7 7a1.25 1.25 0 0 1-1.76 1.76L12 13.77l-6.12 6.11a1.25 1.25 0 1 1-1.76-1.76l7-7q.37-.37.88-.37" opacity={.4} />
    </IconBase>
  ))
);

ChevronsUpFillDuotone.displayName = 'ChevronsUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronsUpFillDuotone, ChevronsUpFillDuotone as ChevronsUpFillDuotoneIcon, ChevronsUpFillDuotone as SiChevronsUpFillDuotone };
export default ChevronsUpFillDuotone;
export type { ChevronsUpFillDuotoneProps };
