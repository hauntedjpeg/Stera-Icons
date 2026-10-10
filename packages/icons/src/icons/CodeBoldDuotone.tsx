import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CodeBoldDuotone = memo(
  forwardRef<SVGSVGElement, CodeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.04 4.73c.15-.53.7-.84 1.23-.7.54.16.84.71.7 1.24l-4 14c-.16.54-.71.84-1.24.7-.53-.16-.84-.71-.7-1.24z" opacity={.4} />
        <path d="M6.3 7.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L4.42 12l3.3 3.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-4-4c-.39-.38-.39-1.02 0-1.4zM16.3 7.3c.38-.4 1.02-.4 1.4 0l4 4q.3.28.3.7t-.3.7l-4 4c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l3.29-3.3-3.3-3.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

CodeBoldDuotone.displayName = 'CodeBoldDuotone';

// Triple export pattern
export { CodeBoldDuotone, CodeBoldDuotone as CodeBoldDuotoneIcon, CodeBoldDuotone as SiCodeBoldDuotone };
export default CodeBoldDuotone;
export type { CodeBoldDuotoneProps };
