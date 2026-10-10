import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerLowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerLowRegularDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerLowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.84 4.6c1.26-1.26 3.41-.36 3.41 1.42v11.96c0 1.78-2.15 2.68-3.41 1.42l-3.5-3.5q-.16-.15-.36-.15H5.75c-1.1 0-2-.9-2-2v-3.5c0-1.1.9-2 2-2h2.23q.2 0 .36-.15zm1.91 1.42c0-.45-.54-.67-.85-.36l-3.5 3.5c-.38.38-.89.59-1.42.59H5.75c-.28 0-.5.22-.5.5v3.5c0 .28.22.5.5.5h2.23c.53 0 1.04.21 1.42.59l3.5 3.5c.31.31.85.09.85-.36z" clipRule="evenodd" />
        <path d="M17.8 7.75c.33-.26.8-.2 1.05.13.88 1.14 1.4 2.57 1.4 4.12s-.52 2.98-1.4 4.11c-.25.33-.72.4-1.05.14-.33-.25-.4-.72-.14-1.05.68-.89 1.09-2 1.09-3.2s-.4-2.32-1.09-3.2c-.25-.33-.19-.8.14-1.05" opacity={.4} />
    </IconBase>
  ))
);

SpeakerLowRegularDuotone.displayName = 'SpeakerLowRegularDuotone';

// Triple export pattern
export { SpeakerLowRegularDuotone, SpeakerLowRegularDuotone as SpeakerLowRegularDuotoneIcon, SpeakerLowRegularDuotone as SiSpeakerLowRegularDuotone };
export default SpeakerLowRegularDuotone;
export type { SpeakerLowRegularDuotoneProps };
