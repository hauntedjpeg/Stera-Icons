import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsRightRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronsRightRegular = memo(
  forwardRef<SVGSVGElement, ChevronsRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.47 4.47c.3-.3.77-.3 1.06 0l7 7q.22.22.22.53t-.22.53l-7 7c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L10.94 12 4.47 5.53c-.3-.3-.3-.77 0-1.06" />
        <path d="M12.47 4.47c.3-.3.77-.3 1.06 0l7 7q.21.22.22.53 0 .31-.22.53l-7 7c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L18.94 12l-6.47-6.47c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ChevronsRightRegular.displayName = 'ChevronsRightRegular';

// Triple export pattern
export { ChevronsRightRegular, ChevronsRightRegular as ChevronsRightRegularIcon, ChevronsRightRegular as SiChevronsRightRegular };
export default ChevronsRightRegular;
export type { ChevronsRightRegularProps };
