import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignOutAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignOutAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, SignOutAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 1c.87 0 1.5 0 2.04.14 1.38.37 2.45 1.44 2.82 2.82.15.55.14 1.17.14 2.04 0 .55-.45 1-1 1s-1-.45-1-1c0-1 0-1.3-.07-1.52-.18-.69-.72-1.23-1.41-1.41C17.3 3 16.99 3 16 3H8.8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C5 5.36 5 5.94 5 6.8v10.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04H16c1 0 1.3 0 1.52-.07.69-.18 1.23-.72 1.41-1.41.06-.22.07-.53.07-1.52 0-.55.45-1 1-1s1 .45 1 1c0 .87 0 1.5-.14 2.04-.37 1.38-1.44 2.45-2.82 2.82-.55.15-1.17.14-2.04.14H8.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q3 18.43 3 17.2V6.8q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q7.57 1 8.8 1z" opacity={.4} />
        <path d="M14.3 6.3c.38-.4 1.02-.4 1.4 0l5 5c.4.38.4 1.02 0 1.4l-5 5c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l3.29-3.3H8.5c-.55 0-1-.45-1-1s.45-1 1-1h9.09l-3.3-3.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

SignOutAltBoldDuotone.displayName = 'SignOutAltBoldDuotone';

// Triple export pattern
export { SignOutAltBoldDuotone, SignOutAltBoldDuotone as SignOutAltBoldDuotoneIcon, SignOutAltBoldDuotone as SiSignOutAltBoldDuotone };
export default SignOutAltBoldDuotone;
export type { SignOutAltBoldDuotoneProps };
