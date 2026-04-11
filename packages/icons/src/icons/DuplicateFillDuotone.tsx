import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DuplicateFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DuplicateFillDuotone = memo(
  forwardRef<SVGSVGElement, DuplicateFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.6 2.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91q.04.52.05 1.2a.9.9 0 0 0-.87-.78h-2.5a.88.88 0 0 0 0 1.76H16c.45 0 .82-.35.87-.78v1.5q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H8.1a.9.9 0 0 0 .78-.87v-2.5a.88.88 0 0 0-1.76 0V16c0 .45.34.82.77.87q-.66-.01-1.19-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7v-.2q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm1.24 5.8a.9.9 0 0 0-1.1-.59q-.26.08-.5.2a4 4 0 0 0-1.9 2.2.88.88 0 0 0 1.68.51q.03-.12.09-.21a2 2 0 0 1 1.14-1.02.9.9 0 0 0 .59-1.1" clipRule="evenodd" opacity={.4} />
        <path d="M15.5 20.13a.88.88 0 0 1 0 1.75h-2a.88.88 0 0 1 0-1.75zM7.93 18.16a.9.9 0 0 1 1.09.59q.03.12.09.21a2 2 0 0 0 1.14 1.02.88.88 0 1 1-.5 1.68 3.88 3.88 0 0 1-2.4-2.4.9.9 0 0 1 .58-1.1M19.98 18.75a.88.88 0 1 1 1.68.5q-.09.27-.2.5a4 4 0 0 1-2.2 1.9.88.88 0 0 1-.51-1.67q.12-.03.21-.09a2 2 0 0 0 1.02-1.14M8 12.63c.48 0 .88.39.88.87V16a.88.88 0 0 1-1.76 0v-2.5c0-.48.4-.87.88-.87M21 12.63c.48 0 .88.39.88.87v2a.88.88 0 0 1-1.75 0v-2c0-.48.39-.87.87-.87M9.75 7.34a.88.88 0 0 1 .5 1.68q-.12.03-.21.09a2 2 0 0 0-1.02 1.14.88.88 0 1 1-1.68-.5q.08-.27.2-.5a4 4 0 0 1 2.2-1.9M18.16 7.93a.9.9 0 0 1 1.1-.59q.26.08.5.2a4 4 0 0 1 1.9 2.2.88.88 0 0 1-1.68.51l-.09-.21a2 2 0 0 0-1.14-1.02.9.9 0 0 1-.59-1.1M16 7.13a.88.88 0 0 1 0 1.75h-2.5a.88.88 0 0 1 0-1.76z" />
    </IconBase>
  ))
);

DuplicateFillDuotone.displayName = 'DuplicateFillDuotone';

// Triple export pattern (lucide-react style)
export { DuplicateFillDuotone, DuplicateFillDuotone as DuplicateFillDuotoneIcon, DuplicateFillDuotone as SiDuplicateFillDuotone };
export default DuplicateFillDuotone;
export type { DuplicateFillDuotoneProps };
