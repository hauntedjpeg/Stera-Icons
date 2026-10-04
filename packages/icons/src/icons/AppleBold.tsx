import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AppleBoldProps = Omit<IconBaseProps, 'children'>;

const AppleBold = memo(
  forwardRef<SVGSVGElement, AppleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.63 1.07a1 1 0 0 1 .74 1.86q-.86.36-1.22 1.7l-.08.34a6.1 6.1 0 0 1 6.16-.26 5.1 5.1 0 0 1 2.6 3.69c.3 1.48.16 3.15-.18 4.73a22 22 0 0 1-1.55 4.47 12 12 0 0 1-1.94 3.06 4.3 4.3 0 0 1-5.66.53 1 1 0 0 0-.5-.13q-.34.01-.5.13a4.3 4.3 0 0 1-5.66-.53A12 12 0 0 1 3.9 17.6c-.62-1.31-1.2-2.88-1.55-4.47-.34-1.58-.49-3.25-.19-4.73A5.1 5.1 0 0 1 4.77 4.7a6.1 6.1 0 0 1 6.26.33q.06-.46.2-.94c.3-1.13.97-2.46 2.4-3.03M18.3 6.5c-2.14-1.13-4.2-.12-5.59 1.28a1 1 0 0 1-1.42 0c-1.4-1.4-3.45-2.4-5.6-1.28q-1.26.67-1.57 2.3a10 10 0 0 0 .19 3.91c.31 1.43.83 2.85 1.4 4.04.57 1.22 1.16 2.1 1.56 2.51.98 1 2.18.9 3.11.28a3 3 0 0 1 1.62-.47c.54 0 1.13.14 1.62.47.93.62 2.13.72 3.11-.28.4-.4.99-1.3 1.57-2.5.56-1.2 1.08-2.62 1.4-4.05.3-1.43.4-2.8.18-3.9-.22-1.09-.72-1.87-1.58-2.31" clipRule="evenodd" />
    </IconBase>
  ))
);

AppleBold.displayName = 'AppleBold';

// Triple export pattern (lucide-react style)
export { AppleBold, AppleBold as AppleBoldIcon, AppleBold as SiAppleBold };
export default AppleBold;
export type { AppleBoldProps };
