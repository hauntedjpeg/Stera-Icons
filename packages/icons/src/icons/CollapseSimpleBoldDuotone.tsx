import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CollapseSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 16v1.41l-4.3 4.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L6.58 16zM20.3 2.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L17.42 8H16V6.59z" opacity={0.4} />
        <path d="M9 14c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-4H4c-.55 0-1-.45-1-1s.45-1 1-1zM15 3c.55 0 1 .45 1 1v4h4c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

CollapseSimpleBoldDuotone.displayName = 'CollapseSimpleBoldDuotone';

// Triple export pattern
export { CollapseSimpleBoldDuotone, CollapseSimpleBoldDuotone as CollapseSimpleBoldDuotoneIcon, CollapseSimpleBoldDuotone as SiCollapseSimpleBoldDuotone };
export default CollapseSimpleBoldDuotone;
export type { CollapseSimpleBoldDuotoneProps };
