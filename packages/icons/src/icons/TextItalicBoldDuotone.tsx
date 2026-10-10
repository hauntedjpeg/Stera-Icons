import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextItalicBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextItalicBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextItalicBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.08 5c-.83 0-1.58.52-1.87 1.3l-.29.75-3.91 10.45-.06.15c-.25.65.24 1.35.94 1.35H6.92c.83 0 1.58-.52 1.87-1.3l4.26-11.35c.24-.65-.24-1.35-.94-1.35z" opacity={.4} />
        <path d="M14 19c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zM19 3c.55 0 1 .45 1 1s-.45 1-1 1h-9c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

TextItalicBoldDuotone.displayName = 'TextItalicBoldDuotone';

// Triple export pattern
export { TextItalicBoldDuotone, TextItalicBoldDuotone as TextItalicBoldDuotoneIcon, TextItalicBoldDuotone as SiTextItalicBoldDuotone };
export default TextItalicBoldDuotone;
export type { TextItalicBoldDuotoneProps };
