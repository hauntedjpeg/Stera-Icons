import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitCompareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitCompareBoldDuotone = memo(
  forwardRef<SVGSVGElement, GitCompareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 1.5c1.93 0 3.5 1.57 3.5 3.5 0 1.59-1.05 2.92-2.5 3.35V16c0 2.2-1.8 4-4 4h-2.59l1.3 1.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-3-3q-.05-.03-.08-.1-.05-.06-.09-.13l-.03-.05-.05-.13-.03-.12L10 19q0-.12.03-.23l.01-.06.06-.14.06-.12.13-.16 3-3c.4-.39 1.03-.39 1.42 0 .39.4.39 1.03 0 1.42L13.4 18H16c1.1 0 2-.9 2-2V8.35C16.55 7.92 15.5 6.6 15.5 5c0-1.93 1.57-3.5 3.5-3.5m0 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M9.3 1.3c.38-.4 1.02-.4 1.4 0l3 3 .14.15.06.12.06.14.01.06q.03.1.03.23l-.03.24-.01.05-.06.14-.07.12-.04.06-.08.1-3 3c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42L10.6 6H8c-1.1 0-2 .9-2 2v7.65c1.45.43 2.5 1.76 2.5 3.35 0 1.93-1.57 3.5-3.5 3.5S1.5 20.93 1.5 19c0-1.59 1.05-2.92 2.5-3.35V8c0-2.2 1.8-4 4-4h2.59l-1.3-1.3c-.39-.38-.39-1.02 0-1.4M5 17.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GitCompareBoldDuotone.displayName = 'GitCompareBoldDuotone';

// Triple export pattern
export { GitCompareBoldDuotone, GitCompareBoldDuotone as GitCompareBoldDuotoneIcon, GitCompareBoldDuotone as SiGitCompareBoldDuotone };
export default GitCompareBoldDuotone;
export type { GitCompareBoldDuotoneProps };
