import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.3 5.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L8.42 17H16c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v7.59z" />
    </IconBase>
  ))
);

ArrowDownLeftBold.displayName = 'ArrowDownLeftBold';

// Triple export pattern
export { ArrowDownLeftBold, ArrowDownLeftBold as ArrowDownLeftBoldIcon, ArrowDownLeftBold as SiArrowDownLeftBold };
export default ArrowDownLeftBold;
export type { ArrowDownLeftBoldProps };
