import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageSquareRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImageSquareRegularDuotone = memo(
  forwardRef<SVGSVGElement, ImageSquareRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.75q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v4.2q.02 1.64-.06 2.69-.06 1.05-.46 1.87c-.45.89-1.18 1.62-2.07 2.07-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H9.9q-1.64.02-2.69-.06-1.05-.06-1.87-.46c-.89-.45-1.62-1.18-2.07-2.07-.28-.55-.4-1.16-.46-1.87q-.07-1.04-.06-2.69V9.9q-.02-1.64.06-2.69.06-1.05.46-1.87c.45-.89 1.18-1.62 2.07-2.07.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-4.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v4.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h4.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57V9.9c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" opacity={.4} />
        <path d="M6.68 11.25c.73-.72 1.91-.72 2.64 0l3.76 3.77c.14.14.37.14.5 0l1.1-1.1c.73-.72 1.91-.72 2.64 0l2.4 2.4-.02.35c-.05.62-.15 1-.3 1.3l-.06.1-3.09-3.09c-.14-.14-.36-.14-.5 0l-1.1 1.1c-.73.72-1.9.72-2.63 0l-3.77-3.76c-.14-.14-.36-.14-.5 0L4.26 15.8l-.01-1.7v-.41zM15 7.25c.97 0 1.75.78 1.75 1.75s-.78 1.75-1.75 1.75-1.75-.78-1.75-1.75.78-1.75 1.75-1.75" />
    </IconBase>
  ))
);

ImageSquareRegularDuotone.displayName = 'ImageSquareRegularDuotone';

// Triple export pattern
export { ImageSquareRegularDuotone, ImageSquareRegularDuotone as ImageSquareRegularDuotoneIcon, ImageSquareRegularDuotone as SiImageSquareRegularDuotone };
export default ImageSquareRegularDuotone;
export type { ImageSquareRegularDuotoneProps };
