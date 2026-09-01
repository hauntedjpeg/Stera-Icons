import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImageSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, ImageSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7-.04.45-.11.83l-3.46-3.45q-.29-.3-.53-.5a2 2 0 0 0-.64-.38q-.5-.15-1.02-.04l-.14.04a2 2 0 0 0-.64.38q-.24.2-.53.5l-.4.4q-.3.3-.43.4l-.06.06h-.05l-.07-.05c-.1-.08-.21-.2-.42-.4L9.75 11.5l-.53-.5a2 2 0 0 0-.64-.38q-.5-.15-1.02-.04l-.14.04a2 2 0 0 0-.64.38l-.53.5-3.62 3.62V9.9q-.01-1.64.05-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM15 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" opacity={.4} />
        <path d="M7.56 10.6q.52-.13 1.02.03.4.15.64.38l.53.5 3.07 3.07.49.46h.05l.06-.05.43-.4.4-.41q.29-.3.53-.5.24-.24.64-.38l.14-.04q.52-.12 1.02.04.4.14.64.38.24.2.53.5l3.48 3.48-.16.51q-.1.29-.23.54a5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13c-.44-.86-.51-1.87-.53-3.2v-.37l3.62-3.63.53-.5c.17-.14.37-.3.64-.38zM15 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

ImageSquareFillDuotone.displayName = 'ImageSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { ImageSquareFillDuotone, ImageSquareFillDuotone as ImageSquareFillDuotoneIcon, ImageSquareFillDuotone as SiImageSquareFillDuotone };
export default ImageSquareFillDuotone;
export type { ImageSquareFillDuotoneProps };
