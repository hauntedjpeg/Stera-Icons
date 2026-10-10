import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignLeftFillProps = Omit<IconBaseProps, 'children'>;

const TextAlignLeftFill = memo(
  forwardRef<SVGSVGElement, TextAlignLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 16.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM13 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM21 4.75c.69 0 1.25.56 1.25 1.25S21.69 7.25 21 7.25H3c-.69 0-1.25-.56-1.25-1.25S2.31 4.75 3 4.75z" />
    </IconBase>
  ))
);

TextAlignLeftFill.displayName = 'TextAlignLeftFill';

// Triple export pattern
export { TextAlignLeftFill, TextAlignLeftFill as TextAlignLeftFillIcon, TextAlignLeftFill as SiTextAlignLeftFill };
export default TextAlignLeftFill;
export type { TextAlignLeftFillProps };
