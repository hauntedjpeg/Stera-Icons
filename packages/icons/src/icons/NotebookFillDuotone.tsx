import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NotebookFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const NotebookFillDuotone = memo(
  forwardRef<SVGSVGElement, NotebookFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16 2.13q1.03 0 1.71.03c.47.04.91.12 1.32.33q.97.5 1.48 1.48.28.6.33 1.32.05.68.04 1.71v10q.01 1.03-.04 1.71c-.04.47-.12.91-.33 1.32a3.4 3.4 0 0 1-1.48 1.48q-.6.29-1.32.33-.68.05-1.71.04H7.38V2.12H16m-4.5 10a.88.88 0 0 0 0 1.74H14a.88.88 0 0 0 0-1.74zm0-4a.88.88 0 0 0 0 1.74H16a.88.88 0 0 0 0-1.74z" clipRule="evenodd" opacity={.4} />
        <path d="M7.38 21.88H6.5a3.37 3.37 0 0 1-3.37-3.38v-13A3.4 3.4 0 0 1 6.5 2.13h.88zM14 12.13a.88.88 0 0 1 0 1.74h-2.5a.88.88 0 0 1 0-1.74zM16 8.13a.88.88 0 0 1 0 1.74h-4.5a.88.88 0 0 1 0-1.74z" />
    </IconBase>
  ))
);

NotebookFillDuotone.displayName = 'NotebookFillDuotone';

// Triple export pattern (lucide-react style)
export { NotebookFillDuotone, NotebookFillDuotone as NotebookFillDuotoneIcon, NotebookFillDuotone as SiNotebookFillDuotone };
export default NotebookFillDuotone;
export type { NotebookFillDuotoneProps };
