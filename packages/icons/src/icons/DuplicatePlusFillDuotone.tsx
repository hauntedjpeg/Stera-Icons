import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DuplicatePlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DuplicatePlusFillDuotone = memo(
  forwardRef<SVGSVGElement, DuplicatePlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.4 2.13q1.44-.01 2.37.05c.64.05 1.2.16 1.72.42.82.42 1.49 1.09 1.9 1.91.27.52.38 1.08.43 1.72q.04.4.04.9H13.6q-1.44-.01-2.37.05c-.64.05-1.2.16-1.72.42-.82.42-1.49 1.09-1.9 1.91-.27.52-.38 1.08-.43 1.72-.06.63-.05 1.4-.05 2.37v3.26q-.5 0-.9-.04c-.64-.05-1.2-.16-1.72-.42-.82-.42-1.49-1.09-1.9-1.91-.27-.52-.38-1.08-.43-1.72q-.08-.93-.06-2.37V8.6q-.02-1.44.06-2.37c.05-.64.16-1.2.42-1.72.42-.82 1.09-1.49 1.91-1.9.52-.27 1.08-.38 1.72-.43q.93-.08 2.37-.06z" opacity={.4} />
        <path fillRule="evenodd" d="M15.4 7.13q1.44-.01 2.37.05c.64.05 1.2.16 1.72.42.82.42 1.49 1.09 1.9 1.91.27.52.38 1.08.43 1.72q.07.93.05 2.37v1.8q.01 1.44-.05 2.37c-.05.64-.16 1.2-.42 1.72-.42.82-1.09 1.49-1.91 1.9-.52.27-1.08.38-1.72.43q-.93.07-2.37.05h-1.8q-1.44.01-2.37-.05c-.64-.05-1.2-.16-1.72-.42-.82-.42-1.49-1.09-1.9-1.91-.27-.52-.38-1.08-.43-1.72-.06-.63-.05-1.4-.05-2.37v-1.8q-.01-1.44.05-2.37c.05-.64.16-1.2.42-1.72.42-.82 1.09-1.49 1.91-1.9.52-.27 1.08-.38 1.72-.43.63-.06 1.4-.05 2.37-.05zm-.9 3.5c-.48 0-.87.39-.87.87v2.13H11.5c-.48 0-.87.39-.87.87s.39.88.87.88h2.13v2.12c0 .48.39.88.87.88s.88-.4.88-.88v-2.12h2.12c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-2.12V11.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

DuplicatePlusFillDuotone.displayName = 'DuplicatePlusFillDuotone';

// Triple export pattern
export { DuplicatePlusFillDuotone, DuplicatePlusFillDuotone as DuplicatePlusFillDuotoneIcon, DuplicatePlusFillDuotone as SiDuplicatePlusFillDuotone };
export default DuplicatePlusFillDuotone;
export type { DuplicatePlusFillDuotoneProps };
