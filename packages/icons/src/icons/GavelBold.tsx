import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GavelBoldProps = Omit<IconBaseProps, 'children'>;

const GavelBold = memo(
  forwardRef<SVGSVGElement, GavelBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.49 3c.78-.78 2.04-.78 2.82 0l4.25 4.24c.78.78.78 2.05 0 2.83l-.7.7c-.53.53-1.27.7-1.94.52l-.54.55 5.3 5.3c.98.98.98 2.56 0 3.54-.98.97-2.56.97-3.54 0l-5.3-5.3-.55.54c.18.67.01 1.4-.51 1.93l-.7.7c-.79.79-2.06.79-2.84 0L3 14.32c-.78-.78-.78-2.04 0-2.82l.7-.71c.53-.52 1.27-.7 1.94-.52l4.62-4.62c-.18-.67 0-1.4.52-1.93zm1.76 10.96 5.3 5.3c.2.2.52.2.71 0 .2-.2.2-.5 0-.7l-5.3-5.3zM4.41 12.9l4.25 4.24.7-.7-4.24-4.25zm2.83-1.41 2.83 2.82 4.24-4.24-2.82-2.83zm4.95-6.37 4.25 4.24.7-.7L12.9 4.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

GavelBold.displayName = 'GavelBold';

// Triple export pattern
export { GavelBold, GavelBold as GavelBoldIcon, GavelBold as SiGavelBold };
export default GavelBold;
export type { GavelBoldProps };
