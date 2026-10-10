import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowBigLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowBigLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.94 2.15c.94-.95 2.56-.28 2.56 1.06V7H18c1.66 0 3 1.34 3 3v4c0 1.66-1.34 3-3 3h-3.5v3.8c0 1.33-1.62 2-2.56 1.05L3.68 13.6c-.88-.88-.88-2.3 0-3.18zm-6.85 9.67c-.1.1-.1.26 0 .36l7.41 7.4V16c0-.55.45-1 1-1H18c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-4.5c-.55 0-1-.45-1-1V4.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowBigLeftBold.displayName = 'ArrowBigLeftBold';

// Triple export pattern
export { ArrowBigLeftBold, ArrowBigLeftBold as ArrowBigLeftBoldIcon, ArrowBigLeftBold as SiArrowBigLeftBold };
export default ArrowBigLeftBold;
export type { ArrowBigLeftBoldProps };
