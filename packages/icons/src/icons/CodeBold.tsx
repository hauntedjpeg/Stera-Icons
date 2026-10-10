import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeBoldProps = Omit<IconBaseProps, 'children'>;

const CodeBold = memo(
  forwardRef<SVGSVGElement, CodeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.04 4.73c.15-.53.7-.84 1.23-.7.54.16.84.71.7 1.24l-4 14c-.16.54-.71.84-1.24.7-.54-.16-.84-.71-.7-1.24zM6.3 7.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L4.42 12l3.3 3.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-4-4c-.39-.38-.39-1.02 0-1.4zM16.3 7.3c.38-.4 1.02-.4 1.4 0l4 4c.2.18.3.44.3.7q0 .42-.3.7l-4 4c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l3.29-3.3-3.3-3.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

CodeBold.displayName = 'CodeBold';

// Triple export pattern
export { CodeBold, CodeBold as CodeBoldIcon, CodeBold as SiCodeBold };
export default CodeBold;
export type { CodeBoldProps };
