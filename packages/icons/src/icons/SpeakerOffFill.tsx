import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerOffFillProps = Omit<IconBaseProps, 'children'>;

const SpeakerOffFill = memo(
  forwardRef<SVGSVGElement, SpeakerOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.38 3.38c.34-.34.9-.34 1.24 0l16 16c.34.34.34.9 0 1.24s-.9.34-1.24 0l-16-16c-.34-.34-.34-.9 0-1.24M16.73 19.56c-.38.74-1.4 1.03-2.11.43l-4.83-4.03q-.11-.08-.24-.08h-2.3c-1.17 0-2.13-.96-2.13-2.13v-3.5c0-.63.28-1.2.72-1.58zM14.7 3.95c.9-.64 2.17-.01 2.17 1.12v8.98l-6.5-6.5L14.62 4z" />
    </IconBase>
  ))
);

SpeakerOffFill.displayName = 'SpeakerOffFill';

// Triple export pattern
export { SpeakerOffFill, SpeakerOffFill as SpeakerOffFillIcon, SpeakerOffFill as SiSpeakerOffFill };
export default SpeakerOffFill;
export type { SpeakerOffFillProps };
