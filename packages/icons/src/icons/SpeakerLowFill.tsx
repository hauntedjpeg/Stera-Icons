import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerLowFillProps = Omit<IconBaseProps, 'children'>;

const SpeakerLowFill = memo(
  forwardRef<SVGSVGElement, SpeakerLowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.2 3.95c.9-.64 2.17-.01 2.18 1.12v13.86c0 1.17-1.36 1.8-2.26 1.06l-4.83-4.03q-.1-.08-.24-.08h-2.3c-1.17 0-2.12-.96-2.12-2.13v-3.5c0-1.17.95-2.12 2.12-2.12h2.3q.14 0 .24-.1l4.83-4.02zM17.72 7.65c.38-.3.93-.23 1.23.16.9 1.16 1.42 2.61 1.43 4.19 0 1.58-.54 3.03-1.43 4.2-.3.37-.85.44-1.23.15s-.45-.84-.16-1.23c.67-.86 1.06-1.94 1.07-3.12 0-1.18-.4-2.26-1.07-3.13-.3-.38-.22-.93.16-1.22" />
    </IconBase>
  ))
);

SpeakerLowFill.displayName = 'SpeakerLowFill';

// Triple export pattern
export { SpeakerLowFill, SpeakerLowFill as SpeakerLowFillIcon, SpeakerLowFill as SiSpeakerLowFill };
export default SpeakerLowFill;
export type { SpeakerLowFillProps };
