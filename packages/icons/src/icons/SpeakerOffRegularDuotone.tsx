import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.69 9.75H7.25c-.28 0-.5.22-.5.5v3.5c0 .28.22.5.5.5h2.23c.53 0 1.04.21 1.42.59l3.5 3.5c.31.31.85.09.85-.36v-1.67l1.5 1.5v.17c0 1.78-2.15 2.68-3.41 1.42l-3.5-3.5q-.16-.15-.36-.15H7.25c-1.1 0-2-.9-2-2v-3.5c0-1.08.86-1.97 1.94-2zM13.34 4.6c1.26-1.26 3.41-.36 3.41 1.42v5.73c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.02c0-.45-.54-.67-.85-.36l-2.25 2.25c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06z" opacity={0.4} />
        <path d="M3.47 3.47c.3-.3.77-.3 1.06 0l16 16c.3.3.3.77 0 1.06s-.77.3-1.06 0l-16-16c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

SpeakerOffRegularDuotone.displayName = 'SpeakerOffRegularDuotone';

// Triple export pattern
export { SpeakerOffRegularDuotone, SpeakerOffRegularDuotone as SpeakerOffRegularDuotoneIcon, SpeakerOffRegularDuotone as SiSpeakerOffRegularDuotone };
export default SpeakerOffRegularDuotone;
export type { SpeakerOffRegularDuotoneProps };
