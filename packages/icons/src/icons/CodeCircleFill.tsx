import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeCircleFillProps = Omit<IconBaseProps, 'children'>;

const CodeCircleFill = memo(
  forwardRef<SVGSVGElement, CodeCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m1.18 5.52c-.4-.1-.8.15-.9.55l-2 8c-.1.4.14.8.54.9s.8-.14.9-.54l2-8c.1-.4-.14-.8-.54-.9m-4.15 2.2c-.3-.3-.77-.3-1.06 0l-2 2c-.3.3-.3.77 0 1.06l2 2c.3.3.77.3 1.06 0s.3-.77 0-1.06L7.56 12l1.47-1.47c.3-.3.3-.77 0-1.06m7 0c-.3-.3-.77-.3-1.06 0s-.3.77 0 1.06L16.44 12l-1.47 1.47c-.3.3-.3.77 0 1.06s.77.3 1.06 0l2-2q.22-.22.22-.53t-.22-.53z" clipRule="evenodd" />
    </IconBase>
  ))
);

CodeCircleFill.displayName = 'CodeCircleFill';

// Triple export pattern
export { CodeCircleFill, CodeCircleFill as CodeCircleFillIcon, CodeCircleFill as SiCodeCircleFill };
export default CodeCircleFill;
export type { CodeCircleFillProps };
