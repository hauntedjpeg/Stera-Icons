import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DocumentSearchFillProps = Omit<IconBaseProps, 'children'>;

const DocumentSearchFill = memo(
  forwardRef<SVGSVGElement, DocumentSearchFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="document-search-fill" {...props}>
      <path fillRule="evenodd" d="M15 1.63q1.03 0 1.71.03c.47.04.91.12 1.32.33q.97.5 1.48 1.48.28.6.33 1.32.05.68.04 1.71v7.84a4.99 4.99 0 1 0-7.04 7.04H9q-1.03.01-1.71-.04c-.47-.04-.91-.12-1.32-.33a3.4 3.4 0 0 1-1.48-1.48q-.29-.6-.33-1.32-.05-.68-.04-1.71v-10q-.01-1.03.04-1.71c.04-.47.12-.91.33-1.32Q5 2.5 5.97 1.99q.6-.29 1.32-.33.68-.05 1.71-.03zm-6 7.5a.87.87 0 1 0 0 1.74h6a.88.88 0 0 0 0-1.74zm0-3.5a.87.87 0 1 0 0 1.75h6a.88.88 0 0 0 0-1.75z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M16 13.75a3.75 3.75 0 0 1 3.26 5.6l1.45 1.44a1 1 0 1 1-1.42 1.42l-1.44-1.45q-.83.48-1.85.49a3.75 3.75 0 1 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

DocumentSearchFill.displayName = 'DocumentSearchFill';

// Triple export pattern (lucide-react style)
export { DocumentSearchFill, DocumentSearchFill as DocumentSearchFillIcon, DocumentSearchFill as SiDocumentSearchFill };
export default DocumentSearchFill;
export type { DocumentSearchFillProps };
