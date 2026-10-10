import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 5c.55 0 1 .45 1 1s-.45 1-1 1H8.41l10.3 10.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0L7 8.42V16c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1z" />
    </IconBase>
  ))
);

ArrowUpLeftBold.displayName = 'ArrowUpLeftBold';

// Triple export pattern
export { ArrowUpLeftBold, ArrowUpLeftBold as ArrowUpLeftBoldIcon, ArrowUpLeftBold as SiArrowUpLeftBold };
export default ArrowUpLeftBold;
export type { ArrowUpLeftBoldProps };
