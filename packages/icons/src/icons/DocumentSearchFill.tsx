import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DocumentSearchFillProps = Omit<IconBaseProps, 'children'>;

const DocumentSearchFill = memo(
  forwardRef<SVGSVGElement, DocumentSearchFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 1.63q1.03 0 1.71.03c.47.04.91.12 1.32.33q.97.5 1.48 1.48.28.6.33 1.32.05.68.04 1.71v7.84c-.92-1.12-2.32-1.84-3.88-1.84-2.76 0-5 2.24-5 5 0 1.56.72 2.96 1.84 3.88H9q-1.03.01-1.71-.04c-.47-.04-.91-.12-1.32-.33q-.97-.5-1.48-1.48-.29-.6-.33-1.32-.05-.68-.04-1.71v-10q-.01-1.03.04-1.71c.04-.47.12-.91.33-1.32Q5 2.5 5.97 1.99q.6-.29 1.32-.33.68-.05 1.71-.03zm-6 7.5c-.48 0-.87.39-.87.87s.39.88.87.88h6c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zm0-3.5c-.48 0-.87.39-.87.87s.39.88.87.88h6c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M16 13.75c2.07 0 3.75 1.68 3.75 3.75q-.01 1.02-.49 1.85l1.45 1.44c.39.4.39 1.03 0 1.42-.4.39-1.03.39-1.42 0l-1.44-1.45q-.83.48-1.85.49c-2.07 0-3.75-1.68-3.75-3.75s1.68-3.75 3.75-3.75m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

DocumentSearchFill.displayName = 'DocumentSearchFill';

// Triple export pattern
export { DocumentSearchFill, DocumentSearchFill as DocumentSearchFillIcon, DocumentSearchFill as SiDocumentSearchFill };
export default DocumentSearchFill;
export type { DocumentSearchFillProps };
