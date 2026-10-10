import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CropFillProps = Omit<IconBaseProps, 'children'>;

const CropFill = memo(
  forwardRef<SVGSVGElement, CropFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6 .75c.69 0 1.25.56 1.25 1.25v2.75h7.55q.82 0 1.42.03.61.03 1.26.32.92.5 1.42 1.42.29.64.32 1.26.04.6.03 1.42v7.55H22c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-2.75V22c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-2.75H9.2q-.81 0-1.42-.03c-.4-.03-.84-.11-1.26-.32-.6-.32-1.1-.81-1.42-1.42q-.29-.64-.32-1.26-.04-.6-.03-1.42V7.25H2C1.31 7.25.75 6.69.75 6S1.31 4.75 2 4.75h2.75V2c0-.69.56-1.25 1.25-1.25M7.25 14.8c0 .58 0 .94.02 1.21.02.26.06.32.06.33q.11.22.33.33s.07.04.33.06c.27.02.63.02 1.21.02h7.55V9.2c0-.58 0-.94-.02-1.21-.02-.26-.06-.32-.06-.33q-.11-.22-.33-.33s-.07-.04-.33-.06c-.27-.02-.63-.02-1.21-.02H7.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

CropFill.displayName = 'CropFill';

// Triple export pattern
export { CropFill, CropFill as CropFillIcon, CropFill as SiCropFill };
export default CropFill;
export type { CropFillProps };
