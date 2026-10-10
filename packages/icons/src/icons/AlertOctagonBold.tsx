import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertOctagonBoldProps = Omit<IconBaseProps, 'children'>;

const AlertOctagonBold = memo(
  forwardRef<SVGSVGElement, AlertOctagonBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 14.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 6.5c.55 0 1 .45 1 1V12c0 .55-.45 1-1 1s-1-.45-1-1V7.5c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M15.21 2c.6 0 1.17.24 1.6.66l4.53 4.54c.42.42.66 1 .66 1.59v6.42c0 .6-.24 1.17-.66 1.6l-4.54 4.53c-.42.42-1 .66-1.59.66H8.79c-.6 0-1.17-.24-1.6-.66L2.67 16.8c-.42-.42-.66-1-.66-1.59V8.79c0-.6.24-1.17.66-1.6L7.2 2.67c.42-.42 1-.66 1.59-.66zM8.79 4q-.1 0-.18.07L4.07 8.61q-.06.07-.07.18v6.42q0 .1.07.18l4.54 4.54q.07.06.18.07h6.42q.1 0 .18-.07l4.54-4.54q.06-.07.07-.18V8.79q0-.1-.07-.18l-4.54-4.54q-.07-.06-.18-.07z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertOctagonBold.displayName = 'AlertOctagonBold';

// Triple export pattern
export { AlertOctagonBold, AlertOctagonBold as AlertOctagonBoldIcon, AlertOctagonBold as SiAlertOctagonBold };
export default AlertOctagonBold;
export type { AlertOctagonBoldProps };
