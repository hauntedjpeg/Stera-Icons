import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CodeFillDuotone = memo(
  forwardRef<SVGSVGElement, CodeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.8 4.66c.19-.67.88-1.05 1.54-.86.67.19 1.05.88.86 1.54l-4 14c-.19.67-.88 1.05-1.54.86-.67-.19-1.05-.88-.86-1.54z" opacity={.4} />
        <path d="M6.12 7.12c.48-.5 1.28-.5 1.76 0 .5.48.5 1.28 0 1.76L4.77 12l3.11 3.12c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0l-4-4c-.5-.48-.5-1.28 0-1.76zM16.12 7.12c.48-.5 1.28-.5 1.76 0l4 4q.37.37.37.88c0 .33-.13.65-.37.88l-4 4c-.48.5-1.28.5-1.76 0-.5-.48-.5-1.28 0-1.76L19.23 12l-3.11-3.12c-.5-.48-.5-1.28 0-1.76" />
    </IconBase>
  ))
);

CodeFillDuotone.displayName = 'CodeFillDuotone';

// Triple export pattern
export { CodeFillDuotone, CodeFillDuotone as CodeFillDuotoneIcon, CodeFillDuotone as SiCodeFillDuotone };
export default CodeFillDuotone;
export type { CodeFillDuotoneProps };
