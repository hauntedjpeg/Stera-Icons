import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignCenterRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignCenterRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignCenterRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 11c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path d="M19 17c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zM21 5c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

TextAlignCenterRegularDuotone.displayName = 'TextAlignCenterRegularDuotone';

// Triple export pattern
export { TextAlignCenterRegularDuotone, TextAlignCenterRegularDuotone as TextAlignCenterRegularDuotoneIcon, TextAlignCenterRegularDuotone as SiTextAlignCenterRegularDuotone };
export default TextAlignCenterRegularDuotone;
export type { TextAlignCenterRegularDuotoneProps };
