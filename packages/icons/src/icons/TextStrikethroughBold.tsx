import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextStrikethroughBoldProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughBold = memo(
  forwardRef<SVGSVGElement, TextStrikethroughBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 3c.55 0 1 .45 1 1s-.45 1-1 1h-6C9.34 5 8 6.34 8 8s1.34 3 3 3h10c.55 0 1 .45 1 1s-.45 1-1 1h-3c.63.84 1 1.87 1 3 0 2.76-2.24 5-5 5H7c-.55 0-1-.45-1-1s.45-1 1-1h7c1.66 0 3-1.34 3-3s-1.34-3-3-3H3c-.55 0-1-.45-1-1s.45-1 1-1h4c-.63-.84-1-1.87-1-3 0-2.76 2.24-5 5-5z" />
    </IconBase>
  ))
);

TextStrikethroughBold.displayName = 'TextStrikethroughBold';

// Triple export pattern
export { TextStrikethroughBold, TextStrikethroughBold as TextStrikethroughBoldIcon, TextStrikethroughBold as SiTextStrikethroughBold };
export default TextStrikethroughBold;
export type { TextStrikethroughBoldProps };
