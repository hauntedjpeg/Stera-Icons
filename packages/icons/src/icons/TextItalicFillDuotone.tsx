import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextItalicFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextItalicFillDuotone = memo(
  forwardRef<SVGSVGElement, TextItalicFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.08 5.25c-.73 0-1.38.45-1.64 1.14l-.28.74v.01L11.2 17.66l-.03.08c-.18.49.18 1.01.7 1.01H6.93c.73 0 1.38-.45 1.64-1.14l4.23-11.27.03-.08c.18-.49-.18-1.01-.7-1.01z" opacity={.4} />
        <path d="M14 18.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM19 2.75c.69 0 1.25.56 1.25 1.25S19.69 5.25 19 5.25h-9c-.69 0-1.25-.56-1.25-1.25S9.31 2.75 10 2.75z" />
    </IconBase>
  ))
);

TextItalicFillDuotone.displayName = 'TextItalicFillDuotone';

// Triple export pattern
export { TextItalicFillDuotone, TextItalicFillDuotone as TextItalicFillDuotoneIcon, TextItalicFillDuotone as SiTextItalicFillDuotone };
export default TextItalicFillDuotone;
export type { TextItalicFillDuotoneProps };
