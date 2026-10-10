import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CapsLockBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CapsLockBoldDuotone = memo(
  forwardRef<SVGSVGElement, CapsLockBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.75 17c1.24 0 2.25 1 2.25 2.25v1.5c0 1.24-1 2.25-2.25 2.25h-5.5C8.01 23 7 22 7 20.75v-1.5C7 18.01 8 17 9.25 17zm-5.5 2q-.23.02-.25.25v1.5q.02.23.25.25h5.5q.23-.02.25-.25v-1.5q-.02-.23-.25-.25z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M10.4 1.68c.89-.88 2.31-.88 3.2 0l8.25 8.26c.95.94.28 2.56-1.06 2.56H17v1.25c0 1.24-1 2.25-2.25 2.25h-5.5C8.01 16 7 15 7 13.75V12.5H3.2c-1.33 0-2-1.62-1.05-2.56zm1.78 1.41c-.1-.1-.26-.1-.36 0l-7.4 7.41H8c.55 0 1 .45 1 1v2.25q.02.23.25.25h5.5q.23-.02.25-.25V11.5c0-.55.45-1 1-1h3.59z" clipRule="evenodd" />
    </IconBase>
  ))
);

CapsLockBoldDuotone.displayName = 'CapsLockBoldDuotone';

// Triple export pattern
export { CapsLockBoldDuotone, CapsLockBoldDuotone as CapsLockBoldDuotoneIcon, CapsLockBoldDuotone as SiCapsLockBoldDuotone };
export default CapsLockBoldDuotone;
export type { CapsLockBoldDuotoneProps };
