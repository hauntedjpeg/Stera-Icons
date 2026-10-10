import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleBoldProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleBold = memo(
  forwardRef<SVGSVGElement, ExpandSimpleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.3 14.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L5.42 20H9c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v3.59zM21 2c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5.41l-4.3 4.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L18.58 4H15c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ExpandSimpleBold.displayName = 'ExpandSimpleBold';

// Triple export pattern
export { ExpandSimpleBold, ExpandSimpleBold as ExpandSimpleBoldIcon, ExpandSimpleBold as SiExpandSimpleBold };
export default ExpandSimpleBold;
export type { ExpandSimpleBoldProps };
