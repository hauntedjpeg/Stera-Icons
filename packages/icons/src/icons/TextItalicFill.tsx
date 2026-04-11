import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextItalicFillProps = Omit<IconBaseProps, 'children'>;

const TextItalicFill = memo(
  forwardRef<SVGSVGElement, TextItalicFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 2.75a1.25 1.25 0 1 1 0 2.5h-1.92c-.73 0-1.38.45-1.64 1.14l-4.26 11.35a.75.75 0 0 0 .7 1.01H14a1.25 1.25 0 1 1 0 2.5H5a1.25 1.25 0 1 1 0-2.5h1.92c.73 0 1.38-.45 1.64-1.14l4.26-11.35a.75.75 0 0 0-.7-1.01H10a1.25 1.25 0 0 1 0-2.5z" />
    </IconBase>
  ))
);

TextItalicFill.displayName = 'TextItalicFill';

// Triple export pattern (lucide-react style)
export { TextItalicFill, TextItalicFill as TextItalicFillIcon, TextItalicFill as SiTextItalicFill };
export default TextItalicFill;
export type { TextItalicFillProps };
