import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextItalicRegularProps = Omit<IconBaseProps, 'children'>;

const TextItalicRegular = memo(
  forwardRef<SVGSVGElement, TextItalicRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 3.25c.41 0 .75.34.75.75s-.34.75-.75.75h-1.92c-.94 0-1.78.58-2.1 1.46l-4.26 11.35c-.31.82.3 1.69 1.17 1.69H14c.41 0 .75.34.75.75s-.34.75-.75.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.92c.94 0 1.78-.58 2.1-1.46l4.26-11.35c.31-.82-.3-1.69-1.17-1.69H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

TextItalicRegular.displayName = 'TextItalicRegular';

// Triple export pattern
export { TextItalicRegular, TextItalicRegular as TextItalicRegularIcon, TextItalicRegular as SiTextItalicRegular };
export default TextItalicRegular;
export type { TextItalicRegularProps };
