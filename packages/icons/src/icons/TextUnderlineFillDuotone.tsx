import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextUnderlineFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextUnderlineFillDuotone = memo(
  forwardRef<SVGSVGElement, TextUnderlineFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 18.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" opacity={.4} />
        <path d="M17.5 2.75c.69 0 1.25.56 1.25 1.25v6.5c0 3.73-3.02 6.75-6.75 6.75s-6.75-3.02-6.75-6.75V4c0-.69.56-1.25 1.25-1.25S7.75 3.31 7.75 4v6.5c0 2.35 1.9 4.25 4.25 4.25s4.25-1.9 4.25-4.25V4c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

TextUnderlineFillDuotone.displayName = 'TextUnderlineFillDuotone';

// Triple export pattern
export { TextUnderlineFillDuotone, TextUnderlineFillDuotone as TextUnderlineFillDuotoneIcon, TextUnderlineFillDuotone as SiTextUnderlineFillDuotone };
export default TextUnderlineFillDuotone;
export type { TextUnderlineFillDuotoneProps };
