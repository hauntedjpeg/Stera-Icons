import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoolSFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CoolSFillDuotone = memo(
  forwardRef<SVGSVGElement, CoolSFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cool-s-fill-duotone" {...props}>
      <path d="M16.13 6.42v2.7h-2.77l-.48-.48V7a.88.88 0 0 0-1.76 0v2q.01.36.26.62l4.74 4.74v3.22L12 20.88l-4.12-3.3v-2.7h2.76l.48.48V17a.88.88 0 0 0 1.76 0v-2q-.01-.36-.26-.62L7.88 9.64V6.42L12 3.12z" opacity={.4} />
        <path fillRule="evenodd" d="M11.58 1.23c.3-.17.69-.14.97.09l5 4q.31.26.32.68v4c0 .48-.39.87-.87.87h-1.89l2.5 2.51q.25.26.27.62v4q-.02.42-.33.68l-5 4a.9.9 0 0 1-1.1 0l-5-4a.9.9 0 0 1-.33-.68v-4c0-.48.4-.88.88-.88h1.89l-2.5-2.5a1 1 0 0 1-.26-.62V6q.01-.42.32-.68l5-4zm-3.7 5.2v3.2l4.74 4.75q.24.26.26.62v2a.87.87 0 1 1-1.76 0v-1.64l-.48-.49H7.87v2.7l4.13 3.3 4.13-3.3v-3.2l-4.75-4.75a1 1 0 0 1-.26-.62V7a.88.88 0 0 1 1.76 0v1.64l.48.48h2.77v-2.7L12 3.12z" clipRule="evenodd" />
    </IconBase>
  ))
);

CoolSFillDuotone.displayName = 'CoolSFillDuotone';

// Triple export pattern (lucide-react style)
export { CoolSFillDuotone, CoolSFillDuotone as CoolSFillDuotoneIcon, CoolSFillDuotone as SiCoolSFillDuotone };
export default CoolSFillDuotone;
export type { CoolSFillDuotoneProps };
