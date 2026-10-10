import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TruckBoldProps = Omit<IconBaseProps, 'children'>;

const TruckBold = memo(
  forwardRef<SVGSVGElement, TruckBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3.5c1.66 0 3 1.34 3 3h2.04c.53 0 1.05.2 1.46.54l2.45 2.1c.67.57 1.05 1.4 1.05 2.28v3.83c0 1.24-1 2.25-2.25 2.25h-.29c-.24 1.7-1.7 3-3.46 3s-3.22-1.3-3.46-3h-2.08c-.24 1.7-1.7 3-3.46 3-1.9 0-3.45-1.52-3.5-3.4-.9-.52-1.5-1.49-1.5-2.6v-8c0-1.66 1.34-3 3-3zm-5 12c-.71 0-1.31.5-1.46 1.17q-.04.16-.04.33c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5l-.03-.3c-.14-.68-.75-1.2-1.47-1.2m9 0c-.49 0-.92.23-1.2.6q-.2.27-.27.6l-.03.3c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5l-.03-.3c-.14-.68-.75-1.2-1.47-1.2M5 5.5c-.55 0-1 .45-1 1v8q0 .27.13.5c.64-.9 1.68-1.5 2.87-1.5 1.4 0 2.6.82 3.16 2h2.68l.16-.3V6.5c0-.55-.45-1-1-1zm10 8.15q.48-.15 1-.15c1.4 0 2.6.82 3.16 2h.59q.23-.02.25-.25v-3.83q-.01-.46-.35-.76l-2.45-2.1q-.07-.06-.16-.06H15z" clipRule="evenodd" />
    </IconBase>
  ))
);

TruckBold.displayName = 'TruckBold';

// Triple export pattern
export { TruckBold, TruckBold as TruckBoldIcon, TruckBold as SiTruckBold };
export default TruckBold;
export type { TruckBoldProps };
