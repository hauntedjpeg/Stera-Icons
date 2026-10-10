import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignRightBoldProps = Omit<IconBaseProps, 'children'>;

const TextAlignRightBold = memo(
  forwardRef<SVGSVGElement, TextAlignRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 17c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zM21 11c.55 0 1 .45 1 1s-.45 1-1 1H11c-.55 0-1-.45-1-1s.45-1 1-1zM21 5c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

TextAlignRightBold.displayName = 'TextAlignRightBold';

// Triple export pattern
export { TextAlignRightBold, TextAlignRightBold as TextAlignRightBoldIcon, TextAlignRightBold as SiTextAlignRightBold };
export default TextAlignRightBold;
export type { TextAlignRightBoldProps };
