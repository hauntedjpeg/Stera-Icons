import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullRightBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullRightBold = memo(
  forwardRef<SVGSVGElement, ChevronFullRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.62 4.08c.37-.16.8-.07 1.09.21l7 7c.39.4.39 1.03 0 1.42l-7 7c-.29.28-.72.37-1.1.21C8.25 19.77 8 19.4 8 19V5c0-.4.24-.77.62-.92M10 16.58 14.59 12 10 7.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullRightBold.displayName = 'ChevronFullRightBold';

// Triple export pattern
export { ChevronFullRightBold, ChevronFullRightBold as ChevronFullRightBoldIcon, ChevronFullRightBold as SiChevronFullRightBold };
export default ChevronFullRightBold;
export type { ChevronFullRightBoldProps };
