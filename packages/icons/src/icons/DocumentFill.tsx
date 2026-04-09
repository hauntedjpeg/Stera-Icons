import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DocumentFillProps = Omit<IconBaseProps, 'children'>;

const DocumentFill = memo(
  forwardRef<SVGSVGElement, DocumentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="document-fill" {...props}>
      <path fillRule="evenodd" d="M12.17 2.13c.45 0 .82-.01 1.17.07q.45.12.83.35c.31.19.57.45.89.77l3.62 3.62c.32.32.58.58.77.89q.24.38.35.83c.08.35.07.72.07 1.17v6.37q.01 1.24-.04 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V7.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zM12 6.8c0 1.12 0 1.68.22 2.1q.3.59.87.88c.43.22.99.22 2.11.22H18v-.34c0-.24 0-.36-.03-.48a1 1 0 0 0-.12-.29c-.06-.1-.15-.19-.32-.36l-4.06-4.06a2 2 0 0 0-.36-.32 1 1 0 0 0-.3-.12q-.13-.04-.47-.03H12z" clipRule="evenodd" />
    </IconBase>
  ))
);

DocumentFill.displayName = 'DocumentFill';

// Triple export pattern (lucide-react style)
export { DocumentFill, DocumentFill as DocumentFillIcon, DocumentFill as SiDocumentFill };
export default DocumentFill;
export type { DocumentFillProps };
