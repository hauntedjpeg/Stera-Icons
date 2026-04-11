import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsRightFillProps = Omit<IconBaseProps, 'children'>;

const ChevronsRightFill = memo(
  forwardRef<SVGSVGElement, ChevronsRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.12 4.12a1.25 1.25 0 0 1 1.76 0l7 7a1.25 1.25 0 0 1 0 1.76l-7 7a1.25 1.25 0 1 1-1.76-1.76L10.23 12 4.12 5.88a1.25 1.25 0 0 1 0-1.76" />
        <path d="M12.12 4.12a1.25 1.25 0 0 1 1.76 0l7 7a1.25 1.25 0 0 1 0 1.76l-7 7a1.25 1.25 0 1 1-1.76-1.76L18.23 12l-6.11-6.12a1.25 1.25 0 0 1 0-1.76" />
    </IconBase>
  ))
);

ChevronsRightFill.displayName = 'ChevronsRightFill';

// Triple export pattern (lucide-react style)
export { ChevronsRightFill, ChevronsRightFill as ChevronsRightFillIcon, ChevronsRightFill as SiChevronsRightFill };
export default ChevronsRightFill;
export type { ChevronsRightFillProps };
