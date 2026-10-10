import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CropBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CropBoldDuotone = memo(
  forwardRef<SVGSVGElement, CropBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 7v7.8c0 .58 0 .95.02 1.23.03.27.06.37.09.42q.15.3.44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02H17v2H9.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3q-.87-.44-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V7zM22 17c.55 0 1 .45 1 1s-.45 1-1 1h-3v-2zM6 1c.55 0 1 .45 1 1v3H5V2c0-.55.45-1 1-1" opacity={0.4} />
        <path d="M14.8 5q.81 0 1.4.03c.4.03.78.1 1.16.3.57.28 1.03.74 1.31 1.3.2.39.27.78.3 1.17q.04.59.03 1.4V22c0 .55-.45 1-1 1s-1-.45-1-1V9.2c0-.58 0-.95-.02-1.23-.03-.27-.06-.37-.09-.42q-.15-.3-.44-.44c-.05-.03-.15-.06-.42-.09C15.75 7 15.38 7 14.8 7H2c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

CropBoldDuotone.displayName = 'CropBoldDuotone';

// Triple export pattern
export { CropBoldDuotone, CropBoldDuotone as CropBoldDuotoneIcon, CropBoldDuotone as SiCropBoldDuotone };
export default CropBoldDuotone;
export type { CropBoldDuotoneProps };
