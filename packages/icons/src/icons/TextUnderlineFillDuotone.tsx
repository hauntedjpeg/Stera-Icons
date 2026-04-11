import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextUnderlineFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextUnderlineFillDuotone = memo(
  forwardRef<SVGSVGElement, TextUnderlineFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 18.75a1.25 1.25 0 1 1 0 2.5H6a1.25 1.25 0 1 1 0-2.5z" opacity={.4} />
        <path d="M17.5 2.75c.69 0 1.25.56 1.25 1.25v6.5a6.75 6.75 0 0 1-13.5 0V4a1.25 1.25 0 1 1 2.5 0v6.5a4.25 4.25 0 0 0 8.5 0V4c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

TextUnderlineFillDuotone.displayName = 'TextUnderlineFillDuotone';

// Triple export pattern (lucide-react style)
export { TextUnderlineFillDuotone, TextUnderlineFillDuotone as TextUnderlineFillDuotoneIcon, TextUnderlineFillDuotone as SiTextUnderlineFillDuotone };
export default TextUnderlineFillDuotone;
export type { TextUnderlineFillDuotoneProps };
