import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MacWindowCursorBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MacWindowCursorBoldDuotone = memo(
  forwardRef<SVGSVGElement, MacWindowCursorBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.2 4q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05V11c0 .55-.45 1-1 1s-1-.45-1-1V9.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18C17.64 6 17.06 6 16.2 6H7.8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C4 8.36 4 8.94 4 9.8v4.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04H13c.55 0 1 .45 1 1s-.45 1-1 1H7.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q2 15.43 2 14.2V9.8q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4z" opacity={0.4} />
        <path d="M6.75 7.5C7.44 7.5 8 8.06 8 8.75S7.44 10 6.75 10 5.5 9.44 5.5 8.75 6.06 7.5 6.75 7.5M10.25 7.5c.69 0 1.25.56 1.25 1.25S10.94 10 10.25 10 9 9.44 9 8.75s.56-1.25 1.25-1.25M13.75 7.5c.69 0 1.25.56 1.25 1.25S14.44 10 13.75 10s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25" opacity={0.4} />
        <path fillRule="evenodd" d="M13.33 13.21c-.38-1.13.65-2.2 1.78-1.92l.1.04 6.77 2.25c1.39.46 1.35 2.44-.05 2.85l-2.7.8-.8 2.7c-.41 1.4-2.39 1.44-2.85.05zm3.64 4.6.49-1.67.04-.12q.2-.42.64-.56l1.67-.5-4.27-1.42z" clipRule="evenodd" />
    </IconBase>
  ))
);

MacWindowCursorBoldDuotone.displayName = 'MacWindowCursorBoldDuotone';

// Triple export pattern
export { MacWindowCursorBoldDuotone, MacWindowCursorBoldDuotone as MacWindowCursorBoldDuotoneIcon, MacWindowCursorBoldDuotone as SiMacWindowCursorBoldDuotone };
export default MacWindowCursorBoldDuotone;
export type { MacWindowCursorBoldDuotoneProps };
