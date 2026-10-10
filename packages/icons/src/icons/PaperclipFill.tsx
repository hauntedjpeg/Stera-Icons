import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PaperclipFillProps = Omit<IconBaseProps, 'children'>;

const PaperclipFill = memo(
  forwardRef<SVGSVGElement, PaperclipFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10 1.75c2.9 0 5.25 2.35 5.25 5.25v7c0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25V8c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v6c0 .41.34.75.75.75s.75-.34.75-.75V7c0-1.52-1.23-2.75-2.75-2.75S7.25 5.48 7.25 7v8c0 2.62 2.13 4.75 4.75 4.75s4.75-2.13 4.75-4.75V8c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v7c0 4-3.25 7.25-7.25 7.25S4.75 19 4.75 15V7c0-2.9 2.35-5.25 5.25-5.25" />
    </IconBase>
  ))
);

PaperclipFill.displayName = 'PaperclipFill';

// Triple export pattern
export { PaperclipFill, PaperclipFill as PaperclipFillIcon, PaperclipFill as SiPaperclipFill };
export default PaperclipFill;
export type { PaperclipFillProps };
