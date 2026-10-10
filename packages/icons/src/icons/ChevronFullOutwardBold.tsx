import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullOutwardBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullOutwardBold = memo(
  forwardRef<SVGSVGElement, ChevronFullOutwardBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18 15c.4 0 .77.24.92.62.16.37.07.8-.21 1.09l-6 6c-.4.39-1.03.39-1.42 0l-6-6c-.28-.29-.37-.72-.21-1.1.15-.37.52-.61.92-.61zm-6 5.59L15.59 17H8.4zM11.3 1.3c.38-.4 1.02-.4 1.4 0l6 6c.3.28.38.7.22 1.08-.15.38-.52.62-.92.62H6c-.4 0-.77-.24-.92-.62-.16-.37-.07-.8.21-1.09zM8.4 7h7.18L12 3.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullOutwardBold.displayName = 'ChevronFullOutwardBold';

// Triple export pattern
export { ChevronFullOutwardBold, ChevronFullOutwardBold as ChevronFullOutwardBoldIcon, ChevronFullOutwardBold as SiChevronFullOutwardBold };
export default ChevronFullOutwardBold;
export type { ChevronFullOutwardBoldProps };
