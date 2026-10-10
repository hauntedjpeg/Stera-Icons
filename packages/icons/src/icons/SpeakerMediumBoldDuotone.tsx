import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerMediumBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerMediumBoldDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerMediumBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.75 5.35c.44-.33 1.07-.25 1.4.19 1.32 1.72 2.1 3.88 2.1 6.2 0 2.5-.89 4.79-2.37 6.56-.35.43-.98.48-1.4.13-.43-.35-.49-.98-.14-1.4 1.2-1.44 1.91-3.28 1.91-5.28 0-1.88-.63-3.61-1.69-5-.33-.44-.25-1.07.2-1.4" opacity={0.4} />
        <path d="M15.9 7.55c.43-.34 1.06-.26 1.4.18.9 1.18 1.45 2.66 1.45 4.27s-.54 3.09-1.45 4.27c-.34.43-.97.52-1.4.18-.44-.34-.52-.97-.19-1.4.65-.85 1.04-1.9 1.04-3.05s-.39-2.2-1.04-3.05c-.33-.44-.25-1.06.19-1.4" opacity={0.4} />
        <path fillRule="evenodd" d="M9.9 4.43C11.34 3 13.76 4 13.76 6.02v11.96c0 2-2.42 3.01-3.84 1.6l-3.5-3.5Q6.33 16 6.23 16H4c-1.16 0-2.12-.89-2.24-2.02l-.01-.23v-3.5C1.75 9.01 2.75 8 4 8h2.23q.1 0 .18-.07zm1.85 1.59c0-.23-.27-.34-.43-.18l-3.5 3.5c-.42.42-1 .66-1.59.66H4c-.14 0-.25.11-.25.25v3.55q.06.18.25.2h2.23c.6 0 1.17.24 1.6.66l3.5 3.5c.15.16.42.04.42-.18z" clipRule="evenodd" />
    </IconBase>
  ))
);

SpeakerMediumBoldDuotone.displayName = 'SpeakerMediumBoldDuotone';

// Triple export pattern
export { SpeakerMediumBoldDuotone, SpeakerMediumBoldDuotone as SpeakerMediumBoldDuotoneIcon, SpeakerMediumBoldDuotone as SiSpeakerMediumBoldDuotone };
export default SpeakerMediumBoldDuotone;
export type { SpeakerMediumBoldDuotoneProps };
