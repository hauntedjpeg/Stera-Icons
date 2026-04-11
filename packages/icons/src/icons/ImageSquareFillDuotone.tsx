import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImageSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, ImageSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a7 7 0 0 1-.28 1.59l-.4-.4-3.21-3.22a2 2 0 0 0-2.81 0l-1.1 1.1c-.1.1-.24.1-.33 0L9.4 11.17a2 2 0 0 0-2.81 0L2.65 15.1q-.02-1.1-.02-2.61v-1c0-1.39 0-2.48.07-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zM15 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" opacity={.4} />
        <path d="M6.6 11.17a2 2 0 0 1 2.8 0l3.77 3.76c.09.1.24.1.33 0l1.1-1.1a2 2 0 0 1 2.8 0l3.22 3.22.4.4q-.12.38-.29.72c-.56 1.1-1.46 2-2.56 2.57q-1 .49-2.31.56c-.88.08-1.97.08-3.36.08h-1q-2.06.02-3.35-.08a8 8 0 0 1-1.52-.25 5 5 0 0 1-1.59-.8 6 6 0 0 1-1.9-2.36 6 6 0 0 1-.45-2.16l-.04-.62zM15 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

ImageSquareFillDuotone.displayName = 'ImageSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { ImageSquareFillDuotone, ImageSquareFillDuotone as ImageSquareFillDuotoneIcon, ImageSquareFillDuotone as SiImageSquareFillDuotone };
export default ImageSquareFillDuotone;
export type { ImageSquareFillDuotoneProps };
