import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerRegularProps = Omit<IconBaseProps, 'children'>;

const SpeakerRegular = memo(
  forwardRef<SVGSVGElement, SpeakerRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.34 4.6c1.26-1.26 3.41-.36 3.41 1.42v11.96c0 1.78-2.15 2.68-3.41 1.42l-3.5-3.5q-.16-.15-.36-.15H7.25c-1.1 0-2-.9-2-2v-3.5c0-1.1.9-2 2-2h2.23q.2 0 .36-.15zm1.91 1.42c0-.45-.54-.67-.85-.36l-3.5 3.5c-.38.38-.89.59-1.42.59H7.25c-.28 0-.5.22-.5.5v3.5c0 .28.22.5.5.5h2.23c.53 0 1.04.21 1.42.59l3.5 3.5c.31.31.85.09.85-.36z" clipRule="evenodd" />
    </IconBase>
  ))
);

SpeakerRegular.displayName = 'SpeakerRegular';

// Triple export pattern
export { SpeakerRegular, SpeakerRegular as SpeakerRegularIcon, SpeakerRegular as SiSpeakerRegular };
export default SpeakerRegular;
export type { SpeakerRegularProps };
