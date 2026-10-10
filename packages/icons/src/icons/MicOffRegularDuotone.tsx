import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, MicOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.07 11.27c.4-.1.8.14.9.54.81 3.13 3.65 5.44 7.03 5.44 1.21 0 2.36-.3 3.36-.83l1.1 1.1q-1.67 1-3.71 1.2v1.53H15c.41 0 .75.34.75.75s-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25v-1.53c-3.74-.32-6.81-3-7.72-6.53-.1-.4.13-.81.54-.92M19.02 11.81c.1-.4.51-.64.91-.54s.65.52.54.92q-.37 1.44-1.18 2.65c-.23.34-.7.43-1.04.2s-.44-.69-.2-1.04q.66-1 .97-2.19" opacity={0.4} />
        <path d="M8.75 9.81V10c0 1.8 1.45 3.25 3.25 3.25h.18l1.28 1.27q-.7.23-1.46.23c-2.62 0-4.75-2.13-4.75-4.75V8.31zM12 2.25c2.62 0 4.75 2.13 4.75 4.75v3q0 .93-.33 1.75c-.16.38-.6.57-.98.42s-.57-.59-.42-.97q.23-.56.23-1.2V7c0-1.8-1.46-3.25-3.25-3.25-1.05 0-1.99.5-2.59 1.28-.25.33-.72.4-1.05.14-.32-.25-.39-.72-.14-1.05.87-1.14 2.24-1.87 3.78-1.87" opacity={0.4} />
        <path d="M3.47 3.47c.3-.3.77-.3 1.06 0l16 16c.3.3.3.77 0 1.06s-.77.3-1.06 0l-16-16c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

MicOffRegularDuotone.displayName = 'MicOffRegularDuotone';

// Triple export pattern
export { MicOffRegularDuotone, MicOffRegularDuotone as MicOffRegularDuotoneIcon, MicOffRegularDuotone as SiMicOffRegularDuotone };
export default MicOffRegularDuotone;
export type { MicOffRegularDuotoneProps };
