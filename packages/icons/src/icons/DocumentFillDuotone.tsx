import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DocumentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DocumentFillDuotone = memo(
  forwardRef<SVGSVGElement, DocumentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.17 2.12c.45 0 .82 0 1.17.08q.45.12.83.35c.31.19.57.45.89.77l3.62 3.62c.32.32.58.58.77.89q.24.38.35.83c.08.35.07.72.07 1.17v6.37q.01 1.24-.04 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.82.06-2.05.04H9.8q-1.24.01-2.04-.04a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05V7.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.05zM12 6.8c0 1.12 0 1.68.22 2.1q.3.58.87.88c.43.22.99.22 2.11.22H18v-.34c0-.24 0-.36-.03-.48a1 1 0 0 0-.12-.29c-.06-.1-.15-.19-.32-.36l-4.06-4.06c-.17-.17-.26-.26-.36-.32a1 1 0 0 0-.3-.12q-.13-.04-.47-.03H12z" clipRule="evenodd" opacity={.4} />
        <path d="M15.2 10H18v-.34c0-.24 0-.36-.03-.48a1 1 0 0 0-.12-.29c-.06-.1-.15-.19-.32-.36l-4.06-4.06c-.17-.17-.26-.26-.36-.32a1 1 0 0 0-.3-.12q-.13-.04-.47-.03H12v2.8c0 1.12 0 1.68.22 2.1q.3.58.87.88c.43.22.99.22 2.11.22" />
    </IconBase>
  ))
);

DocumentFillDuotone.displayName = 'DocumentFillDuotone';

// Triple export pattern (lucide-react style)
export { DocumentFillDuotone, DocumentFillDuotone as DocumentFillDuotoneIcon, DocumentFillDuotone as SiDocumentFillDuotone };
export default DocumentFillDuotone;
export type { DocumentFillDuotoneProps };
