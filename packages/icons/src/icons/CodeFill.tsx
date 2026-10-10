import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeFillProps = Omit<IconBaseProps, 'children'>;

const CodeFill = memo(
  forwardRef<SVGSVGElement, CodeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.8 4.66c.19-.67.88-1.05 1.54-.86.67.19 1.05.88.86 1.54l-4 14c-.19.67-.88 1.05-1.54.86-.67-.19-1.05-.88-.86-1.54zM6.12 7.12c.48-.5 1.28-.5 1.76 0 .5.48.5 1.28 0 1.76L4.77 12l3.11 3.12c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0l-4-4c-.5-.48-.5-1.28 0-1.76zM16.12 7.12c.48-.5 1.28-.5 1.76 0l4 4q.36.37.37.88 0 .52-.37.88l-4 4c-.48.5-1.28.5-1.76 0-.5-.48-.5-1.28 0-1.76L19.23 12l-3.11-3.12c-.5-.48-.5-1.28 0-1.76" />
    </IconBase>
  ))
);

CodeFill.displayName = 'CodeFill';

// Triple export pattern
export { CodeFill, CodeFill as CodeFillIcon, CodeFill as SiCodeFill };
export default CodeFill;
export type { CodeFillProps };
