import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsLeftRightEllipsisRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftRightEllipsisRegular = memo(
  forwardRef<SVGSVGElement, ChevronsLeftRightEllipsisRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.47 6.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L3.06 12l4.47 4.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-5-5q-.22-.22-.22-.53t.22-.53zM16.47 6.47c.3-.3.77-.3 1.06 0l5 5q.22.22.22.53t-.22.53l-5 5c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L20.94 12l-4.47-4.47c-.3-.3-.3-.77 0-1.06" />
        <path d="M8 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M12 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M16 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1" />
    </IconBase>
  ))
);

ChevronsLeftRightEllipsisRegular.displayName = 'ChevronsLeftRightEllipsisRegular';

// Triple export pattern
export { ChevronsLeftRightEllipsisRegular, ChevronsLeftRightEllipsisRegular as ChevronsLeftRightEllipsisRegularIcon, ChevronsLeftRightEllipsisRegular as SiChevronsLeftRightEllipsisRegular };
export default ChevronsLeftRightEllipsisRegular;
export type { ChevronsLeftRightEllipsisRegularProps };
