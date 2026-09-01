import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoneRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoneRegularDuotone = memo(
  forwardRef<SVGSVGElement, BoneRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.85 17.91v.13a1.84 1.84 0 1 0 3.1-.93.75.75 0 0 1 0-1.06l6.1-6.1.11-.1a.75.75 0 0 1 .95.1 1.84 1.84 0 1 0 .93-3.1h-.17c.36.01.69-.23.76-.6q.1-.46.05-.93a3.34 3.34 0 1 1-2.05 6.16l-5.16 5.16a3.34 3.34 0 1 1-6.15 2.04q.47.04.93-.05c.36-.07.6-.38.6-.72" opacity={.4} />
        <path d="M13 3.23a3.34 3.34 0 0 1 5.63 3.02.75.75 0 0 1-1.47-.3 1.84 1.84 0 1 0-3.1.94c.29.3.29.77 0 1.06l-6.1 6.1c-.3.3-.77.3-1.07 0a1.84 1.84 0 1 0-.93 3.11.75.75 0 0 1 .3 1.47 3.34 3.34 0 1 1 1.1-6.1l5.17-5.17A3.34 3.34 0 0 1 13 3.23" />
    </IconBase>
  ))
);

BoneRegularDuotone.displayName = 'BoneRegularDuotone';

// Triple export pattern (lucide-react style)
export { BoneRegularDuotone, BoneRegularDuotone as BoneRegularDuotoneIcon, BoneRegularDuotone as SiBoneRegularDuotone };
export default BoneRegularDuotone;
export type { BoneRegularDuotoneProps };
