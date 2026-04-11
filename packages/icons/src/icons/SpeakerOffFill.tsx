import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerOffFillProps = Omit<IconBaseProps, 'children'>;

const SpeakerOffFill = memo(
  forwardRef<SVGSVGElement, SpeakerOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.38 3.38a.9.9 0 0 1 1.24 0l16 16a.88.88 0 0 1-1.24 1.24l-16-16a.9.9 0 0 1 0-1.24M16.73 19.56a1.38 1.38 0 0 1-2.11.43l-4.83-4.03a.4.4 0 0 0-.24-.08h-2.3a2.13 2.13 0 0 1-2.13-2.13v-3.5c0-.63.28-1.2.72-1.58zM14.7 3.95c.9-.64 2.17-.01 2.17 1.12v8.98l-6.5-6.5L14.62 4z" />
    </IconBase>
  ))
);

SpeakerOffFill.displayName = 'SpeakerOffFill';

// Triple export pattern (lucide-react style)
export { SpeakerOffFill, SpeakerOffFill as SpeakerOffFillIcon, SpeakerOffFill as SiSpeakerOffFill };
export default SpeakerOffFill;
export type { SpeakerOffFillProps };
