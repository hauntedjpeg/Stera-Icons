import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleBoldProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleBold = memo(
  forwardRef<SVGSVGElement, CollapseSimpleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 14c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-2.59l-4.3 4.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L6.58 16H4c-.55 0-1-.45-1-1s.45-1 1-1zM20.3 2.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L17.42 8H20c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1v2.59z" />
    </IconBase>
  ))
);

CollapseSimpleBold.displayName = 'CollapseSimpleBold';

// Triple export pattern
export { CollapseSimpleBold, CollapseSimpleBold as CollapseSimpleBoldIcon, CollapseSimpleBold as SiCollapseSimpleBold };
export default CollapseSimpleBold;
export type { CollapseSimpleBoldProps };
