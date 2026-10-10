import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, PoundSterlingCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M11.92 6.29c1.4-.21 2.98.44 3.94 2 .28.48.13 1.1-.34 1.38-.47.29-1.09.14-1.38-.34-.54-.9-1.34-1.15-1.93-1.06-.6.08-.96.47-.96 1.04v1.48H13c.55 0 1 .45 1 1s-.45 1-1 1h-1.75v1.48q-.01.55-.22.98h4.47c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.48 0-.88-.33-.98-.8s.15-.93.59-1.12l.04-.02.15-.07q.2-.12.46-.3c.38-.3.49-.54.49-.67v-1.48H8.5c-.55 0-1-.45-1-1s.45-1 1-1h.75V9.3c0-1.71 1.26-2.81 2.67-3.02" />
    </IconBase>
  ))
);

PoundSterlingCircleBoldDuotone.displayName = 'PoundSterlingCircleBoldDuotone';

// Triple export pattern
export { PoundSterlingCircleBoldDuotone, PoundSterlingCircleBoldDuotone as PoundSterlingCircleBoldDuotoneIcon, PoundSterlingCircleBoldDuotone as SiPoundSterlingCircleBoldDuotone };
export default PoundSterlingCircleBoldDuotone;
export type { PoundSterlingCircleBoldDuotoneProps };
