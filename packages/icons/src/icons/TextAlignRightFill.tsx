import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignRightFillProps = Omit<IconBaseProps, 'children'>;

const TextAlignRightFill = memo(
  forwardRef<SVGSVGElement, TextAlignRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 16.75a1.25 1.25 0 1 1 0 2.5H7a1.25 1.25 0 1 1 0-2.5zM21 10.75a1.25 1.25 0 1 1 0 2.5H11a1.25 1.25 0 1 1 0-2.5zM21 4.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

TextAlignRightFill.displayName = 'TextAlignRightFill';

// Triple export pattern (lucide-react style)
export { TextAlignRightFill, TextAlignRightFill as TextAlignRightFillIcon, TextAlignRightFill as SiTextAlignRightFill };
export default TextAlignRightFill;
export type { TextAlignRightFillProps };
