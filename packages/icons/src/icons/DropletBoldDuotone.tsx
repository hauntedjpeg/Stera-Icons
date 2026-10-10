import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DropletBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DropletBoldDuotone = memo(
  forwardRef<SVGSVGElement, DropletBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12.64 2.23.08.07.24.2.82.74c.67.63 1.57 1.53 2.48 2.59s1.83 2.29 2.53 3.6c.7 1.3 1.21 2.75 1.21 4.2 0 4.58-3.53 8.37-8 8.37v-2c3.27 0 6-2.8 6-6.36 0-1-.36-2.11-.98-3.27-.6-1.14-1.43-2.25-2.28-3.24s-1.7-1.83-2.33-2.43L12 4.33l.35-.32.27-.22.01-.01c.43-.36.5-.99.14-1.41q-.06-.08-.14-.14M11.61 2.08q-.13.05-.24.15h-.01q.12-.09.25-.15M12.11 2q.29.04.52.23-.23-.2-.52-.22" opacity={0.4} />
        <path d="M11.37 2.23c.42-.35 1.05-.29 1.4.14.35.42.29 1.05-.14 1.4l-.01.02-.27.22-.76.7c-.64.59-1.49 1.43-2.33 2.42s-1.67 2.1-2.28 3.25C6.36 11.53 6 12.64 6 13.64 6 17.2 8.73 20 12 20v2c-4.47 0-8-3.8-8-8.36 0-1.46.51-2.9 1.21-4.2.7-1.32 1.63-2.56 2.53-3.61.9-1.06 1.8-1.96 2.48-2.59l.82-.74.24-.2.08-.07" />
    </IconBase>
  ))
);

DropletBoldDuotone.displayName = 'DropletBoldDuotone';

// Triple export pattern
export { DropletBoldDuotone, DropletBoldDuotone as DropletBoldDuotoneIcon, DropletBoldDuotone as SiDropletBoldDuotone };
export default DropletBoldDuotone;
export type { DropletBoldDuotoneProps };
