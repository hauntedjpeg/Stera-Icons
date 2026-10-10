import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigDownBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowBigDownBold = memo(
  forwardRef<SVGSVGElement, ArrowBigDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14 3c1.66 0 3 1.34 3 3v3.5h3.8c1.33 0 2 1.62 1.05 2.56l-8.26 8.26c-.88.88-2.3.88-3.18 0l-8.26-8.26C1.2 11.12 1.87 9.5 3.2 9.5H7V6c0-1.66 1.34-3 3-3zm-4 2c-.55 0-1 .45-1 1v4.5c0 .55-.45 1-1 1H4.41l7.41 7.4c.1.1.26.1.36 0l7.4-7.4H16c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowBigDownBold.displayName = 'ArrowBigDownBold';

// Triple export pattern
export { ArrowBigDownBold, ArrowBigDownBold as ArrowBigDownBoldIcon, ArrowBigDownBold as SiArrowBigDownBold };
export default ArrowBigDownBold;
export type { ArrowBigDownBoldProps };
