import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LotusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LotusFillDuotone = memo(
  forwardRef<SVGSVGElement, LotusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.13 10.87V12c0 3.9-3.13 7.06-7.02 7.12l.85-.84.32-.34.04-.04.29-.35.03-.04q.15-.18.28-.37l.01-.02.26-.37.02-.04a9 9 0 0 0 1.32-5.4 7 7 0 0 1 2.47-.44zM4 10.87a7 7 0 0 1 2.47.45 9 9 0 0 0 1.32 5.4l.02.03.25.36.04.06.25.33.06.07.27.33.04.04.32.34.84.84a7.1 7.1 0 0 1-7-7.12v-1.13zM13.72 6.96a7 7 0 0 1 2 3.93 7.1 7.1 0 0 1-2 6.15L12 18.76l-1.72-1.72q-.31-.32-.58-.66a7.1 7.1 0 0 1 .58-9.42L12 5.24zM4.87 4.7c.25-.11.54-.1.78.03l2.89 1.54h-.01l-.05.07a9 9 0 0 0-1.7 3.23A9 9 0 0 0 4 9.12h-.42l.8-3.8.03-.1a1 1 0 0 1 .46-.51M18.35 4.73a.88.88 0 0 1 1.27.59l.8 3.8H20a9 9 0 0 0-2.78.45 9 9 0 0 0-1.7-3.23l-.05-.06v-.01z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.45 3.32a.9.9 0 0 1 1.17.06l2.34 2.34a9 9 0 0 1 2.26 3.85A9 9 0 0 1 20 9.13h2a.9.9 0 0 1 .88.87v2c0 4.9-3.98 8.88-8.88 8.88h-4A8.87 8.87 0 0 1 1.13 12v-2A.9.9 0 0 1 2 9.13h2a9 9 0 0 1 2.78.44 9 9 0 0 1 2.26-3.85l2.34-2.34zm8.27 7.56a7 7 0 0 0-2.19.43 9 9 0 0 1-1.32 5.4l-.02.04-.26.37v.02l-.3.37-.02.04-.29.35-.04.04q-.14.17-.32.34l-.85.84A7.1 7.1 0 0 0 21.13 12v-1.12h-1.41M2.88 12c0 3.9 3.12 7.06 7 7.12l-.84-.84-.32-.34-.04-.04-.27-.33-.06-.07q-.13-.16-.25-.33l-.04-.06-.25-.36-.02-.04a9 9 0 0 1-1.32-5.4A7 7 0 0 0 4 10.88H2.88zm7.4-5.04a7 7 0 0 0-2 3.94 7.1 7.1 0 0 0 2 6.14L12 18.76l1.72-1.72a7.1 7.1 0 0 0 0-10.08L12 5.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

LotusFillDuotone.displayName = 'LotusFillDuotone';

// Triple export pattern (lucide-react style)
export { LotusFillDuotone, LotusFillDuotone as LotusFillDuotoneIcon, LotusFillDuotone as SiLotusFillDuotone };
export default LotusFillDuotone;
export type { LotusFillDuotoneProps };
