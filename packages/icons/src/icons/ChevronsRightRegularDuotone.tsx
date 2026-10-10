import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.47 4.47c.3-.3.77-.3 1.06 0l7 7q.22.22.22.53t-.22.53l-7 7c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L10.94 12 4.47 5.53c-.3-.3-.3-.77 0-1.06" opacity={.4} />
        <path d="M12.47 4.47c.3-.3.77-.3 1.06 0l7 7q.21.22.22.53 0 .31-.22.53l-7 7c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L18.94 12l-6.47-6.47c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ChevronsRightRegularDuotone.displayName = 'ChevronsRightRegularDuotone';

// Triple export pattern
export { ChevronsRightRegularDuotone, ChevronsRightRegularDuotone as ChevronsRightRegularDuotoneIcon, ChevronsRightRegularDuotone as SiChevronsRightRegularDuotone };
export default ChevronsRightRegularDuotone;
export type { ChevronsRightRegularDuotoneProps };
