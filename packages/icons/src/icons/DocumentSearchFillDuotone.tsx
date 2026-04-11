import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DocumentSearchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DocumentSearchFillDuotone = memo(
  forwardRef<SVGSVGElement, DocumentSearchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 1.63q1.03 0 1.71.03c.47.04.91.12 1.32.33q.97.5 1.48 1.48.28.6.33 1.32.05.68.04 1.71v10.4a4.4 4.4 0 0 0-1.78-3.42l-.05-.03-.12-.1-.3-.17-.05-.03-.1-.05-.1-.05-.08-.04-.1-.05q-.06 0-.1-.03l-.1-.04-.04-.02a4 4 0 0 0-1.46-.24 4.38 4.38 0 0 0-4.09 5.94l.05.12a4.4 4.4 0 0 0 3.93 2.68H9q-1.03 0-1.71-.03c-.47-.04-.91-.12-1.32-.33a3.4 3.4 0 0 1-1.48-1.48q-.29-.6-.33-1.32-.05-.68-.04-1.71v-10q-.01-1.03.04-1.71c.04-.47.12-.91.33-1.32Q5 2.5 5.97 1.99q.6-.29 1.32-.33.68-.05 1.71-.03zm-6 7.5a.87.87 0 1 0 0 1.74h6a.88.88 0 0 0 0-1.74zm0-3.5a.87.87 0 1 0 0 1.75h6a.88.88 0 0 0 0-1.75z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M15.5 12.63a4.38 4.38 0 0 1 3.72 6.67l1.49 1.5a1 1 0 1 1-1.42 1.4l-1.49-1.48a4.38 4.38 0 1 1-2.3-8.1m0 1.74a2.63 2.63 0 1 0 0 5.26 2.63 2.63 0 0 0 0-5.25" clipRule="evenodd" />
        <path d="M15 9.13a.88.88 0 0 1 0 1.74H9a.88.88 0 0 1 0-1.74zM15 5.63a.88.88 0 0 1 0 1.75H9a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

DocumentSearchFillDuotone.displayName = 'DocumentSearchFillDuotone';

// Triple export pattern (lucide-react style)
export { DocumentSearchFillDuotone, DocumentSearchFillDuotone as DocumentSearchFillDuotoneIcon, DocumentSearchFillDuotone as SiDocumentSearchFillDuotone };
export default DocumentSearchFillDuotone;
export type { DocumentSearchFillDuotoneProps };
