import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 11c.55 0 1 .45 1 1s-.45 1-1 1H11c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path d="M21 17c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zM21 5c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

TextAlignRightBoldDuotone.displayName = 'TextAlignRightBoldDuotone';

// Triple export pattern
export { TextAlignRightBoldDuotone, TextAlignRightBoldDuotone as TextAlignRightBoldDuotoneIcon, TextAlignRightBoldDuotone as SiTextAlignRightBoldDuotone };
export default TextAlignRightBoldDuotone;
export type { TextAlignRightBoldDuotoneProps };
