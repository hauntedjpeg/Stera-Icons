import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignCenterFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignCenterFillDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignCenterFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 10.75a1.25 1.25 0 1 1 0 2.5H7a1.25 1.25 0 1 1 0-2.5z" opacity={.4} />
        <path d="M19 16.75a1.25 1.25 0 1 1 0 2.5H5a1.25 1.25 0 1 1 0-2.5zM21 4.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

TextAlignCenterFillDuotone.displayName = 'TextAlignCenterFillDuotone';

// Triple export pattern (lucide-react style)
export { TextAlignCenterFillDuotone, TextAlignCenterFillDuotone as TextAlignCenterFillDuotoneIcon, TextAlignCenterFillDuotone as SiTextAlignCenterFillDuotone };
export default TextAlignCenterFillDuotone;
export type { TextAlignCenterFillDuotoneProps };
