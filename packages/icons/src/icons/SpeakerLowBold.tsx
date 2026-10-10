import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerLowBoldProps = Omit<IconBaseProps, 'children'>;

const SpeakerLowBold = memo(
  forwardRef<SVGSVGElement, SpeakerLowBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.66 4.43C13.08 3 15.5 4 15.5 6.02v11.96c0 2-2.42 3.01-3.84 1.6l-3.5-3.5Q8.09 16 7.98 16H5.75c-1.16 0-2.12-.89-2.24-2.02l-.01-.23v-3.5C3.5 9.01 4.5 8 5.75 8h2.23q.1 0 .18-.07zm1.84 1.59c0-.23-.27-.34-.43-.18l-3.5 3.5c-.42.42-1 .66-1.59.66H5.75c-.14 0-.25.11-.25.25v3.55q.06.18.25.2h2.23c.6 0 1.17.24 1.6.66l3.5 3.5c.15.16.42.04.42-.18z" clipRule="evenodd" />
        <path d="M17.65 7.55c.43-.34 1.06-.26 1.4.18.9 1.18 1.45 2.66 1.45 4.27s-.54 3.08-1.45 4.27c-.34.43-.97.52-1.4.18-.44-.34-.52-.97-.19-1.4.65-.85 1.04-1.9 1.04-3.05s-.39-2.2-1.04-3.05c-.33-.44-.25-1.07.19-1.4" />
    </IconBase>
  ))
);

SpeakerLowBold.displayName = 'SpeakerLowBold';

// Triple export pattern
export { SpeakerLowBold, SpeakerLowBold as SpeakerLowBoldIcon, SpeakerLowBold as SiSpeakerLowBold };
export default SpeakerLowBold;
export type { SpeakerLowBoldProps };
