import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextStrikethroughBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextStrikethroughBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 13c.63.84 1 1.87 1 3 0 2.76-2.24 5-5 5H7c-.55 0-1-.45-1-1s.45-1 1-1h7c1.66 0 3-1.34 3-3s-1.34-3-3-3zM17 3c.55 0 1 .45 1 1s-.45 1-1 1h-6C9.34 5 8 6.34 8 8s1.34 3 3 3H7c-.63-.84-1-1.87-1-3 0-2.76 2.24-5 5-5z" opacity={0.4} />
        <path d="M21 11c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

TextStrikethroughBoldDuotone.displayName = 'TextStrikethroughBoldDuotone';

// Triple export pattern
export { TextStrikethroughBoldDuotone, TextStrikethroughBoldDuotone as TextStrikethroughBoldDuotoneIcon, TextStrikethroughBoldDuotone as SiTextStrikethroughBoldDuotone };
export default TextStrikethroughBoldDuotone;
export type { TextStrikethroughBoldDuotoneProps };
