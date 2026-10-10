import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerFillDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.48 5.75c.24-.23.64-.07.64.27v11.96c0 .34-.4.5-.64.27l-3.5-3.5c-.4-.4-.93-.63-1.5-.63H7.25c-.2 0-.37-.16-.37-.37v-3.5c0-.2.16-.38.37-.38h2.23c.57 0 1.1-.22 1.5-.62z" opacity={.4} />
        <path fillRule="evenodd" d="M13.25 4.52c1.34-1.34 3.62-.4 3.63 1.5v11.96c0 1.9-2.3 2.84-3.63 1.5l-3.5-3.5q-.11-.1-.27-.1H7.25c-1.17 0-2.12-.96-2.12-2.13v-3.5c0-1.17.95-2.12 2.12-2.12h2.23q.16 0 .27-.11zm1.88 1.5c0-.34-.4-.5-.65-.27l-3.5 3.5c-.4.4-.93.63-1.5.63H7.25c-.2 0-.37.16-.37.37v3.5c0 .2.16.38.37.38h2.23c.57 0 1.1.22 1.5.62l3.5 3.5c.24.23.64.07.64-.27z" clipRule="evenodd" />
    </IconBase>
  ))
);

SpeakerFillDuotone.displayName = 'SpeakerFillDuotone';

// Triple export pattern
export { SpeakerFillDuotone, SpeakerFillDuotone as SpeakerFillDuotoneIcon, SpeakerFillDuotone as SiSpeakerFillDuotone };
export default SpeakerFillDuotone;
export type { SpeakerFillDuotoneProps };
