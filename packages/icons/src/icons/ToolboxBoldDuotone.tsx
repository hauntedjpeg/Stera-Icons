import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToolboxBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToolboxBoldDuotone = memo(
  forwardRef<SVGSVGElement, ToolboxBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 12v2H9v-2z" opacity={0.4} />
        <path fillRule="evenodd" d="M16.2 6q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v3.4q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q2 16.43 2 15.2v-3.4q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q6.57 6 7.8 6zM7.8 8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C4 10.36 4 10.94 4 11.8v.2h3v2H4v1.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V14h-3v-2h3v-.2c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18C17.64 8 17.06 8 16.2 8z" clipRule="evenodd" opacity={0.4} />
        <path d="M8 10.5c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1M16 10.5c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1M14.42 2.5c1.12 0 2.07.82 2.22 1.93L16.87 6h-2.02l-.19-1.29c-.01-.12-.12-.21-.24-.21H9.58c-.12 0-.23.1-.24.21L9.15 6H7.13l.23-1.57c.15-1.1 1.1-1.93 2.22-1.93z" />
    </IconBase>
  ))
);

ToolboxBoldDuotone.displayName = 'ToolboxBoldDuotone';

// Triple export pattern
export { ToolboxBoldDuotone, ToolboxBoldDuotone as ToolboxBoldDuotoneIcon, ToolboxBoldDuotone as SiToolboxBoldDuotone };
export default ToolboxBoldDuotone;
export type { ToolboxBoldDuotoneProps };
