import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextItalicBoldProps = Omit<IconBaseProps, 'children'>;

const TextItalicBold = memo(
  forwardRef<SVGSVGElement, TextItalicBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 3c.55 0 1 .45 1 1s-.45 1-1 1h-1.92c-.83 0-1.57.51-1.87 1.28l-4.27 11.38c-.23.65.25 1.34.95 1.34H14c.55 0 1 .45 1 1 0 .45-.3.83-.7.96l-.1.02-.2.02H5c-.55 0-1-.45-1-1s.45-1 1-1h1.92c.83 0 1.57-.51 1.87-1.29l4.26-11.36c.24-.65-.24-1.35-.94-1.35H10c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

TextItalicBold.displayName = 'TextItalicBold';

// Triple export pattern
export { TextItalicBold, TextItalicBold as TextItalicBoldIcon, TextItalicBold as SiTextItalicBold };
export default TextItalicBold;
export type { TextItalicBoldProps };
