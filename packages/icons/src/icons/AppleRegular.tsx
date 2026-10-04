import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AppleRegularProps = Omit<IconBaseProps, 'children'>;

const AppleRegular = memo(
  forwardRef<SVGSVGElement, AppleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.72 1.3a.75.75 0 0 1 .56 1.4c-.68.27-1.12.95-1.37 1.86q-.12.46-.17.92c1.66-1.13 3.93-1.82 6.37-.54a4.9 4.9 0 0 1 2.48 3.5 11.5 11.5 0 0 1-.19 4.64 21 21 0 0 1-1.52 4.41 12 12 0 0 1-1.9 3 4.1 4.1 0 0 1-5.34.5q-.24-.17-.64-.18c-.26 0-.5.07-.64.17a4.1 4.1 0 0 1-5.34-.5c-.6-.62-1.3-1.71-1.9-2.99a21 21 0 0 1-1.52-4.41 11.5 11.5 0 0 1-.2-4.63A4.9 4.9 0 0 1 4.9 4.94c2.43-1.28 4.7-.6 6.35.53q.04-.64.22-1.3c.3-1.1.94-2.34 2.26-2.87m4.7 4.96c-2.29-1.2-4.47-.1-5.89 1.34a.75.75 0 0 1-1.06 0c-1.43-1.44-3.6-2.53-5.89-1.34-.94.5-1.47 1.35-1.7 2.48-.24 1.16-.14 2.56.18 4.02.32 1.44.85 2.88 1.42 4.09a10 10 0 0 0 1.61 2.58c1.08 1.1 2.42.98 3.43.3.44-.29.98-.42 1.48-.42s1.04.13 1.48.43c1 .67 2.35.79 3.43-.31.43-.44 1.03-1.36 1.61-2.58.57-1.2 1.1-2.65 1.42-4.1s.41-2.85.18-4c-.23-1.14-.76-2-1.7-2.49" clipRule="evenodd" />
    </IconBase>
  ))
);

AppleRegular.displayName = 'AppleRegular';

// Triple export pattern (lucide-react style)
export { AppleRegular, AppleRegular as AppleRegularIcon, AppleRegular as SiAppleRegular };
export default AppleRegular;
export type { AppleRegularProps };
