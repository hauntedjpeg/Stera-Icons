import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignRightFillDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-right-fill-duotone" {...props}>
      <path d="M21 10.75a1.25 1.25 0 1 1 0 2.5H11a1.25 1.25 0 1 1 0-2.5z" opacity={.4} />
        <path d="M21 16.75a1.25 1.25 0 1 1 0 2.5H7a1.25 1.25 0 1 1 0-2.5zM21 4.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

TextAlignRightFillDuotone.displayName = 'TextAlignRightFillDuotone';

// Triple export pattern (lucide-react style)
export { TextAlignRightFillDuotone, TextAlignRightFillDuotone as TextAlignRightFillDuotoneIcon, TextAlignRightFillDuotone as SiTextAlignRightFillDuotone };
export default TextAlignRightFillDuotone;
export type { TextAlignRightFillDuotoneProps };
