import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertOctagonRegularProps = Omit<IconBaseProps, 'children'>;

const AlertOctagonRegular = memo(
  forwardRef<SVGSVGElement, AlertOctagonRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 14.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M12 6.75c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M15.21 2.25c.53 0 1.04.21 1.41.59l4.54 4.54c.38.37.59.88.59 1.41v6.42c0 .53-.21 1.04-.59 1.41l-4.54 4.54c-.37.38-.88.59-1.41.59H8.79c-.53 0-1.04-.21-1.41-.59l-4.54-4.54c-.38-.37-.59-.88-.59-1.41V8.79c0-.53.21-1.04.59-1.41l4.54-4.54c.37-.38.88-.59 1.41-.59zm-6.42 1.5q-.2 0-.35.15L3.9 8.44q-.15.15-.15.35v6.42q0 .2.15.35l4.54 4.54q.15.15.35.15h6.42q.2 0 .35-.15l4.54-4.54q.15-.15.15-.35V8.79q0-.2-.15-.35L15.56 3.9q-.15-.15-.35-.15z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertOctagonRegular.displayName = 'AlertOctagonRegular';

// Triple export pattern
export { AlertOctagonRegular, AlertOctagonRegular as AlertOctagonRegularIcon, AlertOctagonRegular as SiAlertOctagonRegular };
export default AlertOctagonRegular;
export type { AlertOctagonRegularProps };
