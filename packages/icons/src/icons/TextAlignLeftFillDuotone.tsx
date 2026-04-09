import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-left-fill-duotone" {...props}>
      <path d="M13 10.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5z" opacity={.4} />
        <path d="M17 16.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5zM21 4.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

TextAlignLeftFillDuotone.displayName = 'TextAlignLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { TextAlignLeftFillDuotone, TextAlignLeftFillDuotone as TextAlignLeftFillDuotoneIcon, TextAlignLeftFillDuotone as SiTextAlignLeftFillDuotone };
export default TextAlignLeftFillDuotone;
export type { TextAlignLeftFillDuotoneProps };
