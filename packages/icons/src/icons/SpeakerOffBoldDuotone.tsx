import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.59 10H7.25c-.14 0-.25.11-.25.25v3.55q.06.18.25.2h2.23c.6 0 1.17.24 1.6.66l3.5 3.5c.15.16.42.04.42-.18v-1.57l1.97 1.97c-.3 1.73-2.5 2.51-3.81 1.2l-3.5-3.5Q9.59 16 9.48 16H7.25c-1.16 0-2.12-.89-2.24-2.02L5 13.75v-3.5c0-1.04.7-1.91 1.67-2.17zM13.16 4.43C14.58 3 17 4 17 6.02v5.73c0 .55-.45 1-1 1s-1-.45-1-1V6.02c0-.23-.27-.34-.43-.18l-2.24 2.25c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42z" opacity={0.4} />
        <path d="M3.3 3.3c.38-.4 1.02-.4 1.4 0l16 16c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-16-16c-.4-.38-.4-1.02 0-1.4" />
    </IconBase>
  ))
);

SpeakerOffBoldDuotone.displayName = 'SpeakerOffBoldDuotone';

// Triple export pattern
export { SpeakerOffBoldDuotone, SpeakerOffBoldDuotone as SpeakerOffBoldDuotoneIcon, SpeakerOffBoldDuotone as SiSpeakerOffBoldDuotone };
export default SpeakerOffBoldDuotone;
export type { SpeakerOffBoldDuotoneProps };
