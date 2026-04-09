import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextUnderlineFillProps = Omit<IconBaseProps, 'children'>;

const TextUnderlineFill = memo(
  forwardRef<SVGSVGElement, TextUnderlineFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-underline-fill" {...props}>
      <path d="M18 18.75a1.25 1.25 0 1 1 0 2.5H6a1.25 1.25 0 1 1 0-2.5zM17.5 2.75c.69 0 1.25.56 1.25 1.25v6.5a6.75 6.75 0 0 1-13.5 0V4a1.25 1.25 0 1 1 2.5 0v6.5a4.25 4.25 0 0 0 8.5 0V4c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

TextUnderlineFill.displayName = 'TextUnderlineFill';

// Triple export pattern (lucide-react style)
export { TextUnderlineFill, TextUnderlineFill as TextUnderlineFillIcon, TextUnderlineFill as SiTextUnderlineFill };
export default TextUnderlineFill;
export type { TextUnderlineFillProps };
