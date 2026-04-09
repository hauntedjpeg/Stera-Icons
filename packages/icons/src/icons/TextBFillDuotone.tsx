import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextBFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextBFillDuotone = memo(
  forwardRef<SVGSVGElement, TextBFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-b-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.75a5.25 5.25 0 0 1 4.15 8.46A5.25 5.25 0 0 1 14 21.25H8.84q-.71 0-1.26-.03c-.38-.03-.78-.1-1.18-.3a3 3 0 0 1-1.32-1.32c-.2-.4-.27-.8-.3-1.18q-.04-.54-.03-1.26V6.84q0-.71.03-1.26c.03-.38.1-.78.3-1.18q.45-.87 1.32-1.32c.4-.2.8-.27 1.18-.3q.54-.04 1.26-.03zm-3.16 10.5a15 15 0 0 0-1.3.06.5.5 0 0 0-.23.23q-.01 0-.04.24c-.02.23-.02.55-.02 1.06v2.32a15 15 0 0 0 .06 1.3q.08.15.23.23 0 .01.24.04c.23.02.55.02 1.06.02H14a2.75 2.75 0 1 0 0-5.5zm0-8a15 15 0 0 0-1.3.06.5.5 0 0 0-.23.23q-.01 0-.04.24c-.02.23-.02.55-.02 1.06v2.32a15 15 0 0 0 .06 1.3q.08.15.23.23 0 .01.24.04c.23.02.55.02 1.06.02H12a2.75 2.75 0 1 0 0-5.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

TextBFillDuotone.displayName = 'TextBFillDuotone';

// Triple export pattern (lucide-react style)
export { TextBFillDuotone, TextBFillDuotone as TextBFillDuotoneIcon, TextBFillDuotone as SiTextBFillDuotone };
export default TextBFillDuotone;
export type { TextBFillDuotoneProps };
