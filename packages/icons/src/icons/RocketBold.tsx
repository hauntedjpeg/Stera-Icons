import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RocketBoldProps = Omit<IconBaseProps, 'children'>;

const RocketBold = memo(
  forwardRef<SVGSVGElement, RocketBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7c.97 0 1.75.78 1.75 1.75S12.97 10.5 12 10.5s-1.75-.78-1.75-1.75S11.03 7 12 7" />
        <path fillRule="evenodd" d="M11.57 1.1c.32-.15.69-.13.98.07 2.4 1.6 3.85 3.43 4.64 5.32q.61 1.54.73 3.01l2.79 2.8c.22.22.33.54.28.85l-1 6.5c-.05.33-.27.62-.57.76s-.67.12-.95-.06L14.71 18H9.3l-3.76 2.35c-.28.18-.64.2-.95.06s-.52-.43-.57-.76l-1-6.5c-.05-.31.06-.63.28-.86l2.79-2.78q.1-1.48.73-3.02c.79-1.89 2.24-3.73 4.63-5.32zm-6.5 12.25.69 4.5 1.9-1.19q-.18-.33-.37-.75c-.42-.92-.88-2.2-1.1-3.68zm12.74-1.12c-.22 1.47-.69 2.75-1.1 3.68l-.37.75 1.9 1.19.7-4.5zm-5.81-9C10.24 4.51 9.22 5.9 8.66 7.25c-.63 1.5-.71 3-.54 4.37s.6 2.58 1 3.46q.25.56.45.91h4.86q.2-.35.45-.91c.4-.88.83-2.1 1-3.46.17-1.37.08-2.88-.54-4.37-.56-1.35-1.58-2.74-3.34-4.04" clipRule="evenodd" />
        <path d="M10.5 19c-.55 0-1 .45-1 1 0 .37.13.75.3 1.07.47.96 1.34 1.55 2.2 2.13.86-.58 1.73-1.17 2.2-2.13.17-.32.3-.7.3-1.07 0-.55-.45-1-1-1z" />
    </IconBase>
  ))
);

RocketBold.displayName = 'RocketBold';

// Triple export pattern
export { RocketBold, RocketBold as RocketBoldIcon, RocketBold as SiRocketBold };
export default RocketBold;
export type { RocketBoldProps };
