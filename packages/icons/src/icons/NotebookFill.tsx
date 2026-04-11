import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NotebookFillProps = Omit<IconBaseProps, 'children'>;

const NotebookFill = memo(
  forwardRef<SVGSVGElement, NotebookFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16 2.13q1.03 0 1.71.03c.47.04.91.12 1.32.33q.97.5 1.48 1.48.28.6.33 1.32.05.68.04 1.71v10q.01 1.03-.04 1.71c-.04.47-.12.91-.33 1.32a3.4 3.4 0 0 1-1.48 1.48q-.6.29-1.32.33-.68.05-1.71.04H8q-1.03.01-1.71-.04c-.47-.04-.91-.12-1.32-.33a3.4 3.4 0 0 1-1.48-1.48q-.29-.6-.33-1.32-.05-.68-.04-1.71V7q-.01-1.03.04-1.71c.04-.47.12-.91.33-1.32Q4 3 4.97 2.49q.6-.29 1.32-.33.68-.05 1.71-.04zM7.5 3.88q-.67 0-1.07.03c-.36.03-.54.08-.67.14q-.46.24-.7.71c-.07.13-.12.3-.15.67s-.04.86-.04 1.57v10c0 .71 0 1.2.04 1.57.03.36.08.54.14.67q.24.46.71.7c.13.07.3.12.67.15q.4.04 1.07.03zm4 8.24a.88.88 0 0 0 0 1.76H14a.88.88 0 0 0 0-1.76zm0-4a.88.88 0 0 0 0 1.76H16a.88.88 0 0 0 0-1.76z" clipRule="evenodd" />
    </IconBase>
  ))
);

NotebookFill.displayName = 'NotebookFill';

// Triple export pattern (lucide-react style)
export { NotebookFill, NotebookFill as NotebookFillIcon, NotebookFill as SiNotebookFill };
export default NotebookFill;
export type { NotebookFillProps };
