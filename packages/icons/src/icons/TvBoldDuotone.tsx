import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TvBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TvBoldDuotone = memo(
  forwardRef<SVGSVGElement, TvBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q2 13.43 2 12.2V9.8q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM7.8 6c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C4 8.36 4 8.94 4 9.8v2.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V9.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18C17.64 6 17.06 6 16.2 6z" clipRule="evenodd" opacity={.4} />
        <path d="M4.69 17.77q.5.15 1.06.19l.97.04-.77 2.32c-.18.52-.74.8-1.27.63-.52-.18-.8-.74-.63-1.27zM19.95 19.68c.17.53-.11 1.1-.63 1.27-.53.17-1.1-.11-1.27-.63L17.28 18l.97-.04q.55-.04 1.06-.2z" />
    </IconBase>
  ))
);

TvBoldDuotone.displayName = 'TvBoldDuotone';

// Triple export pattern
export { TvBoldDuotone, TvBoldDuotone as TvBoldDuotoneIcon, TvBoldDuotone as SiTvBoldDuotone };
export default TvBoldDuotone;
export type { TvBoldDuotoneProps };
