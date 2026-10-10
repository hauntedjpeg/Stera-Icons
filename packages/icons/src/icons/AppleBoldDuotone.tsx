import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AppleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AppleBoldDuotone = memo(
  forwardRef<SVGSVGElement, AppleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 5.72c1.72-1.4 4.36-2.5 7.23-1 1.52.79 2.3 2.17 2.6 3.68.3 1.48.16 3.15-.18 4.73-.35 1.6-.93 3.16-1.55 4.47-.6 1.28-1.3 2.4-1.94 3.06-1.81 1.83-4.12 1.56-5.66.53q-.16-.12-.5-.13-.34.01-.5.13c-1.54 1.03-3.85 1.3-5.66-.53-.63-.65-1.33-1.78-1.94-3.06-.62-1.31-1.2-2.88-1.55-4.47-.34-1.58-.49-3.25-.19-4.73.3-1.51 1.1-2.89 2.61-3.69 2.87-1.5 5.5-.4 7.23 1.01m6.3.77c-2.14-1.13-4.2-.12-5.59 1.28q-.3.3-.71.3t-.71-.3c-1.4-1.4-3.45-2.4-5.6-1.28q-1.26.67-1.57 2.3C3.9 9.9 4 11.27 4.31 12.7c.31 1.43.83 2.85 1.4 4.04.57 1.22 1.16 2.1 1.56 2.51.98 1 2.18.9 3.11.28.5-.33 1.08-.47 1.62-.47s1.13.14 1.62.47c.93.62 2.13.72 3.11-.28.4-.4.99-1.3 1.57-2.5.56-1.2 1.08-2.62 1.4-4.05.3-1.43.4-2.8.18-3.9-.22-1.09-.72-1.87-1.58-2.31" clipRule="evenodd" />
        <path d="M13.63 1.07c.51-.2 1.1.05 1.3.56s-.05 1.1-.56 1.3q-.86.36-1.22 1.7l-.08.34q-.57.35-1.07.75-.45-.36-.97-.68.06-.46.2-.94c.3-1.13.97-2.46 2.4-3.03" opacity={.4} />
    </IconBase>
  ))
);

AppleBoldDuotone.displayName = 'AppleBoldDuotone';

// Triple export pattern
export { AppleBoldDuotone, AppleBoldDuotone as AppleBoldDuotoneIcon, AppleBoldDuotone as SiAppleBoldDuotone };
export default AppleBoldDuotone;
export type { AppleBoldDuotoneProps };
