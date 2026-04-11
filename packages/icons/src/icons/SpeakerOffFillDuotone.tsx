import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerOffFillDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.88 18.11v.82c0 1.17-1.36 1.8-2.26 1.06l-4.83-4.03a.4.4 0 0 0-.24-.09h-2.3a2.13 2.13 0 0 1-2.12-2.12v-3.5c0-1.06.77-1.94 1.78-2.1zM14.7 3.94c.9-.64 2.17 0 2.18 1.13v10.57L9.36 8.12h.19q.14 0 .24-.08L14.62 4z" opacity={0.4} />
        <path d="M3.38 3.38a.9.9 0 0 1 1.24 0l16 16a.88.88 0 0 1-1.24 1.24l-16-16a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

SpeakerOffFillDuotone.displayName = 'SpeakerOffFillDuotone';

// Triple export pattern (lucide-react style)
export { SpeakerOffFillDuotone, SpeakerOffFillDuotone as SpeakerOffFillDuotoneIcon, SpeakerOffFillDuotone as SiSpeakerOffFillDuotone };
export default SpeakerOffFillDuotone;
export type { SpeakerOffFillDuotoneProps };
