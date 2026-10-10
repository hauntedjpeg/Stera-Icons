import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerHighRegularProps = Omit<IconBaseProps, 'children'>;

const SpeakerHighRegular = memo(
  forwardRef<SVGSVGElement, SpeakerHighRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.92 3.42c.33-.25.8-.18 1.05.15 1.74 2.33 2.78 5.26 2.78 8.43s-1.04 6.1-2.78 8.43c-.25.33-.72.4-1.05.15s-.4-.72-.15-1.05c1.55-2.08 2.48-4.69 2.48-7.53s-.93-5.45-2.48-7.53c-.25-.33-.18-.8.15-1.05" />
        <path fillRule="evenodd" d="M8.34 4.6c1.26-1.26 3.41-.36 3.41 1.42v11.96c0 1.78-2.15 2.68-3.41 1.42l-3.5-3.5q-.16-.15-.36-.15H2.25c-1.1 0-2-.9-2-2v-3.5c0-1.1.9-2 2-2h2.23q.2 0 .36-.15zm1.91 1.42c0-.45-.54-.67-.85-.36l-3.5 3.5c-.38.38-.89.59-1.42.59H2.25c-.28 0-.5.22-.5.5v3.5c0 .28.22.5.5.5h2.23c.53 0 1.04.21 1.42.59l3.5 3.5c.31.31.85.09.85-.36z" clipRule="evenodd" />
        <path d="M17.16 5.55c.32-.25.8-.19 1.05.14 1.28 1.68 2.04 3.78 2.04 6.06 0 2.43-.87 4.66-2.31 6.4-.27.31-.74.36-1.06.1-.32-.27-.36-.75-.1-1.07 1.23-1.47 1.97-3.36 1.97-5.43 0-1.94-.65-3.72-1.74-5.15-.25-.33-.18-.8.15-1.05" />
        <path d="M14.3 7.75c.33-.25.8-.2 1.05.13.88 1.14 1.4 2.57 1.4 4.12s-.52 2.98-1.4 4.12c-.25.32-.72.39-1.05.13-.33-.25-.4-.72-.14-1.05.68-.88 1.09-2 1.09-3.2s-.4-2.31-1.09-3.2c-.25-.33-.19-.8.14-1.05" />
    </IconBase>
  ))
);

SpeakerHighRegular.displayName = 'SpeakerHighRegular';

// Triple export pattern
export { SpeakerHighRegular, SpeakerHighRegular as SpeakerHighRegularIcon, SpeakerHighRegular as SiSpeakerHighRegular };
export default SpeakerHighRegular;
export type { SpeakerHighRegularProps };
