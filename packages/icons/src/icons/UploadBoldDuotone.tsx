import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UploadBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UploadBoldDuotone = memo(
  forwardRef<SVGSVGElement, UploadBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.5 14.5c.55 0 1 .45 1 1v.2q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.3q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57q-.05-.82-.04-2.05v-.2c0-.55.45-1 1-1s1 .45 1 1v.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h7.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-.2c0-.55.45-1 1-1" opacity={.4} />
        <path d="M12 2.5q.42 0 .7.3l5.5 5.5c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L13 5.92v9.59c0 .55-.45 1-1 1s-1-.45-1-1V5.91l-3.8 3.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l5.5-5.5.07-.06q.27-.23.63-.23" />
    </IconBase>
  ))
);

UploadBoldDuotone.displayName = 'UploadBoldDuotone';

// Triple export pattern
export { UploadBoldDuotone, UploadBoldDuotone as UploadBoldDuotoneIcon, UploadBoldDuotone as SiUploadBoldDuotone };
export default UploadBoldDuotone;
export type { UploadBoldDuotoneProps };
