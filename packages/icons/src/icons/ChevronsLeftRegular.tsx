import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftRegular = memo(
  forwardRef<SVGSVGElement, ChevronsLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.47 4.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L5.06 12l6.47 6.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-7-7q-.21-.22-.22-.53 0-.31.22-.53z" />
        <path d="M18.47 4.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L13.06 12l6.47 6.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-7-7q-.21-.22-.22-.53 0-.31.22-.53z" />
    </IconBase>
  ))
);

ChevronsLeftRegular.displayName = 'ChevronsLeftRegular';

// Triple export pattern
export { ChevronsLeftRegular, ChevronsLeftRegular as ChevronsLeftRegularIcon, ChevronsLeftRegular as SiChevronsLeftRegular };
export default ChevronsLeftRegular;
export type { ChevronsLeftRegularProps };
