import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UploadFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UploadFillDuotone = memo(
  forwardRef<SVGSVGElement, UploadFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.5 14.63c.48 0 .88.39.88.87v.2q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05H8.3q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05v-.2c0-.48.39-.87.87-.87s.88.39.88.87v.2c0 .85 0 1.44.03 1.9.04.45.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04h7.4c.85 0 1.44 0 1.9-.04s.69-.1.86-.2q.61-.32.93-.93c.1-.17.16-.41.2-.86.03-.46.04-1.05.04-1.9v-.2c0-.48.39-.87.87-.87" opacity={.4} />
        <path d="M12 2.63q.36 0 .62.25l5.5 5.5c.25.25.32.63.19.95-.14.33-.46.54-.81.54h-4.63v5.63c0 .48-.39.88-.87.88s-.88-.4-.88-.88V9.88H6.5c-.35 0-.67-.22-.8-.55-.14-.32-.07-.7.18-.95l5.5-5.5.06-.06q.25-.19.56-.2" />
    </IconBase>
  ))
);

UploadFillDuotone.displayName = 'UploadFillDuotone';

// Triple export pattern
export { UploadFillDuotone, UploadFillDuotone as UploadFillDuotoneIcon, UploadFillDuotone as SiUploadFillDuotone };
export default UploadFillDuotone;
export type { UploadFillDuotoneProps };
