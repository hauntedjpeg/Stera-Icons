import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignOutBoldProps = Omit<IconBaseProps, 'children'>;

const SignOutBold = memo(
  forwardRef<SVGSVGElement, SignOutBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m11.33 2 .92.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05V8c0 .55-.45 1-1 1s-1-.45-1-1v-.2c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18l-.8-.04H6.8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C3 6.36 3 6.94 3 7.8v8.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h3.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V16c0-.55.45-1 1-1s1 .45 1 1v.2q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q1 17.43 1 16.2V7.8q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q5.57 2 6.8 2h4.53" />
        <path d="M18.3 7.8c.38-.4 1.02-.4 1.4 0l3.5 3.5q.3.28.3.7t-.3.7l-3.5 3.5c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l1.79-1.8H8.5c-.55 0-1-.45-1-1s.45-1 1-1h11.59l-1.8-1.8c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

SignOutBold.displayName = 'SignOutBold';

// Triple export pattern
export { SignOutBold, SignOutBold as SignOutBoldIcon, SignOutBold as SiSignOutBold };
export default SignOutBold;
export type { SignOutBoldProps };
