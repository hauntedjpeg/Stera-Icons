import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinimizeBoldProps = Omit<IconBaseProps, 'children'>;

const MinimizeBold = memo(
  forwardRef<SVGSVGElement, MinimizeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 14c1.38 0 2.5 1.12 2.5 2.5V20c0 .55-.45 1-1 1s-1-.45-1-1v-3.5c0-.28-.22-.5-.5-.5H4c-.55 0-1-.45-1-1s.45-1 1-1zM20 14c.55 0 1 .45 1 1s-.45 1-1 1h-3.5c-.28 0-.5.22-.5.5V20c0 .55-.45 1-1 1s-1-.45-1-1v-3.5c0-1.38 1.12-2.5 2.5-2.5zM9 3c.55 0 1 .45 1 1v3.5C10 8.88 8.88 10 7.5 10H4c-.55 0-1-.45-1-1s.45-1 1-1h3.5c.28 0 .5-.22.5-.5V4c0-.55.45-1 1-1M15 3c.55 0 1 .45 1 1v3.5c0 .28.22.5.5.5H20c.55 0 1 .45 1 1s-.45 1-1 1h-3.5C15.12 10 14 8.88 14 7.5V4c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

MinimizeBold.displayName = 'MinimizeBold';

// Triple export pattern
export { MinimizeBold, MinimizeBold as MinimizeBoldIcon, MinimizeBold as SiMinimizeBold };
export default MinimizeBold;
export type { MinimizeBoldProps };
