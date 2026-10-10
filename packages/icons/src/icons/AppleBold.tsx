import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AppleBoldProps = Omit<IconBaseProps, 'children'>;

const AppleBold = memo(
  forwardRef<SVGSVGElement, AppleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.63 1.07c.51-.2 1.1.05 1.3.56s-.05 1.1-.56 1.3q-.86.36-1.22 1.7l-.08.34c1.66-.98 3.84-1.47 6.16-.26 1.52.8 2.3 2.18 2.6 3.69.3 1.48.16 3.15-.18 4.73-.35 1.6-.93 3.16-1.55 4.47-.6 1.28-1.3 2.4-1.94 3.06-1.81 1.83-4.12 1.56-5.66.53q-.16-.12-.5-.13-.34.01-.5.13c-1.54 1.03-3.85 1.3-5.66-.53-.63-.65-1.33-1.78-1.94-3.06-.62-1.31-1.2-2.88-1.55-4.47-.34-1.58-.49-3.25-.19-4.73.3-1.51 1.09-2.89 2.6-3.69 2.38-1.24 4.6-.7 6.27.33q.06-.46.2-.94c.3-1.13.97-2.46 2.4-3.03m4.67 5.41c-2.14-1.12-4.2-.1-5.59 1.3q-.3.28-.71.29t-.71-.3c-1.4-1.4-3.45-2.4-5.6-1.29q-1.26.68-1.57 2.31C3.9 9.9 4 11.27 4.31 12.7c.31 1.42.83 2.85 1.4 4.04.57 1.22 1.15 2.1 1.56 2.51.98 1 2.18.9 3.11.28.5-.33 1.08-.47 1.62-.47s1.13.14 1.62.47c.93.62 2.13.72 3.11-.28.4-.4.99-1.3 1.56-2.5s1.09-2.63 1.4-4.05c.32-1.43.41-2.8.19-3.9q-.31-1.64-1.58-2.32" clipRule="evenodd" />
    </IconBase>
  ))
);

AppleBold.displayName = 'AppleBold';

// Triple export pattern
export { AppleBold, AppleBold as AppleBoldIcon, AppleBold as SiAppleBold };
export default AppleBold;
export type { AppleBoldProps };
