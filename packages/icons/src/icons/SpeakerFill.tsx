import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerFillProps = Omit<IconBaseProps, 'children'>;

const SpeakerFill = memo(
  forwardRef<SVGSVGElement, SpeakerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.7 3.95c.9-.64 2.17-.01 2.18 1.12v13.86c0 1.17-1.36 1.8-2.26 1.06l-4.83-4.03a.4.4 0 0 0-.24-.08h-2.3a2.13 2.13 0 0 1-2.12-2.13v-3.5c0-1.17.95-2.12 2.12-2.12h2.3q.14 0 .24-.1l4.83-4.02z" />
    </IconBase>
  ))
);

SpeakerFill.displayName = 'SpeakerFill';

// Triple export pattern (lucide-react style)
export { SpeakerFill, SpeakerFill as SpeakerFillIcon, SpeakerFill as SiSpeakerFill };
export default SpeakerFill;
export type { SpeakerFillProps };
