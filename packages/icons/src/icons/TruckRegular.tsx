import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TruckRegularProps = Omit<IconBaseProps, 'children'>;

const TruckRegular = memo(
  forwardRef<SVGSVGElement, TruckRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3.75c1.52 0 2.75 1.23 2.75 2.75v.25h2.29c.47 0 .94.17 1.3.48l2.45 2.1c.6.52.96 1.29.96 2.09v3.83c0 1.1-.9 2-2 2h-.51c-.13 1.68-1.53 3-3.24 3s-3.11-1.32-3.24-3h-2.52c-.13 1.68-1.53 3-3.24 3-1.8 0-3.25-1.46-3.25-3.25v-.05c-.89-.45-1.5-1.38-1.5-2.45v-8c0-1.52 1.23-2.75 2.75-2.75zm-5 11.5c-.83 0-1.53.58-1.7 1.37q-.05.18-.05.38c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75q0-.18-.04-.35c-.16-.8-.86-1.4-1.71-1.4m9 0c-.57 0-1.08.27-1.4.7q-.23.3-.31.7-.04.17-.04.35c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75q0-.18-.04-.35c-.16-.8-.86-1.4-1.71-1.4m-11-10c-.69 0-1.25.56-1.25 1.25v8c0 .37.16.7.4.92.56-1 1.63-1.67 2.85-1.67 1.35 0 2.5.83 3 2h3q.1-.25.25-.48V6.5c0-.69-.56-1.25-1.25-1.25zM14.75 14q.57-.25 1.25-.25c1.35 0 2.5.83 3 2h.75c.28 0 .5-.22.5-.5v-3.83q-.01-.57-.44-.95l-2.45-2.1q-.14-.12-.32-.12h-2.29z" clipRule="evenodd" />
    </IconBase>
  ))
);

TruckRegular.displayName = 'TruckRegular';

// Triple export pattern
export { TruckRegular, TruckRegular as TruckRegularIcon, TruckRegular as SiTruckRegular };
export default TruckRegular;
export type { TruckRegularProps };
