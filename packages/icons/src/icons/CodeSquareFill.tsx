import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeSquareFillProps = Omit<IconBaseProps, 'children'>;

const CodeSquareFill = memo(
  forwardRef<SVGSVGElement, CodeSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm.18 5.02c-.4-.1-.8.15-.9.55l-2 8c-.1.4.14.8.54.9s.8-.14.9-.54l2-8c.1-.4-.14-.8-.54-.9m-4.15 2.2c-.3-.3-.77-.3-1.06 0l-2 2c-.3.3-.3.77 0 1.06l2 2c.3.3.77.3 1.06 0s.3-.77 0-1.06L7.56 12l1.47-1.47c.3-.3.3-.77 0-1.06m7 0c-.3-.3-.77-.3-1.06 0s-.3.77 0 1.06L16.44 12l-1.47 1.47c-.3.3-.3.77 0 1.06s.77.3 1.06 0l2-2q.22-.22.22-.53t-.22-.53z" clipRule="evenodd" />
    </IconBase>
  ))
);

CodeSquareFill.displayName = 'CodeSquareFill';

// Triple export pattern
export { CodeSquareFill, CodeSquareFill as CodeSquareFillIcon, CodeSquareFill as SiCodeSquareFill };
export default CodeSquareFill;
export type { CodeSquareFillProps };
