import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SmartphoneBoldProps = Omit<IconBaseProps, 'children'>;

const SmartphoneBold = memo(
  forwardRef<SVGSVGElement, SmartphoneBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 5c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M12.6 1q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48.94.48 1.7 1.25 2.19 2.19.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v7.2q.02 1.65-.06 2.7c-.06.74-.18 1.38-.48 1.97-.48.94-1.25 1.7-2.19 2.19-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-1.2q-1.65.02-2.7-.06c-.74-.06-1.38-.18-1.97-.48-.94-.48-1.7-1.25-2.19-2.19-.3-.6-.42-1.23-.48-1.96Q3.99 17.25 4 15.6V8.4q-.01-1.65.06-2.7c.06-.74.18-1.38.48-1.97.48-.94 1.25-1.7 2.19-2.19.6-.3 1.23-.42 1.96-.48Q9.75.98 11.4 1zm-1.2 2c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28-.57.28-1.03.74-1.31 1.3-.14.27-.23.62-.28 1.22C6 6.47 6 7.26 6 8.4v7.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21.28.57.74 1.03 1.3 1.31.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h1.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28q.87-.44 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V8.4c0-1.14 0-1.93-.05-2.55-.05-.6-.14-.95-.28-1.21q-.44-.87-1.3-1.31c-.27-.14-.62-.23-1.22-.28C14.53 3 13.74 3 12.6 3z" clipRule="evenodd" />
    </IconBase>
  ))
);

SmartphoneBold.displayName = 'SmartphoneBold';

// Triple export pattern
export { SmartphoneBold, SmartphoneBold as SmartphoneBoldIcon, SmartphoneBold as SiSmartphoneBold };
export default SmartphoneBold;
export type { SmartphoneBoldProps };
