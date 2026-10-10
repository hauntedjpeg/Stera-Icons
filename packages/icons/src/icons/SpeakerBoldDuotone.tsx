import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerBoldDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.3 8.3c-.4.38-.4 1.02 0 1.4.23.25.56.34.87.28L10 10H7.25c-.14 0-.25.11-.25.25v3.5c0 .14.11.25.25.25H10q.1 0 .17.02c-.3-.06-.64.03-.88.27-.39.4-.39 1.03 0 1.42l.3.29H7.25C6.01 16 5 15 5 13.75v-3.5C5 9.01 6 8 7.25 8h2.34zM10.6 9.8q-.18.13-.4.18.2-.04.4-.18" opacity={0.4} />
        <path d="M13.16 4.43C14.58 3 17 4 17 6.02v11.96c0 2-2.42 3.01-3.84 1.6L9.29 15.7c-.39-.4-.39-1.03 0-1.42.4-.39 1.03-.39 1.42 0l3.86 3.87c.16.16.43.04.43-.18V6.02c0-.23-.27-.34-.43-.18l-3.86 3.87c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42z" />
    </IconBase>
  ))
);

SpeakerBoldDuotone.displayName = 'SpeakerBoldDuotone';

// Triple export pattern
export { SpeakerBoldDuotone, SpeakerBoldDuotone as SpeakerBoldDuotoneIcon, SpeakerBoldDuotone as SiSpeakerBoldDuotone };
export default SpeakerBoldDuotone;
export type { SpeakerBoldDuotoneProps };
