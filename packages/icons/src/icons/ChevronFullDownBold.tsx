import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullDownBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullDownBold = memo(
  forwardRef<SVGSVGElement, ChevronFullDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 8c.4 0 .77.24.92.62.16.37.07.8-.21 1.09l-7 7q-.3.28-.71.29-.42 0-.7-.3l-7-7c-.3-.28-.38-.7-.22-1.08C4.23 8.24 4.6 8 5 8zm-7 6.59L16.59 10H7.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullDownBold.displayName = 'ChevronFullDownBold';

// Triple export pattern
export { ChevronFullDownBold, ChevronFullDownBold as ChevronFullDownBoldIcon, ChevronFullDownBold as SiChevronFullDownBold };
export default ChevronFullDownBold;
export type { ChevronFullDownBoldProps };
