import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextStrikethroughFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughFillDuotone = memo(
  forwardRef<SVGSVGElement, TextStrikethroughFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.47 13.25q.76 1.22.78 2.75c0 2.9-2.35 5.25-5.25 5.25H7a1.25 1.25 0 1 1 0-2.5h7a2.75 2.75 0 1 0 0-5.5zM17 2.75a1.25 1.25 0 1 1 0 2.5h-6a2.75 2.75 0 0 0 0 5.5H6.53Q5.77 9.53 5.75 8c0-2.9 2.35-5.25 5.25-5.25z" opacity={0.4} />
        <path d="M21 10.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

TextStrikethroughFillDuotone.displayName = 'TextStrikethroughFillDuotone';

// Triple export pattern (lucide-react style)
export { TextStrikethroughFillDuotone, TextStrikethroughFillDuotone as TextStrikethroughFillDuotoneIcon, TextStrikethroughFillDuotone as SiTextStrikethroughFillDuotone };
export default TextStrikethroughFillDuotone;
export type { TextStrikethroughFillDuotoneProps };
