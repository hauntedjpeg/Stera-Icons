import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextStrikethroughFillProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughFill = memo(
  forwardRef<SVGSVGElement, TextStrikethroughFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-strikethrough-fill" {...props}>
      <path d="M17 2.75a1.25 1.25 0 1 1 0 2.5h-6a2.75 2.75 0 0 0 0 5.5h10a1.25 1.25 0 1 1 0 2.5h-2.53q.76 1.22.78 2.75c0 2.9-2.35 5.25-5.25 5.25H7a1.25 1.25 0 1 1 0-2.5h7a2.75 2.75 0 1 0 0-5.5H3a1.25 1.25 0 1 1 0-2.5h3.53Q5.77 9.53 5.75 8c0-2.9 2.35-5.25 5.25-5.25z" />
    </IconBase>
  ))
);

TextStrikethroughFill.displayName = 'TextStrikethroughFill';

// Triple export pattern (lucide-react style)
export { TextStrikethroughFill, TextStrikethroughFill as TextStrikethroughFillIcon, TextStrikethroughFill as SiTextStrikethroughFill };
export default TextStrikethroughFill;
export type { TextStrikethroughFillProps };
