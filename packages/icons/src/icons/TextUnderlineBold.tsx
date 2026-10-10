import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextUnderlineBoldProps = Omit<IconBaseProps, 'children'>;

const TextUnderlineBold = memo(
  forwardRef<SVGSVGElement, TextUnderlineBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 19c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1zM17.5 3c.55 0 1 .45 1 1v7c0 3.59-2.91 6.5-6.5 6.5S5.5 14.59 5.5 11V4c0-.55.45-1 1-1s1 .45 1 1v7c0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5V4c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

TextUnderlineBold.displayName = 'TextUnderlineBold';

// Triple export pattern
export { TextUnderlineBold, TextUnderlineBold as TextUnderlineBoldIcon, TextUnderlineBold as SiTextUnderlineBold };
export default TextUnderlineBold;
export type { TextUnderlineBoldProps };
