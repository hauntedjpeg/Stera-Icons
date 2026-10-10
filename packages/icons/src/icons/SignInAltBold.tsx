import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignInAltBoldProps = Omit<IconBaseProps, 'children'>;

const SignInAltBold = memo(
  forwardRef<SVGSVGElement, SignInAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.2 1q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v10.4q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q3 18.43 3 17.2v-.76c0-.55.45-1 1-1s1 .45 1 1v.76c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V6.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18C16.64 3 16.06 3 15.2 3H8.8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C5 5.36 5 5.94 5 6.8v.76c0 .55-.45 1-1 1s-1-.45-1-1V6.8q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q7.57 1 8.8 1z" />
        <path d="M9.8 6.3c.38-.4 1.02-.4 1.4 0l5 5c.4.38.4 1.02 0 1.4l-5 5c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l3.29-3.3H3.5c-.55 0-1-.45-1-1s.45-1 1-1h9.59l-3.3-3.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

SignInAltBold.displayName = 'SignInAltBold';

// Triple export pattern
export { SignInAltBold, SignInAltBold as SignInAltBoldIcon, SignInAltBold as SiSignInAltBold };
export default SignInAltBold;
export type { SignInAltBoldProps };
