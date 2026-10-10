import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullLeftBold = memo(
  forwardRef<SVGSVGElement, ChevronFullLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.3 4.3c.28-.3.7-.38 1.08-.22.38.15.62.52.62.92v14c0 .4-.24.77-.62.92-.37.16-.8.07-1.09-.21l-7-7Q7.01 12.4 7 12q0-.42.3-.7zM9.4 12 14 16.59V7.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullLeftBold.displayName = 'ChevronFullLeftBold';

// Triple export pattern
export { ChevronFullLeftBold, ChevronFullLeftBold as ChevronFullLeftBoldIcon, ChevronFullLeftBold as SiChevronFullLeftBold };
export default ChevronFullLeftBold;
export type { ChevronFullLeftBoldProps };
