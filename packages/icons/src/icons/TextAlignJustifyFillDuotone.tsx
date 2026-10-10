import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignJustifyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignJustifyFillDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignJustifyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" opacity={.4} />
        <path d="M21 16.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM21 4.75c.69 0 1.25.56 1.25 1.25S21.69 7.25 21 7.25H3c-.69 0-1.25-.56-1.25-1.25S2.31 4.75 3 4.75z" />
    </IconBase>
  ))
);

TextAlignJustifyFillDuotone.displayName = 'TextAlignJustifyFillDuotone';

// Triple export pattern
export { TextAlignJustifyFillDuotone, TextAlignJustifyFillDuotone as TextAlignJustifyFillDuotoneIcon, TextAlignJustifyFillDuotone as SiTextAlignJustifyFillDuotone };
export default TextAlignJustifyFillDuotone;
export type { TextAlignJustifyFillDuotoneProps };
