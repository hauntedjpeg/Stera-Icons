import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsLeftFillProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftFill = memo(
  forwardRef<SVGSVGElement, ChevronsLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-left-fill" {...props}>
      <path d="M10.12 4.12a1.25 1.25 0 1 1 1.76 1.76L5.77 12l6.11 6.12a1.25 1.25 0 1 1-1.76 1.76l-7-7a1.25 1.25 0 0 1 0-1.76z" />
        <path d="M18.12 4.12a1.25 1.25 0 1 1 1.76 1.76L13.77 12l6.11 6.12a1.25 1.25 0 1 1-1.76 1.76l-7-7a1.25 1.25 0 0 1 0-1.76z" />
    </IconBase>
  ))
);

ChevronsLeftFill.displayName = 'ChevronsLeftFill';

// Triple export pattern (lucide-react style)
export { ChevronsLeftFill, ChevronsLeftFill as ChevronsLeftFillIcon, ChevronsLeftFill as SiChevronsLeftFill };
export default ChevronsLeftFill;
export type { ChevronsLeftFillProps };
