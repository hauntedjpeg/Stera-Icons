import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignLeftFillProps = Omit<IconBaseProps, 'children'>;

const TextAlignLeftFill = memo(
  forwardRef<SVGSVGElement, TextAlignLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-left-fill" {...props}>
      <path d="M17 16.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5zM13 10.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5zM21 4.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

TextAlignLeftFill.displayName = 'TextAlignLeftFill';

// Triple export pattern (lucide-react style)
export { TextAlignLeftFill, TextAlignLeftFill as TextAlignLeftFillIcon, TextAlignLeftFill as SiTextAlignLeftFill };
export default TextAlignLeftFill;
export type { TextAlignLeftFillProps };
