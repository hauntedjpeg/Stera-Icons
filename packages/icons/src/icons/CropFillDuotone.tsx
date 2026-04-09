import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CropFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CropFillDuotone = memo(
  forwardRef<SVGSVGElement, CropFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="crop-fill-duotone" {...props}>
      <path d="M7.25 7.25v7.55c0 .58 0 .94.02 1.21.02.26.06.32.06.33q.11.22.33.33s.07.04.33.06c.27.02.63.02 1.21.02h7.55v2.5H9.2q-.81 0-1.42-.03a3 3 0 0 1-1.26-.32c-.6-.32-1.1-.81-1.42-1.42a3 3 0 0 1-.32-1.26q-.04-.6-.03-1.42V7.25zM22 16.75a1.25 1.25 0 1 1 0 2.5h-2.75v-2.5zM6 .75c.69 0 1.25.56 1.25 1.25v2.75h-2.5V2c0-.69.56-1.25 1.25-1.25" opacity={0.4} />
        <path d="M14.8 4.75q.82 0 1.42.03.61.03 1.26.32.92.5 1.42 1.42.29.64.32 1.26.04.6.03 1.42V22a1.25 1.25 0 1 1-2.5 0V9.2c0-.58 0-.94-.02-1.21-.02-.26-.06-.32-.06-.33a1 1 0 0 0-.33-.33s-.07-.04-.33-.06a17 17 0 0 0-1.21-.02H2a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

CropFillDuotone.displayName = 'CropFillDuotone';

// Triple export pattern (lucide-react style)
export { CropFillDuotone, CropFillDuotone as CropFillDuotoneIcon, CropFillDuotone as SiCropFillDuotone };
export default CropFillDuotone;
export type { CropFillDuotoneProps };
