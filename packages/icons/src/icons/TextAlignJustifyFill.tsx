import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignJustifyFillProps = Omit<IconBaseProps, 'children'>;

const TextAlignJustifyFill = memo(
  forwardRef<SVGSVGElement, TextAlignJustifyFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-justify-fill" {...props}>
      <path d="M21 16.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5zM21 10.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5zM21 4.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

TextAlignJustifyFill.displayName = 'TextAlignJustifyFill';

// Triple export pattern (lucide-react style)
export { TextAlignJustifyFill, TextAlignJustifyFill as TextAlignJustifyFillIcon, TextAlignJustifyFill as SiTextAlignJustifyFill };
export default TextAlignJustifyFill;
export type { TextAlignJustifyFillProps };
