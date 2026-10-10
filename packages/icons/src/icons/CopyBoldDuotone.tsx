import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CopyBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CopyBoldDuotone = memo(
  forwardRef<SVGSVGElement, CopyBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57Q17 6.29 17 7h-2q0-.66-.04-1.09c-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C12.64 4 12.06 4 11.2 4H7.8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 4 7.8v3.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18Q6.34 15 7 15v2q-.7 0-1.25-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 12.43 2 11.2V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 2 7.8 2z" opacity={.4} />
        <path fillRule="evenodd" d="M16.2 7q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v3.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04h-3.4q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q7 17.43 7 16.2v-3.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q11.57 7 12.8 7zm-3.4 2c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82C9 11.36 9 11.94 9 12.8v3.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h3.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-3.4c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C17.64 9 17.06 9 16.2 9z" clipRule="evenodd" />
    </IconBase>
  ))
);

CopyBoldDuotone.displayName = 'CopyBoldDuotone';

// Triple export pattern
export { CopyBoldDuotone, CopyBoldDuotone as CopyBoldDuotoneIcon, CopyBoldDuotone as SiCopyBoldDuotone };
export default CopyBoldDuotone;
export type { CopyBoldDuotoneProps };
