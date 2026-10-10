import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignJustifyBoldProps = Omit<IconBaseProps, 'children'>;

const TextAlignJustifyBold = memo(
  forwardRef<SVGSVGElement, TextAlignJustifyBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 17c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM21 11c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM21 5c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

TextAlignJustifyBold.displayName = 'TextAlignJustifyBold';

// Triple export pattern
export { TextAlignJustifyBold, TextAlignJustifyBold as TextAlignJustifyBoldIcon, TextAlignJustifyBold as SiTextAlignJustifyBold };
export default TextAlignJustifyBold;
export type { TextAlignJustifyBoldProps };
