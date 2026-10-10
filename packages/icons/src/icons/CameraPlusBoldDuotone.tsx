import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraPlusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CameraPlusBoldDuotone = memo(
  forwardRef<SVGSVGElement, CameraPlusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.74 4q.45-.01.89.1.46.15.85.45c.31.26.53.6.76.93l.7 1.02.09.12h.14c.72 0 1.24 0 1.69.1 1.52.33 2.71 1.52 3.05 3.04.1.46.09.98.09 1.7v2.74q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q2 15.43 2 14.2v-2.75c0-.71 0-1.23.1-1.69.33-1.52 1.52-2.7 3.04-3.04.45-.1.97-.1 1.69-.1h.14l.09-.12.7-1.02c.23-.33.45-.67.76-.93q.38-.3.85-.44c.3-.1.6-.1.9-.11zm-3.18 2c-.52 0-.58.01-.61.02q-.1.03-.17.09c-.03.02-.07.07-.37.5l-.7 1.03-.25.33q-.5.53-1.22.64-.24.02-.41.02c-.82 0-1.07 0-1.26.04-.76.17-1.36.76-1.52 1.53-.04.18-.05.43-.05 1.25v2.75c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-2.75c0-.82 0-1.07-.05-1.25-.16-.77-.76-1.36-1.52-1.53-.19-.04-.44-.04-1.26-.04q-.18 0-.41-.02-.72-.12-1.22-.64-.15-.19-.24-.33l-.71-1.03c-.3-.43-.34-.48-.37-.5q-.07-.06-.17-.09c-.03-.01-.1-.02-.61-.02z" clipRule="evenodd" opacity={.4} />
        <path d="M12 8.5c.55 0 1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

CameraPlusBoldDuotone.displayName = 'CameraPlusBoldDuotone';

// Triple export pattern
export { CameraPlusBoldDuotone, CameraPlusBoldDuotone as CameraPlusBoldDuotoneIcon, CameraPlusBoldDuotone as SiCameraPlusBoldDuotone };
export default CameraPlusBoldDuotone;
export type { CameraPlusBoldDuotoneProps };
