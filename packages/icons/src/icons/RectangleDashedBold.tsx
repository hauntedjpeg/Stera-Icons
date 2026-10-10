import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RectangleDashedBoldProps = Omit<IconBaseProps, 'children'>;

const RectangleDashedBold = memo(
  forwardRef<SVGSVGElement, RectangleDashedBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15c.55 0 1 .45 1 1 0 .5 0 .65.02.76.12.9.82 1.6 1.72 1.72.11.02.26.02.76.02.55 0 1 .45 1 1s-.45 1-1 1q-.63 0-1.02-.03c-1.8-.24-3.2-1.65-3.45-3.45Q2 16.63 2 16c0-.55.45-1 1-1M14.5 18.5c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1zM21 15c.55 0 1 .45 1 1q0 .63-.03 1.02c-.24 1.8-1.65 3.2-3.45 3.45q-.39.04-1.02.03c-.55 0-1-.45-1-1s.45-1 1-1c.5 0 .65 0 .76-.02.9-.12 1.6-.82 1.72-1.72.02-.11.02-.26.02-.76 0-.55.45-1 1-1M3 10c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1M21 10c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1M6.5 3.5c.55 0 1 .45 1 1s-.45 1-1 1c-.5 0-.65 0-.76.02-.9.12-1.6.82-1.72 1.72C4 7.35 4 7.5 4 8c0 .55-.45 1-1 1s-1-.45-1-1q0-.63.03-1.02c.24-1.8 1.65-3.2 3.45-3.45q.39-.04 1.02-.03M17.5 3.5q.63 0 1.02.03c1.8.24 3.2 1.65 3.45 3.45Q22 7.37 22 8c0 .55-.45 1-1 1s-1-.45-1-1c0-.5 0-.65-.02-.76-.12-.9-.82-1.6-1.72-1.72-.11-.02-.26-.02-.76-.02-.55 0-1-.45-1-1s.45-1 1-1M14.5 3.5c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

RectangleDashedBold.displayName = 'RectangleDashedBold';

// Triple export pattern
export { RectangleDashedBold, RectangleDashedBold as RectangleDashedBoldIcon, RectangleDashedBold as SiRectangleDashedBold };
export default RectangleDashedBold;
export type { RectangleDashedBoldProps };
