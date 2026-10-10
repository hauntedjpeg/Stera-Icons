import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type IdVBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const IdVBoldDuotone = memo(
  forwardRef<SVGSVGElement, IdVBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.2 2q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v8.4q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q4 17.43 4 16.2V7.8q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q8.57 2 9.8 2zM9.8 4c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C6 6.36 6 6.94 6 7.8v8.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V7.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18C15.64 4 15.06 4 14.2 4z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 10c2.07 0 3.75 1.68 3.75 3.75 0 .85-.28 1.63-.75 2.25 1.28.66 2.21 1.9 2.44 3.38q-.23.25-.53.4c-.16.08-.38.15-.82.18q-.26.02-.6.03c-.05-1.39-1.2-2.49-2.59-2.49h-1.8c-1.4 0-2.54 1.1-2.6 2.49q-.33 0-.59-.03c-.44-.03-.66-.1-.82-.18q-.3-.16-.53-.4C6.79 17.91 7.72 16.66 9 16c-.47-.62-.75-1.4-.75-2.25C8.25 11.68 9.93 10 12 10m0 2c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75S12.97 12 12 12" clipRule="evenodd" />
        <path d="M14.5 5.5c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

IdVBoldDuotone.displayName = 'IdVBoldDuotone';

// Triple export pattern
export { IdVBoldDuotone, IdVBoldDuotone as IdVBoldDuotoneIcon, IdVBoldDuotone as SiIdVBoldDuotone };
export default IdVBoldDuotone;
export type { IdVBoldDuotoneProps };
