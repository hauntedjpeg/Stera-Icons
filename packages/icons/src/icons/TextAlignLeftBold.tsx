import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignLeftBoldProps = Omit<IconBaseProps, 'children'>;

const TextAlignLeftBold = memo(
  forwardRef<SVGSVGElement, TextAlignLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 17c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM13 11c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM21 5c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

TextAlignLeftBold.displayName = 'TextAlignLeftBold';

// Triple export pattern
export { TextAlignLeftBold, TextAlignLeftBold as TextAlignLeftBoldIcon, TextAlignLeftBold as SiTextAlignLeftBold };
export default TextAlignLeftBold;
export type { TextAlignLeftBoldProps };
