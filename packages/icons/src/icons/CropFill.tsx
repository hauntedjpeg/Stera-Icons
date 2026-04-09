import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CropFillProps = Omit<IconBaseProps, 'children'>;

const CropFill = memo(
  forwardRef<SVGSVGElement, CropFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="crop-fill" {...props}>
      <path fillRule="evenodd" d="M6 .75c.69 0 1.25.56 1.25 1.25v2.75h7.55q.82 0 1.42.03.61.03 1.26.32.92.5 1.42 1.42.29.64.32 1.26.04.6.03 1.42v7.55H22a1.25 1.25 0 1 1 0 2.5h-2.75V22a1.25 1.25 0 1 1-2.5 0v-2.75H9.2q-.81 0-1.42-.03a3 3 0 0 1-1.26-.32c-.6-.32-1.1-.81-1.42-1.42a3 3 0 0 1-.32-1.26q-.04-.6-.03-1.42V7.25H2a1.25 1.25 0 1 1 0-2.5h2.75V2c0-.69.56-1.25 1.25-1.25M7.25 14.8c0 .58 0 .94.02 1.21.02.26.06.32.06.33q.11.22.33.33s.07.04.33.06c.27.02.63.02 1.21.02h7.55V9.2c0-.58 0-.94-.02-1.21-.02-.26-.06-.32-.06-.33a1 1 0 0 0-.33-.33s-.07-.04-.33-.06a17 17 0 0 0-1.21-.02H7.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

CropFill.displayName = 'CropFill';

// Triple export pattern (lucide-react style)
export { CropFill, CropFill as CropFillIcon, CropFill as SiCropFill };
export default CropFill;
export type { CropFillProps };
