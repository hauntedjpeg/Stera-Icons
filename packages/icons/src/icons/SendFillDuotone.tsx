import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendFillDuotone = memo(
  forwardRef<SVGSVGElement, SendFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.38 7.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-5.73 5.73-.28-.96-.96-.28z" />
        <path d="m9.65 13.1-6.08-1.78c-1.9-.56-1.94-3.23-.06-3.85l15.7-5.24c1.58-.52 3.09.98 2.56 2.55L16.53 20.5c-.62 1.87-3.29 1.82-3.85-.07l-1.79-6.08 5.73-5.73q.19-.2.24-.45l.02-.17v-.08l-.07-.25q-.05-.15-.2-.29-.22-.22-.53-.25h-.16q-.3.03-.54.25z" opacity={.4} />
    </IconBase>
  ))
);

SendFillDuotone.displayName = 'SendFillDuotone';

// Triple export pattern
export { SendFillDuotone, SendFillDuotone as SendFillDuotoneIcon, SendFillDuotone as SiSendFillDuotone };
export default SendFillDuotone;
export type { SendFillDuotoneProps };
