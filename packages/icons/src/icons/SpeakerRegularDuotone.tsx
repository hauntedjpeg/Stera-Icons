import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerRegularDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.47 8.47c-.3.3-.3.77 0 1.06.18.18.43.25.66.2l-.13.02H7.25c-.28 0-.5.22-.5.5v3.5c0 .28.22.5.5.5H10q-.3 0-.53.22c-.3.3-.3.77 0 1.06l.22.22H7.25c-1.1 0-2-.9-2-2v-3.5c0-1.1.9-2 2-2h2.44z" opacity={.4} />
        <path d="M13.34 4.6c1.26-1.26 3.41-.36 3.41 1.42v11.96c0 1.78-2.15 2.68-3.41 1.42l-3.87-3.87c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l3.87 3.87c.31.31.85.09.85-.36V6.02c0-.45-.54-.67-.85-.36l-3.87 3.87c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06z" />
    </IconBase>
  ))
);

SpeakerRegularDuotone.displayName = 'SpeakerRegularDuotone';

// Triple export pattern
export { SpeakerRegularDuotone, SpeakerRegularDuotone as SpeakerRegularDuotoneIcon, SpeakerRegularDuotone as SiSpeakerRegularDuotone };
export default SpeakerRegularDuotone;
export type { SpeakerRegularDuotoneProps };
