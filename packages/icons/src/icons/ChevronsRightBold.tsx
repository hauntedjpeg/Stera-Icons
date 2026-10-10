import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsRightBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronsRightBold = memo(
  forwardRef<SVGSVGElement, ChevronsRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.3 4.3c.38-.4 1.02-.4 1.4 0l7 7q.3.28.3.7t-.3.7l-7 7c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l6.29-6.3-6.3-6.3c-.39-.38-.39-1.02 0-1.4" />
        <path d="M12.3 4.3c.38-.4 1.02-.4 1.4 0l7 7q.3.28.3.7t-.3.7l-7 7c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l6.29-6.3-6.3-6.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ChevronsRightBold.displayName = 'ChevronsRightBold';

// Triple export pattern
export { ChevronsRightBold, ChevronsRightBold as ChevronsRightBoldIcon, ChevronsRightBold as SiChevronsRightBold };
export default ChevronsRightBold;
export type { ChevronsRightBoldProps };
