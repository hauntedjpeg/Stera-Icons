import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerHighBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerHighBoldDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerHighBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.77 3.22c.44-.33 1.07-.24 1.4.2C22.95 5.8 24 8.77 24 12s-1.05 6.2-2.83 8.58c-.33.44-.96.53-1.4.2s-.53-.96-.2-1.4C21.09 17.35 22 14.78 22 12s-.91-5.34-2.43-7.38c-.33-.44-.24-1.07.2-1.4" opacity={0.4} />
        <path d="M17 5.35c.44-.33 1.07-.25 1.4.2 1.32 1.71 2.1 3.87 2.1 6.2 0 2.5-.89 4.78-2.37 6.55-.35.43-.98.49-1.4.13-.43-.35-.49-.98-.14-1.4 1.2-1.44 1.91-3.27 1.91-5.28 0-1.88-.63-3.61-1.69-5-.33-.44-.25-1.06.2-1.4" opacity={0.4} />
        <path d="M14.15 7.55c.43-.34 1.06-.25 1.4.18C16.45 8.91 17 10.4 17 12s-.54 3.09-1.45 4.27c-.34.44-.97.52-1.4.18-.44-.34-.52-.96-.19-1.4.65-.84 1.04-1.9 1.04-3.05s-.39-2.2-1.04-3.05c-.33-.44-.25-1.06.19-1.4" opacity={0.4} />
        <path fillRule="evenodd" d="M8.16 4.43C9.58 3 12 4 12 6.02v11.96c0 2-2.42 3.01-3.84 1.6l-3.5-3.5Q4.58 16 4.48 16H2.25c-1.16 0-2.12-.89-2.24-2.02L0 13.75v-3.5C0 9.01 1 8 2.25 8h2.23q.1 0 .18-.07zM10 6.02c0-.23-.27-.34-.43-.18l-3.5 3.5c-.42.42-1 .66-1.59.66H2.25c-.14 0-.25.11-.25.25v3.55q.06.18.25.2h2.23c.6 0 1.17.24 1.6.66l3.5 3.5c.15.16.42.04.42-.18z" clipRule="evenodd" />
    </IconBase>
  ))
);

SpeakerHighBoldDuotone.displayName = 'SpeakerHighBoldDuotone';

// Triple export pattern
export { SpeakerHighBoldDuotone, SpeakerHighBoldDuotone as SpeakerHighBoldDuotoneIcon, SpeakerHighBoldDuotone as SiSpeakerHighBoldDuotone };
export default SpeakerHighBoldDuotone;
export type { SpeakerHighBoldDuotoneProps };
