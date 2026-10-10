import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" opacity={.4} />
        <path d="M17 16.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM21 4.75c.69 0 1.25.56 1.25 1.25S21.69 7.25 21 7.25H3c-.69 0-1.25-.56-1.25-1.25S2.31 4.75 3 4.75z" />
    </IconBase>
  ))
);

TextAlignLeftFillDuotone.displayName = 'TextAlignLeftFillDuotone';

// Triple export pattern
export { TextAlignLeftFillDuotone, TextAlignLeftFillDuotone as TextAlignLeftFillDuotoneIcon, TextAlignLeftFillDuotone as SiTextAlignLeftFillDuotone };
export default TextAlignLeftFillDuotone;
export type { TextAlignLeftFillDuotoneProps };
