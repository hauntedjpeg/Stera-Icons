import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DocumentCopyFillProps = Omit<IconBaseProps, 'children'>;

const DocumentCopyFill = memo(
  forwardRef<SVGSVGElement, DocumentCopyFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.67 1.12q.4-.01.8.06.34.08.62.26.35.23.61.53l3.83 3.83q.3.26.53.6.18.3.26.62.07.4.05.8V13q0 1.03-.03 1.71c-.04.47-.12.91-.33 1.32a3.4 3.4 0 0 1-1.48 1.48q-.6.29-1.32.33-.68.05-1.71.03h-.12V18q.01 1.03-.04 1.71c-.04.47-.12.91-.33 1.32a3.4 3.4 0 0 1-1.48 1.48q-.6.29-1.32.33-.68.04-1.71.03h-4q-1.03 0-1.71-.03c-.47-.04-.91-.12-1.32-.33a3.4 3.4 0 0 1-1.48-1.48q-.29-.6-.33-1.32-.05-.68-.04-1.71v-7q-.01-1.03.04-1.71c.04-.47.12-.91.33-1.32Q3.5 7 4.47 6.49q.6-.29 1.32-.33.68-.05 1.71-.04h.13V6q0-1.03.03-1.71c.04-.47.12-.91.33-1.32Q8.5 2 9.47 1.49q.6-.29 1.32-.33.68-.05 1.71-.04zM7.5 7.87c-.71 0-1.2 0-1.57.04-.36.03-.54.08-.67.14q-.46.24-.7.71c-.07.13-.12.3-.15.67s-.04.86-.04 1.57v7c0 .71 0 1.2.04 1.57.03.36.08.54.14.67q.24.46.71.7c.13.07.3.12.67.15s.86.03 1.57.03h4c.71 0 1.2 0 1.57-.03.36-.03.54-.08.67-.14q.46-.24.7-.71c.07-.13.12-.3.15-.67s.04-.86.04-1.57v-.13H12.5q-1.03 0-1.71-.03c-.47-.04-.91-.12-1.32-.33a3.4 3.4 0 0 1-1.48-1.48q-.29-.6-.33-1.32-.05-.68-.04-1.71V7.87zM15 5.5c0 .7 0 1.05.14 1.32q.18.35.54.54c.27.14.62.14 1.32.14h3l-5-5z" clipRule="evenodd" />
    </IconBase>
  ))
);

DocumentCopyFill.displayName = 'DocumentCopyFill';

// Triple export pattern (lucide-react style)
export { DocumentCopyFill, DocumentCopyFill as DocumentCopyFillIcon, DocumentCopyFill as SiDocumentCopyFill };
export default DocumentCopyFill;
export type { DocumentCopyFillProps };
