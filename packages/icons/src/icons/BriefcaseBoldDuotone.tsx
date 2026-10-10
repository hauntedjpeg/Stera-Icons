import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BriefcaseBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BriefcaseBoldDuotone = memo(
  forwardRef<SVGSVGElement, BriefcaseBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.2 6q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q2 15.43 2 14.2v-2.4q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q6.57 6 7.8 6zM7.8 8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C4 10.36 4 10.94 4 11.8v2.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-2.4c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18C17.64 8 17.06 8 16.2 8z" clipRule="evenodd" opacity={.4} />
        <path d="M19.98 10.3q.02.56.02 1.5v.6q-.8.25-1.89.56c-1.08.3-2.35.61-3.61.81v.73c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-.73c-1.26-.2-2.53-.5-3.61-.8q-1.1-.3-1.89-.58v-.59l.01-1.5.2.06c.56.19 1.33.43 2.21.68 1.8.5 3.93.96 5.58.96s3.79-.47 5.58-.96c.88-.25 1.65-.5 2.2-.68zM13.78 2.75q.45 0 .8.02.27.01.57.1l.2.08.15.07q.5.28.81.75.23.38.3.74.08.35.14.78l.1.71h-2.02l-.06-.4-.1-.63-.04-.11q-.03-.06-.1-.09h-.1q-.19-.02-.65-.02h-3.56l-.64.01-.12.01q-.06.03-.1.09.02-.04-.02.1c-.04.14-.06.32-.11.64l-.06.4H7.14l.11-.7q.06-.45.14-.79.07-.36.3-.74.36-.55.95-.82l.2-.08q.3-.09.58-.1.35-.03.8-.02z" />
    </IconBase>
  ))
);

BriefcaseBoldDuotone.displayName = 'BriefcaseBoldDuotone';

// Triple export pattern
export { BriefcaseBoldDuotone, BriefcaseBoldDuotone as BriefcaseBoldDuotoneIcon, BriefcaseBoldDuotone as SiBriefcaseBoldDuotone };
export default BriefcaseBoldDuotone;
export type { BriefcaseBoldDuotoneProps };
