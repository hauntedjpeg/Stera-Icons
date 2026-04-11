import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DuplicateFillProps = Omit<IconBaseProps, 'children'>;

const DuplicateFill = memo(
  forwardRef<SVGSVGElement, DuplicateFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.5 20.13a.88.88 0 0 1 0 1.75h-2a.88.88 0 0 1 0-1.75zM7.93 18.16a.9.9 0 0 1 1.1.59q.02.12.08.21a2 2 0 0 0 1.14 1.02.88.88 0 1 1-.5 1.68 3.88 3.88 0 0 1-2.4-2.4.9.9 0 0 1 .58-1.1M19.98 18.75a.87.87 0 0 1 1.68.5q-.09.27-.2.5a4 4 0 0 1-2.2 1.9.88.88 0 0 1-.51-1.67q.12-.03.21-.09a2 2 0 0 0 1.02-1.14" />
        <path fillRule="evenodd" d="M9.6 2.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91l.02.42H13.5a.88.88 0 0 0 0 1.76h3.37v.72q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05h-.73V13.5a.88.88 0 0 0-1.74 0v3.34l-.43-.02a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7v-.2q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm1.24 5.8a.9.9 0 0 0-1.1-.59q-.26.08-.5.2a4 4 0 0 0-1.9 2.2.88.88 0 0 0 1.68.51q.03-.12.09-.21a2 2 0 0 1 1.14-1.02.9.9 0 0 0 .59-1.1" clipRule="evenodd" />
        <path d="M21 12.63c.48 0 .88.39.88.87v2a.88.88 0 0 1-1.75 0v-2c0-.48.39-.87.87-.87M18.16 7.93a.9.9 0 0 1 1.1-.59q.26.08.5.2a4 4 0 0 1 1.9 2.2.88.88 0 0 1-1.68.51l-.09-.21a2 2 0 0 0-1.14-1.02.9.9 0 0 1-.59-1.1" />
    </IconBase>
  ))
);

DuplicateFill.displayName = 'DuplicateFill';

// Triple export pattern (lucide-react style)
export { DuplicateFill, DuplicateFill as DuplicateFillIcon, DuplicateFill as SiDuplicateFill };
export default DuplicateFill;
export type { DuplicateFillProps };
