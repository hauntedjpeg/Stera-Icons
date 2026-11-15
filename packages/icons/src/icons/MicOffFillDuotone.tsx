import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicOffFillDuotone = memo(
  forwardRef<SVGSVGElement, MicOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.07 11.27c.4-.1.8.14.9.54.81 3.13 3.65 5.44 7.03 5.44 1.21 0 2.36-.3 3.36-.83l1.1 1.1q-1.67 1-3.71 1.2v1.53H15c.41 0 .75.34.75.75s-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25v-1.53c-3.74-.32-6.81-3-7.72-6.53-.1-.4.13-.81.54-.92M19.02 11.81c.1-.4.51-.64.91-.54s.65.52.54.92q-.37 1.44-1.18 2.65c-.23.34-.7.43-1.04.2s-.44-.69-.2-1.04q.66-1 .97-2.19" opacity={0.4} />
        <path d="M13.46 14.52q-.7.23-1.46.23c-2.62 0-4.75-2.13-4.75-4.75V8.31zM12 2.25c2.62 0 4.75 2.13 4.75 4.75v3q0 .93-.33 1.75-.16.36-.55.46-.4.07-.68-.2l-6.9-6.9c-.27-.27-.3-.7-.07-1C9.1 2.99 10.46 2.26 12 2.26" opacity={0.4} />
        <path d="M3.47 3.47c.3-.3.77-.3 1.06 0l16 16c.3.3.3.77 0 1.06s-.77.3-1.06 0l-16-16c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

MicOffFillDuotone.displayName = 'MicOffFillDuotone';

// Triple export pattern
export { MicOffFillDuotone, MicOffFillDuotone as MicOffFillDuotoneIcon, MicOffFillDuotone as SiMicOffFillDuotone };
export default MicOffFillDuotone;
export type { MicOffFillDuotoneProps };
