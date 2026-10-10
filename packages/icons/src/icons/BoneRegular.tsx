import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoneRegularProps = Omit<IconBaseProps, 'children'>;

const BoneRegular = memo(
  forwardRef<SVGSVGElement, BoneRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 3.23c1.3-1.3 3.42-1.3 4.72 0 .58.58.9 1.33.96 2.09.76.06 1.5.38 2.1.96 1.3 1.3 1.3 3.42 0 4.72-1.13 1.13-2.85 1.28-4.14.47l-5.17 5.17c.81 1.29.66 3.01-.47 4.13-1.3 1.3-3.41 1.3-4.72 0-.58-.58-.9-1.33-.96-2.09-.76-.06-1.5-.38-2.1-.96-1.3-1.3-1.3-3.42 0-4.72 1.13-1.13 2.85-1.28 4.14-.47l5.17-5.17c-.81-1.29-.66-3 .47-4.13m3.66 1.06c-.72-.72-1.88-.72-2.6 0s-.72 1.88 0 2.6c.29.3.29.77 0 1.06l-6.1 6.1c-.3.3-.77.3-1.07 0-.72-.71-1.88-.71-2.6 0-.72.73-.72 1.9 0 2.6.45.46 1.08.63 1.67.51.24-.05.5.03.68.2.17.18.25.44.2.68-.12.59.05 1.22.5 1.67.72.72 1.89.72 2.6 0s.72-1.88 0-2.6c-.29-.3-.29-.77 0-1.06l6.1-6.1c.3-.3.78-.3 1.07 0 .72.71 1.88.71 2.6 0 .72-.72.72-1.89 0-2.6-.45-.46-1.08-.63-1.67-.51-.24.05-.5-.03-.67-.2s-.26-.44-.2-.68c.1-.59-.06-1.22-.51-1.67" clipRule="evenodd" />
    </IconBase>
  ))
);

BoneRegular.displayName = 'BoneRegular';

// Triple export pattern
export { BoneRegular, BoneRegular as BoneRegularIcon, BoneRegular as SiBoneRegular };
export default BoneRegular;
export type { BoneRegularProps };
