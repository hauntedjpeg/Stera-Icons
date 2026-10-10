import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextItalicFillProps = Omit<IconBaseProps, 'children'>;

const TextItalicFill = memo(
  forwardRef<SVGSVGElement, TextItalicFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 2.75c.69 0 1.25.56 1.25 1.25S19.69 5.25 19 5.25h-1.92c-.73 0-1.38.45-1.64 1.14l-4.26 11.35c-.18.49.18 1.01.7 1.01H14c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h1.92c.73 0 1.38-.45 1.64-1.14l4.26-11.35c.18-.49-.18-1.01-.7-1.01H10c-.69 0-1.25-.56-1.25-1.25S9.31 2.75 10 2.75z" />
    </IconBase>
  ))
);

TextItalicFill.displayName = 'TextItalicFill';

// Triple export pattern
export { TextItalicFill, TextItalicFill as TextItalicFillIcon, TextItalicFill as SiTextItalicFill };
export default TextItalicFill;
export type { TextItalicFillProps };
