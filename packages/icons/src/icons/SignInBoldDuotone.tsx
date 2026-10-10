import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignInBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignInBoldDuotone = memo(
  forwardRef<SVGSVGElement, SignInBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.2 2q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v8.4q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04h-4.4q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q6 17.43 6 16.2V16c0-.55.45-1 1-1s1 .45 1 1v.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V7.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18C17.64 4 17.06 4 16.2 4h-4.4c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C8 6.36 8 6.94 8 7.8V8c0 .55-.45 1-1 1s-1-.45-1-1v-.2q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q10.57 2 11.8 2z" opacity={.4} />
        <path d="M11.8 7.8c.38-.4 1.02-.4 1.4 0l3.5 3.5q.3.28.3.7t-.3.7l-3.5 3.5c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l1.79-1.8H2c-.55 0-1-.45-1-1s.45-1 1-1h11.59l-1.8-1.8c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

SignInBoldDuotone.displayName = 'SignInBoldDuotone';

// Triple export pattern
export { SignInBoldDuotone, SignInBoldDuotone as SignInBoldDuotoneIcon, SignInBoldDuotone as SiSignInBoldDuotone };
export default SignInBoldDuotone;
export type { SignInBoldDuotoneProps };
