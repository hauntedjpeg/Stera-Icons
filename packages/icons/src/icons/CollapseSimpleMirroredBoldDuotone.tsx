import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleMirroredBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleMirroredBoldDuotone = memo(
  forwardRef<SVGSVGElement, CollapseSimpleMirroredBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 16v1.41l4.3 4.3c.38.39 1.02.39 1.4 0 .4-.4.4-1.03 0-1.42L17.42 16zM3.7 2.3c-.38-.4-1.02-.4-1.4 0-.4.38-.4 1.02 0 1.4L6.58 8H8V6.59z" opacity={0.4} />
        <path d="M15 14c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1v-4h4c.55 0 1-.45 1-1s-.45-1-1-1zM9 3c-.55 0-1 .45-1 1v4H4c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1" />
    </IconBase>
  ))
);

CollapseSimpleMirroredBoldDuotone.displayName = 'CollapseSimpleMirroredBoldDuotone';

// Triple export pattern
export { CollapseSimpleMirroredBoldDuotone, CollapseSimpleMirroredBoldDuotone as CollapseSimpleMirroredBoldDuotoneIcon, CollapseSimpleMirroredBoldDuotone as SiCollapseSimpleMirroredBoldDuotone };
export default CollapseSimpleMirroredBoldDuotone;
export type { CollapseSimpleMirroredBoldDuotoneProps };
