import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerHighFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerHighFillDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerHighFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.85 3.32c.38-.29.93-.2 1.22.18 1.76 2.35 2.8 5.3 2.8 8.5s-1.04 6.15-2.8 8.5c-.29.39-.84.47-1.22.18-.4-.29-.47-.84-.18-1.23 1.54-2.05 2.45-4.63 2.46-7.45 0-2.81-.92-5.4-2.46-7.45-.29-.39-.21-.94.18-1.23" opacity={0.4} />
        <path d="M17.08 5.45c.38-.3.93-.22 1.23.17 1.3 1.7 2.07 3.83 2.07 6.13 0 2.46-.88 4.72-2.34 6.48-.31.37-.87.42-1.24.1-.37-.3-.42-.85-.11-1.23 1.2-1.45 1.93-3.31 1.94-5.35 0-1.9-.64-3.66-1.72-5.07-.29-.39-.21-.94.17-1.23" opacity={0.4} />
        <path d="M14.22 7.65c.38-.3.93-.22 1.23.16.9 1.16 1.43 2.61 1.43 4.2 0 1.57-.54 3.02-1.43 4.18-.3.39-.85.46-1.23.16s-.45-.84-.16-1.22c.67-.87 1.06-1.95 1.07-3.13 0-1.18-.4-2.26-1.07-3.12-.3-.39-.22-.94.16-1.23" opacity={0.4} />
        <path d="M9.7 3.95c.9-.64 2.17-.01 2.18 1.12v13.86c0 1.17-1.36 1.8-2.26 1.06l-4.83-4.03q-.1-.08-.24-.08h-2.3c-1.17 0-2.12-.96-2.12-2.13v-3.5c0-1.17.95-2.12 2.12-2.12h2.3q.13 0 .24-.1l4.83-4.02z" />
    </IconBase>
  ))
);

SpeakerHighFillDuotone.displayName = 'SpeakerHighFillDuotone';

// Triple export pattern
export { SpeakerHighFillDuotone, SpeakerHighFillDuotone as SpeakerHighFillDuotoneIcon, SpeakerHighFillDuotone as SiSpeakerHighFillDuotone };
export default SpeakerHighFillDuotone;
export type { SpeakerHighFillDuotoneProps };
