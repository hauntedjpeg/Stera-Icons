import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSparkleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextSparkleFillDuotone = memo(
  forwardRef<SVGSVGElement, TextSparkleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 16.75c.69 0 1.25.56 1.25 1.25S8.69 19.25 8 19.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM8 10.75c.69 0 1.25.56 1.25 1.25S8.69 13.25 8 13.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM21 4.75c.69 0 1.25.56 1.25 1.25S21.69 7.25 21 7.25H3c-.69 0-1.25-.56-1.25-1.25S2.31 4.75 3 4.75z" opacity={0.4} />
        <path d="M16.39 10.26c.2-.58 1.02-.58 1.22 0l.25.69c.52 1.5 1.7 2.67 3.19 3.2l.7.24c.57.2.57 1.02 0 1.22l-.7.25c-1.5.52-2.67 1.7-3.2 3.19l-.24.7c-.2.57-1.02.57-1.22 0l-.25-.7c-.52-1.5-1.7-2.67-3.19-3.2l-.7-.24c-.57-.2-.57-1.02 0-1.22l.7-.25c1.5-.52 2.67-1.7 3.2-3.19z" />
    </IconBase>
  ))
);

TextSparkleFillDuotone.displayName = 'TextSparkleFillDuotone';

// Triple export pattern
export { TextSparkleFillDuotone, TextSparkleFillDuotone as TextSparkleFillDuotoneIcon, TextSparkleFillDuotone as SiTextSparkleFillDuotone };
export default TextSparkleFillDuotone;
export type { TextSparkleFillDuotoneProps };
