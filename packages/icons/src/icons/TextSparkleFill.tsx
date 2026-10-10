import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSparkleFillProps = Omit<IconBaseProps, 'children'>;

const TextSparkleFill = memo(
  forwardRef<SVGSVGElement, TextSparkleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.39 10.26c.2-.58 1.02-.58 1.22 0l.25.69c.52 1.5 1.7 2.67 3.2 3.2l.68.24c.58.2.58 1.02 0 1.22l-.69.25c-1.5.52-2.67 1.7-3.2 3.2l-.24.68c-.2.58-1.02.58-1.22 0l-.25-.69c-.52-1.5-1.7-2.67-3.2-3.2l-.68-.24c-.58-.2-.58-1.02 0-1.22l.69-.25c1.5-.52 2.67-1.7 3.2-3.2zM8 16.75c.69 0 1.25.56 1.25 1.25S8.69 19.25 8 19.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM8 10.75c.69 0 1.25.56 1.25 1.25S8.69 13.25 8 13.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM21 4.75c.69 0 1.25.56 1.25 1.25S21.69 7.25 21 7.25H3c-.69 0-1.25-.56-1.25-1.25S2.31 4.75 3 4.75z" />
    </IconBase>
  ))
);

TextSparkleFill.displayName = 'TextSparkleFill';

// Triple export pattern
export { TextSparkleFill, TextSparkleFill as TextSparkleFillIcon, TextSparkleFill as SiTextSparkleFill };
export default TextSparkleFill;
export type { TextSparkleFillProps };
