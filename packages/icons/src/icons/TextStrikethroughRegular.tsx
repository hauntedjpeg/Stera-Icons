import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextStrikethroughRegularProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughRegular = memo(
  forwardRef<SVGSVGElement, TextStrikethroughRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 3.25c.41 0 .75.34.75.75s-.34.75-.75.75h-6C9.2 4.75 7.75 6.21 7.75 8c0 1.8 1.46 3.25 3.25 3.25h10c.41 0 .75.34.75.75s-.34.75-.75.75h-3.54c.8.85 1.29 2 1.29 3.25 0 2.62-2.13 4.75-4.75 4.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c1.8 0 3.25-1.46 3.25-3.25 0-1.8-1.46-3.25-3.25-3.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.54c-.8-.85-1.29-2-1.29-3.25 0-2.62 2.13-4.75 4.75-4.75z" />
    </IconBase>
  ))
);

TextStrikethroughRegular.displayName = 'TextStrikethroughRegular';

// Triple export pattern
export { TextStrikethroughRegular, TextStrikethroughRegular as TextStrikethroughRegularIcon, TextStrikethroughRegular as SiTextStrikethroughRegular };
export default TextStrikethroughRegular;
export type { TextStrikethroughRegularProps };
