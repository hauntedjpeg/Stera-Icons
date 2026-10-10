import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.3 4.3c.38-.4 1.02-.4 1.4 0l7 7q.3.28.3.7t-.3.7l-7 7c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l6.29-6.3-6.3-6.3c-.39-.38-.39-1.02 0-1.4" opacity={.4} />
        <path d="M12.3 4.3c.38-.4 1.02-.4 1.4 0l7 7q.3.28.3.7t-.3.7l-7 7c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l6.29-6.3-6.3-6.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ChevronsRightBoldDuotone.displayName = 'ChevronsRightBoldDuotone';

// Triple export pattern
export { ChevronsRightBoldDuotone, ChevronsRightBoldDuotone as ChevronsRightBoldDuotoneIcon, ChevronsRightBoldDuotone as SiChevronsRightBoldDuotone };
export default ChevronsRightBoldDuotone;
export type { ChevronsRightBoldDuotoneProps };
