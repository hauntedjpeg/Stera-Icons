import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 7c1.66 0 3 1.34 3 3v4c0 1.66-1.34 3-3 3h-3.5v-1c0-.55-.45-1-1-1q-.21 0-.39.08-.1.03-.17.1.24-.18.56-.18H18c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-4.5q-.21 0-.39-.08.09.04.19.06l.2.02c.55 0 1-.45 1-1V7zM12.73 15.36q-.09.12-.15.25l-.04.1q-.02.09-.03.19.02-.26.16-.46z" opacity={0.4} />
        <path d="M11.94 2.15c.94-.95 2.56-.28 2.56 1.06V8c0 .55-.45 1-1 1s-1-.45-1-1V4.41l-7.4 7.41c-.1.1-.1.26 0 .36l7.4 7.4V16c0-.55.45-1 1-1s1 .45 1 1v4.8c0 1.33-1.62 2-2.56 1.05L3.68 13.6c-.88-.88-.88-2.3 0-3.18z" />
    </IconBase>
  ))
);

ArrowBigLeftBoldDuotone.displayName = 'ArrowBigLeftBoldDuotone';

// Triple export pattern
export { ArrowBigLeftBoldDuotone, ArrowBigLeftBoldDuotone as ArrowBigLeftBoldDuotoneIcon, ArrowBigLeftBoldDuotone as SiArrowBigLeftBoldDuotone };
export default ArrowBigLeftBoldDuotone;
export type { ArrowBigLeftBoldDuotoneProps };
