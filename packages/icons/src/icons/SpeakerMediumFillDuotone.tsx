import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerMediumFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerMediumFillDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerMediumFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.83 5.45a.9.9 0 0 1 1.23.16 10.1 10.1 0 0 1-.28 12.61.88.88 0 0 1-1.34-1.12 8.34 8.34 0 0 0 .22-10.43.87.87 0 0 1 .17-1.22" opacity={0.4} />
        <path d="M15.97 7.65a.9.9 0 0 1 1.23.16 6.85 6.85 0 0 1 0 8.38.88.88 0 0 1-1.39-1.07 5.1 5.1 0 0 0 0-6.25.9.9 0 0 1 .16-1.22" opacity={0.4} />
        <path d="M11.46 3.95c.89-.64 2.16-.01 2.16 1.12v13.86c0 1.17-1.35 1.8-2.25 1.06l-4.83-4.03a.4.4 0 0 0-.24-.08H4a2.13 2.13 0 0 1-2.12-2.13v-3.5c0-1.17.95-2.12 2.12-2.12h2.3q.13 0 .24-.1l4.83-4.02z" />
    </IconBase>
  ))
);

SpeakerMediumFillDuotone.displayName = 'SpeakerMediumFillDuotone';

// Triple export pattern (lucide-react style)
export { SpeakerMediumFillDuotone, SpeakerMediumFillDuotone as SpeakerMediumFillDuotoneIcon, SpeakerMediumFillDuotone as SiSpeakerMediumFillDuotone };
export default SpeakerMediumFillDuotone;
export type { SpeakerMediumFillDuotoneProps };
