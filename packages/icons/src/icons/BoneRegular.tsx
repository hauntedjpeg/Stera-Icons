import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoneRegularProps = Omit<IconBaseProps, 'children'>;

const BoneRegular = memo(
  forwardRef<SVGSVGElement, BoneRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 3.23a3.34 3.34 0 0 1 5.68 2.09 3.34 3.34 0 1 1-2.04 6.16l-5.17 5.16a3.34 3.34 0 1 1-6.15 2.04 3.34 3.34 0 1 1 2.05-6.16l5.16-5.16A3.34 3.34 0 0 1 13 3.23m3.66 1.06a1.84 1.84 0 0 0-2.6 2.6c.29.3.29.77 0 1.06l-6.1 6.1c-.3.3-.77.3-1.07 0a1.84 1.84 0 1 0-.93 3.11.75.75 0 0 1 .88.88 1.84 1.84 0 1 0 3.1-.93.75.75 0 0 1 0-1.06l6.1-6.1c.3-.3.78-.3 1.07 0a1.84 1.84 0 1 0 .93-3.11.75.75 0 0 1-.88-.88 1.8 1.8 0 0 0-.5-1.67" clipRule="evenodd" />
    </IconBase>
  ))
);

BoneRegular.displayName = 'BoneRegular';

// Triple export pattern (lucide-react style)
export { BoneRegular, BoneRegular as BoneRegularIcon, BoneRegular as SiBoneRegular };
export default BoneRegular;
export type { BoneRegularProps };
