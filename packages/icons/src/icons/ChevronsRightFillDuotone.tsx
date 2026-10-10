import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.12 4.12c.48-.5 1.28-.5 1.76 0l7 7q.37.37.37.88c0 .33-.13.65-.37.88l-7 7c-.48.5-1.28.5-1.76 0-.5-.48-.5-1.28 0-1.76L10.23 12 4.12 5.88c-.5-.48-.5-1.28 0-1.76" opacity={.4} />
        <path d="M12.12 4.12c.48-.5 1.28-.5 1.76 0l7 7q.36.37.37.88c0 .33-.13.65-.37.88l-7 7c-.48.5-1.28.5-1.76 0-.5-.48-.5-1.28 0-1.76L18.23 12l-6.11-6.12c-.5-.48-.5-1.28 0-1.76" />
    </IconBase>
  ))
);

ChevronsRightFillDuotone.displayName = 'ChevronsRightFillDuotone';

// Triple export pattern
export { ChevronsRightFillDuotone, ChevronsRightFillDuotone as ChevronsRightFillDuotoneIcon, ChevronsRightFillDuotone as SiChevronsRightFillDuotone };
export default ChevronsRightFillDuotone;
export type { ChevronsRightFillDuotoneProps };
