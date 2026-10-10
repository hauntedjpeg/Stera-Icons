import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerMediumFillProps = Omit<IconBaseProps, 'children'>;

const SpeakerMediumFill = memo(
  forwardRef<SVGSVGElement, SpeakerMediumFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.46 3.95c.89-.64 2.16-.01 2.16 1.12v13.86c0 1.17-1.35 1.8-2.25 1.06l-4.83-4.03q-.1-.08-.24-.08H4c-1.17 0-2.12-.96-2.12-2.13v-3.5c0-1.17.95-2.12 2.12-2.12h2.3q.13 0 .24-.1l4.83-4.02zM18.83 5.45c.38-.3.93-.22 1.23.16 1.3 1.7 2.06 3.83 2.07 6.14 0 2.46-.88 4.72-2.34 6.47-.31.37-.87.42-1.24.12-.37-.31-.42-.87-.11-1.24 1.2-1.45 1.93-3.31 1.93-5.35 0-1.91-.63-3.67-1.7-5.07-.3-.39-.22-.94.16-1.23" />
        <path d="M15.97 7.65c.38-.3.93-.23 1.23.16.9 1.16 1.42 2.61 1.43 4.19 0 1.58-.54 3.03-1.43 4.2-.3.37-.85.44-1.23.15s-.45-.84-.16-1.23c.67-.86 1.06-1.94 1.06-3.12s-.4-2.26-1.06-3.13c-.3-.38-.22-.93.16-1.22" />
    </IconBase>
  ))
);

SpeakerMediumFill.displayName = 'SpeakerMediumFill';

// Triple export pattern
export { SpeakerMediumFill, SpeakerMediumFill as SpeakerMediumFillIcon, SpeakerMediumFill as SiSpeakerMediumFill };
export default SpeakerMediumFill;
export type { SpeakerMediumFillProps };
