import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskFullBoldProps = Omit<IconBaseProps, 'children'>;

const FlaskFullBold = memo(
  forwardRef<SVGSVGElement, FlaskFullBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 2c.55 0 1 .45 1 1s-.45 1-1 1v4.98q0 .77.37 1.44l3.9 7.14c1.08 2-.36 4.44-2.64 4.44H7.37c-2.28 0-3.73-2.44-2.64-4.44l3.9-7.14Q9 9.75 9 8.98V4c-.55 0-1-.45-1-1s.45-1 1-1zm-.17 13.2c-.7-.1-1.42.06-2.02.46q-.77.51-1.67.71-.75.16-1.5.1l-.3-.05q-.6-.09-1.18-.33l-.28-.12-1.39 2.55c-.36.67.12 1.48.88 1.48h9.26c.76 0 1.24-.81.88-1.48l-1.74-3.19zM11 8.98q0 1.27-.61 2.4L8.85 14.2l.1.05q.7.29 1.4.22.54-.04 1.04-.3l.16-.08.15-.1.1-.06.07-.04q.24-.14.48-.26l.05-.02q.31-.15.66-.24l.04-.02.34-.08h.04q.16-.04.33-.06h.05q.35-.04.7-.04h.03l-.98-1.8q-.6-1.11-.61-2.39V4h-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlaskFullBold.displayName = 'FlaskFullBold';

// Triple export pattern
export { FlaskFullBold, FlaskFullBold as FlaskFullBoldIcon, FlaskFullBold as SiFlaskFullBold };
export default FlaskFullBold;
export type { FlaskFullBoldProps };
