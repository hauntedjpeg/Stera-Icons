import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextStrikethroughFillProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughFill = memo(
  forwardRef<SVGSVGElement, TextStrikethroughFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 2.75c.69 0 1.25.56 1.25 1.25S17.69 5.25 17 5.25h-6C9.48 5.25 8.25 6.48 8.25 8s1.23 2.75 2.75 2.75h10c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-2.53q.76 1.22.78 2.75c0 2.9-2.35 5.25-5.25 5.25H7c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h7c1.52 0 2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h3.53Q5.77 9.53 5.75 8c0-2.9 2.35-5.25 5.25-5.25z" />
    </IconBase>
  ))
);

TextStrikethroughFill.displayName = 'TextStrikethroughFill';

// Triple export pattern
export { TextStrikethroughFill, TextStrikethroughFill as TextStrikethroughFillIcon, TextStrikethroughFill as SiTextStrikethroughFill };
export default TextStrikethroughFill;
export type { TextStrikethroughFillProps };
