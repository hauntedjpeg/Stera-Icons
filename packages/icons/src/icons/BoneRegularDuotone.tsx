import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoneRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoneRegularDuotone = memo(
  forwardRef<SVGSVGElement, BoneRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.85 17.91v.13c-.13.6.04 1.22.5 1.67.71.72 1.87.72 2.6 0 .71-.72.71-1.88 0-2.6-.3-.3-.3-.77 0-1.06l6.1-6.1.11-.1q.2-.12.42-.13.31 0 .53.22c.72.72 1.88.72 2.6 0 .72-.71.72-1.88 0-2.6-.45-.45-1.08-.62-1.67-.5q-.08.02-.17.01c.36.01.69-.23.76-.6q.1-.46.05-.93c.76.06 1.5.38 2.1.96 1.3 1.3 1.3 3.42 0 4.72-1.13 1.13-2.85 1.28-4.14.47l-5.17 5.17c.81 1.29.66 3.01-.47 4.13-1.3 1.3-3.41 1.3-4.72 0-.58-.58-.9-1.33-.96-2.09q.47.04.93-.05c.36-.07.6-.38.6-.72" opacity={.4} />
        <path d="M13 3.23c1.3-1.3 3.42-1.3 4.72 0 .82.82 1.12 1.97.91 3.02-.08.4-.48.67-.88.59s-.67-.48-.59-.88c.12-.59-.05-1.22-.5-1.67-.72-.72-1.88-.72-2.6 0s-.72 1.88 0 2.6c.29.3.29.77 0 1.06l-6.1 6.1c-.3.3-.77.3-1.07 0-.72-.71-1.88-.71-2.6 0-.72.73-.72 1.9 0 2.6.45.46 1.08.63 1.67.51.4-.08.8.18.88.59s-.18.8-.59.88c-1.05.21-2.2-.09-3.02-.91-1.3-1.3-1.3-3.42 0-4.72 1.12-1.13 2.84-1.28 4.13-.47l5.17-5.17c-.81-1.29-.66-3 .47-4.13" />
    </IconBase>
  ))
);

BoneRegularDuotone.displayName = 'BoneRegularDuotone';

// Triple export pattern
export { BoneRegularDuotone, BoneRegularDuotone as BoneRegularDuotoneIcon, BoneRegularDuotone as SiBoneRegularDuotone };
export default BoneRegularDuotone;
export type { BoneRegularDuotoneProps };
