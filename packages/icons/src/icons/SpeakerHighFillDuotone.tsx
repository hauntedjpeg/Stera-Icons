import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerHighFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerHighFillDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerHighFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="speaker-high-fill-duotone" {...props}>
      <path d="M19.85 3.32a.9.9 0 0 1 1.22.18c1.76 2.35 2.8 5.3 2.8 8.5s-1.04 6.15-2.8 8.5a.88.88 0 0 1-1.4-1.05A12.4 12.4 0 0 0 22.12 12c0-2.81-.91-5.4-2.45-7.45a.9.9 0 0 1 .18-1.23" opacity={0.4} />
        <path d="M17.08 5.45a.9.9 0 0 1 1.23.17 10.1 10.1 0 0 1-.28 12.6.88.88 0 0 1-1.34-1.12 8.34 8.34 0 0 0 .22-10.42.9.9 0 0 1 .17-1.23" opacity={0.4} />
        <path d="M14.22 7.65a.9.9 0 0 1 1.23.16 6.85 6.85 0 0 1 0 8.38.88.88 0 0 1-1.39-1.06 5.1 5.1 0 0 0 0-6.25.9.9 0 0 1 .16-1.23" opacity={0.4} />
        <path d="M9.7 3.95c.9-.64 2.17-.01 2.18 1.12v13.86c0 1.17-1.36 1.8-2.26 1.06l-4.83-4.03a.4.4 0 0 0-.24-.08h-2.3a2.13 2.13 0 0 1-2.12-2.13v-3.5c0-1.17.95-2.12 2.12-2.12h2.3q.13 0 .24-.1l4.83-4.02z" />
    </IconBase>
  ))
);

SpeakerHighFillDuotone.displayName = 'SpeakerHighFillDuotone';

// Triple export pattern (lucide-react style)
export { SpeakerHighFillDuotone, SpeakerHighFillDuotone as SpeakerHighFillDuotoneIcon, SpeakerHighFillDuotone as SiSpeakerHighFillDuotone };
export default SpeakerHighFillDuotone;
export type { SpeakerHighFillDuotoneProps };
