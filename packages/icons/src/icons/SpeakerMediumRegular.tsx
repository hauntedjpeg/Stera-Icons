import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerMediumRegularProps = Omit<IconBaseProps, 'children'>;

const SpeakerMediumRegular = memo(
  forwardRef<SVGSVGElement, SpeakerMediumRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.09 4.6c1.26-1.26 3.41-.36 3.41 1.42v11.96c0 1.78-2.15 2.68-3.41 1.42l-3.5-3.5q-.16-.15-.36-.15H4c-1.1 0-2-.9-2-2v-3.5c0-1.1.9-2 2-2h2.23q.2 0 .36-.15zM12 6.02c0-.45-.54-.67-.85-.36l-3.5 3.5c-.38.38-.89.59-1.42.59H4c-.28 0-.5.22-.5.5v3.5c0 .28.22.5.5.5h2.23c.53 0 1.04.21 1.42.59l3.5 3.5c.31.31.85.09.85-.36z" clipRule="evenodd" />
        <path d="M18.9 5.55c.33-.25.8-.19 1.06.14C21.24 7.37 22 9.47 22 11.75c0 2.43-.87 4.66-2.31 6.4-.27.31-.74.35-1.06.09-.32-.27-.36-.74-.1-1.06 1.23-1.47 1.97-3.36 1.97-5.43 0-1.94-.65-3.72-1.74-5.15-.25-.33-.18-.8.15-1.05" />
        <path d="M16.05 7.75c.33-.26.8-.2 1.05.13.88 1.14 1.4 2.57 1.4 4.12s-.52 2.98-1.4 4.11c-.25.33-.72.4-1.05.14-.33-.25-.4-.72-.14-1.05.68-.89 1.09-2 1.09-3.2s-.4-2.32-1.09-3.2c-.25-.33-.19-.8.14-1.05" />
    </IconBase>
  ))
);

SpeakerMediumRegular.displayName = 'SpeakerMediumRegular';

// Triple export pattern
export { SpeakerMediumRegular, SpeakerMediumRegular as SpeakerMediumRegularIcon, SpeakerMediumRegular as SiSpeakerMediumRegular };
export default SpeakerMediumRegular;
export type { SpeakerMediumRegularProps };
