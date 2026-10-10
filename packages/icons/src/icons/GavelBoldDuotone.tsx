import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GavelBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GavelBoldDuotone = memo(
  forwardRef<SVGSVGElement, GavelBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.26 5.64q.13.5.52.9l.7.7-4.24 4.25 2.83 2.82 4.24-4.24.71.7q.4.4.9.52l-.54.55 5.3 5.3c.97.98.97 2.56 0 3.54-.98.97-2.56.97-3.54 0l-5.3-5.3-.55.54q-.12-.5-.51-.9l-4.24-4.24q-.4-.39-.9-.52zm3 8.32 5.3 5.3c.2.2.51.2.7 0 .2-.2.2-.5 0-.7l-5.3-5.3z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M3.7 10.78c.79-.78 2.05-.78 2.83 0l4.25 4.24c.78.78.78 2.05 0 2.83l-.7.7c-.79.79-2.06.79-2.84 0L3 14.32c-.78-.78-.78-2.04 0-2.82zm.71 2.12 4.25 4.24.7-.7-4.24-4.25zM11.49 3c.78-.78 2.04-.78 2.82 0l4.25 4.24c.78.78.78 2.05 0 2.83l-.71.7c-.78.79-2.05.79-2.83 0l-4.24-4.23c-.78-.79-.78-2.05 0-2.83zm.7 2.12 4.25 4.24.7-.7L12.9 4.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

GavelBoldDuotone.displayName = 'GavelBoldDuotone';

// Triple export pattern
export { GavelBoldDuotone, GavelBoldDuotone as GavelBoldDuotoneIcon, GavelBoldDuotone as SiGavelBoldDuotone };
export default GavelBoldDuotone;
export type { GavelBoldDuotoneProps };
