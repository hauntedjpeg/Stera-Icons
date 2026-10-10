import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.3 5.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L8.42 17H7v-1.41z" opacity={.4} />
        <path d="M6 7c.55 0 1 .45 1 1v9h9c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

ArrowDownLeftBoldDuotone.displayName = 'ArrowDownLeftBoldDuotone';

// Triple export pattern
export { ArrowDownLeftBoldDuotone, ArrowDownLeftBoldDuotone as ArrowDownLeftBoldDuotoneIcon, ArrowDownLeftBoldDuotone as SiArrowDownLeftBoldDuotone };
export default ArrowDownLeftBoldDuotone;
export type { ArrowDownLeftBoldDuotoneProps };
