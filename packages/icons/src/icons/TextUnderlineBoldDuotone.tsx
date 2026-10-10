import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextUnderlineBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextUnderlineBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextUnderlineBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 19c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path d="M17.5 3c.55 0 1 .45 1 1v7c0 3.59-2.91 6.5-6.5 6.5S5.5 14.59 5.5 11V4c0-.55.45-1 1-1s1 .45 1 1v7c0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5V4c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

TextUnderlineBoldDuotone.displayName = 'TextUnderlineBoldDuotone';

// Triple export pattern
export { TextUnderlineBoldDuotone, TextUnderlineBoldDuotone as TextUnderlineBoldDuotoneIcon, TextUnderlineBoldDuotone as SiTextUnderlineBoldDuotone };
export default TextUnderlineBoldDuotone;
export type { TextUnderlineBoldDuotoneProps };
