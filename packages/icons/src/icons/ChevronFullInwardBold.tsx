import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullInwardBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullInwardBold = memo(
  forwardRef<SVGSVGElement, ChevronFullInwardBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.3 14.3c.38-.4 1.02-.4 1.4 0l6 6c.3.28.38.7.22 1.08-.15.38-.52.62-.92.62H6c-.4 0-.77-.24-.92-.62-.16-.37-.07-.8.21-1.09zM8.4 20h7.18L12 16.41zM18 2c.4 0 .77.24.92.62.16.37.07.8-.21 1.09l-6 6c-.4.39-1.03.39-1.42 0l-6-6c-.28-.29-.37-.72-.21-1.1C5.23 2.25 5.6 2 6 2zm-6 5.59L15.59 4H8.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullInwardBold.displayName = 'ChevronFullInwardBold';

// Triple export pattern
export { ChevronFullInwardBold, ChevronFullInwardBold as ChevronFullInwardBoldIcon, ChevronFullInwardBold as SiChevronFullInwardBold };
export default ChevronFullInwardBold;
export type { ChevronFullInwardBoldProps };
