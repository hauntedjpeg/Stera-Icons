import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignJustifyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignJustifyFillDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignJustifyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 10.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5z" opacity={.4} />
        <path d="M21 16.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5zM21 4.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

TextAlignJustifyFillDuotone.displayName = 'TextAlignJustifyFillDuotone';

// Triple export pattern (lucide-react style)
export { TextAlignJustifyFillDuotone, TextAlignJustifyFillDuotone as TextAlignJustifyFillDuotoneIcon, TextAlignJustifyFillDuotone as SiTextAlignJustifyFillDuotone };
export default TextAlignJustifyFillDuotone;
export type { TextAlignJustifyFillDuotoneProps };
