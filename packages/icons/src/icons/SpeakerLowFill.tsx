import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerLowFillProps = Omit<IconBaseProps, 'children'>;

const SpeakerLowFill = memo(
  forwardRef<SVGSVGElement, SpeakerLowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.2 3.95c.9-.64 2.17-.01 2.18 1.12v13.86c0 1.17-1.36 1.8-2.26 1.06l-4.83-4.03a.4.4 0 0 0-.24-.08h-2.3a2.13 2.13 0 0 1-2.12-2.13v-3.5c0-1.17.95-2.12 2.12-2.12h2.3q.14 0 .24-.1l4.83-4.02zM17.72 7.65a.9.9 0 0 1 1.23.16 6.85 6.85 0 0 1 0 8.38.88.88 0 0 1-1.39-1.07 5.1 5.1 0 0 0 0-6.25.9.9 0 0 1 .16-1.22" />
    </IconBase>
  ))
);

SpeakerLowFill.displayName = 'SpeakerLowFill';

// Triple export pattern (lucide-react style)
export { SpeakerLowFill, SpeakerLowFill as SpeakerLowFillIcon, SpeakerLowFill as SiSpeakerLowFill };
export default SpeakerLowFill;
export type { SpeakerLowFillProps };
