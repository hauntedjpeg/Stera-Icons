import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CropBoldProps = Omit<IconBaseProps, 'children'>;

const CropBold = memo(
  forwardRef<SVGSVGElement, CropBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6 1c.55 0 1 .45 1 1v3h7.8q.81 0 1.4.03c.4.03.78.1 1.16.3.57.28 1.03.74 1.31 1.3.2.39.27.78.3 1.17q.04.59.03 1.4V17h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H9.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3q-.87-.44-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V7H2c-.55 0-1-.45-1-1s.45-1 1-1h3V2c0-.55.45-1 1-1m1 13.8c0 .58 0 .95.02 1.23.03.27.06.37.09.42q.15.3.44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02H17V9.2c0-.58 0-.95-.02-1.23-.03-.27-.06-.37-.09-.42q-.15-.3-.44-.44c-.05-.03-.15-.06-.42-.09C15.75 7 15.38 7 14.8 7H7z" clipRule="evenodd" />
    </IconBase>
  ))
);

CropBold.displayName = 'CropBold';

// Triple export pattern
export { CropBold, CropBold as CropBoldIcon, CropBold as SiCropBold };
export default CropBold;
export type { CropBoldProps };
