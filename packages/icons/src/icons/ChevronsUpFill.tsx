import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronsUpFill = memo(
  forwardRef<SVGSVGElement, ChevronsUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 10.75c.33 0 .65.13.88.37l7 7a1.25 1.25 0 0 1-1.76 1.76L12 13.77l-6.12 6.11a1.25 1.25 0 1 1-1.76-1.76l7-7c.23-.24.55-.37.88-.37" />
        <path d="M12 2.75c.33 0 .65.13.88.37l7 7a1.25 1.25 0 0 1-1.76 1.76L12 5.77l-6.12 6.11a1.25 1.25 0 1 1-1.76-1.76l7-7c.23-.24.55-.37.88-.37" />
    </IconBase>
  ))
);

ChevronsUpFill.displayName = 'ChevronsUpFill';

// Triple export pattern (lucide-react style)
export { ChevronsUpFill, ChevronsUpFill as ChevronsUpFillIcon, ChevronsUpFill as SiChevronsUpFill };
export default ChevronsUpFill;
export type { ChevronsUpFillProps };
