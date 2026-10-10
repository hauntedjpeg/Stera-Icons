import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextUnderlineFillProps = Omit<IconBaseProps, 'children'>;

const TextUnderlineFill = memo(
  forwardRef<SVGSVGElement, TextUnderlineFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 18.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM17.5 2.75c.69 0 1.25.56 1.25 1.25v6.5c0 3.73-3.02 6.75-6.75 6.75s-6.75-3.02-6.75-6.75V4c0-.69.56-1.25 1.25-1.25S7.75 3.31 7.75 4v6.5c0 2.35 1.9 4.25 4.25 4.25s4.25-1.9 4.25-4.25V4c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

TextUnderlineFill.displayName = 'TextUnderlineFill';

// Triple export pattern
export { TextUnderlineFill, TextUnderlineFill as TextUnderlineFillIcon, TextUnderlineFill as SiTextUnderlineFill };
export default TextUnderlineFill;
export type { TextUnderlineFillProps };
