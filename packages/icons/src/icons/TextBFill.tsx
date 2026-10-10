import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextBFillProps = Omit<IconBaseProps, 'children'>;

const TextBFill = memo(
  forwardRef<SVGSVGElement, TextBFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.75c2.9 0 5.25 2.35 5.25 5.25 0 1.21-.41 2.32-1.1 3.21 1.83.82 3.1 2.66 3.1 4.79 0 2.9-2.35 5.25-5.25 5.25H8.84q-.71 0-1.26-.03c-.38-.03-.78-.1-1.18-.3q-.87-.45-1.32-1.32c-.2-.4-.27-.8-.3-1.18q-.04-.54-.03-1.26V6.84q0-.71.03-1.26c.03-.38.1-.78.3-1.18q.45-.87 1.32-1.32c.4-.2.8-.27 1.18-.3q.54-.04 1.26-.03zm-3.16 10.5c-.51 0-.83 0-1.06.02q-.24.02-.24.04-.15.08-.23.23-.01 0-.04.24c-.02.23-.02.55-.02 1.06v2.32c0 .51 0 .83.02 1.06q.02.24.04.24.08.15.23.23 0 .01.24.04c.23.02.55.02 1.06.02H14c1.52 0 2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75zm0-8c-.51 0-.83 0-1.06.02q-.24.02-.24.04-.15.08-.23.23-.01 0-.04.24c-.02.23-.02.55-.02 1.06v2.32c0 .51 0 .83.02 1.06q.02.24.04.24.08.15.23.23 0 .01.24.04c.23.02.55.02 1.06.02H12c1.52 0 2.75-1.23 2.75-2.75S13.52 5.25 12 5.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

TextBFill.displayName = 'TextBFill';

// Triple export pattern
export { TextBFill, TextBFill as TextBFillIcon, TextBFill as SiTextBFill };
export default TextBFill;
export type { TextBFillProps };
