import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NotebookFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const NotebookFillDuotone = memo(
  forwardRef<SVGSVGElement, NotebookFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16 2.13q1.03 0 1.71.03c.47.04.91.12 1.32.33q.97.5 1.48 1.48.28.6.33 1.32.05.68.04 1.71v10q.01 1.03-.04 1.71c-.04.47-.12.91-.33 1.32q-.5.97-1.48 1.48-.6.29-1.32.33-.68.05-1.71.04H7.38V2.12H16m-4.5 10c-.48 0-.87.39-.87.87s.39.88.87.88H14c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zm0-4c-.48 0-.87.39-.87.87s.39.88.87.88H16c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" opacity={.4} />
        <path d="M7.38 21.88H6.5c-1.86 0-3.37-1.52-3.37-3.38v-13c0-1.86 1.5-3.37 3.37-3.37h.88zM14 12.13c.48 0 .88.39.88.87s-.4.88-.88.88h-2.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM16 8.13c.48 0 .88.39.88.87s-.4.88-.88.88h-4.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

NotebookFillDuotone.displayName = 'NotebookFillDuotone';

// Triple export pattern
export { NotebookFillDuotone, NotebookFillDuotone as NotebookFillDuotoneIcon, NotebookFillDuotone as SiNotebookFillDuotone };
export default NotebookFillDuotone;
export type { NotebookFillDuotoneProps };
