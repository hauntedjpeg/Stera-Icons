import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextStrikethroughRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextStrikethroughRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.46 12.75c.8.85 1.29 2 1.29 3.25 0 2.62-2.13 4.75-4.75 4.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c1.8 0 3.25-1.46 3.25-3.25 0-1.8-1.46-3.25-3.25-3.25zM17 3.25c.41 0 .75.34.75.75s-.34.75-.75.75h-6C9.2 4.75 7.75 6.21 7.75 8c0 1.8 1.46 3.25 3.25 3.25H7.54c-.8-.85-1.29-2-1.29-3.25 0-2.62 2.13-4.75 4.75-4.75z" opacity={0.4} />
        <path d="M21 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

TextStrikethroughRegularDuotone.displayName = 'TextStrikethroughRegularDuotone';

// Triple export pattern
export { TextStrikethroughRegularDuotone, TextStrikethroughRegularDuotone as TextStrikethroughRegularDuotoneIcon, TextStrikethroughRegularDuotone as SiTextStrikethroughRegularDuotone };
export default TextStrikethroughRegularDuotone;
export type { TextStrikethroughRegularDuotoneProps };
