import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AppleRegularProps = Omit<IconBaseProps, 'children'>;

const AppleRegular = memo(
  forwardRef<SVGSVGElement, AppleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.72 1.3c.39-.15.82.04.98.42.15.39-.04.82-.42.98-.68.27-1.12.95-1.37 1.86q-.12.46-.17.92c1.66-1.13 3.93-1.82 6.37-.54 1.44.75 2.19 2.05 2.48 3.5s.15 3.08-.19 4.64c-.34 1.57-.91 3.12-1.52 4.41-.61 1.28-1.3 2.37-1.9 3-1.7 1.72-3.88 1.47-5.34.5q-.24-.17-.64-.18-.41.01-.64.17c-1.46.98-3.63 1.23-5.34-.5-.6-.62-1.3-1.71-1.9-2.99-.61-1.3-1.18-2.84-1.52-4.41-.35-1.56-.48-3.2-.2-4.63.3-1.46 1.05-2.76 2.49-3.51 2.43-1.28 4.7-.6 6.35.53q.04-.64.22-1.3c.3-1.1.94-2.34 2.26-2.87m4.7 4.96c-2.29-1.2-4.47-.1-5.89 1.34q-.22.21-.53.22-.32 0-.53-.22c-1.43-1.44-3.6-2.53-5.89-1.34-.94.5-1.47 1.35-1.7 2.48-.24 1.16-.14 2.56.18 4.02.32 1.44.85 2.88 1.42 4.09.58 1.22 1.18 2.14 1.61 2.58 1.08 1.1 2.42.98 3.43.3.44-.3.98-.42 1.48-.42s1.04.13 1.48.43c1 .67 2.35.79 3.43-.31.43-.44 1.03-1.36 1.61-2.58.57-1.2 1.1-2.65 1.42-4.1s.41-2.85.18-4c-.23-1.14-.76-2-1.7-2.49" clipRule="evenodd" />
    </IconBase>
  ))
);

AppleRegular.displayName = 'AppleRegular';

// Triple export pattern
export { AppleRegular, AppleRegular as AppleRegularIcon, AppleRegular as SiAppleRegular };
export default AppleRegular;
export type { AppleRegularProps };
