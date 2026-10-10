import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DocumentDetailFillProps = Omit<IconBaseProps, 'children'>;

const DocumentDetailFill = memo(
  forwardRef<SVGSVGElement, DocumentDetailFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.17 2.13c.45 0 .82-.01 1.17.07q.45.12.83.35c.31.19.57.45.89.77l3.62 3.62c.32.32.58.58.77.89q.24.38.35.83c.08.35.07.72.07 1.17v6.37q.01 1.24-.04 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05V7.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-2.67 14c-.48 0-.87.39-.87.87s.39.88.87.88h5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zm0-3c-.48 0-.87.39-.87.87s.39.88.87.88h5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zM12 6.8c0 1.12 0 1.68.22 2.1q.3.59.87.88c.43.22.99.22 2.11.22H18v-.34c0-.24 0-.36-.03-.48q-.03-.15-.12-.29c-.06-.1-.15-.19-.32-.36l-4.06-4.06c-.17-.17-.26-.26-.36-.32q-.14-.09-.3-.12-.13-.04-.47-.03H12z" clipRule="evenodd" />
    </IconBase>
  ))
);

DocumentDetailFill.displayName = 'DocumentDetailFill';

// Triple export pattern
export { DocumentDetailFill, DocumentDetailFill as DocumentDetailFillIcon, DocumentDetailFill as SiDocumentDetailFill };
export default DocumentDetailFill;
export type { DocumentDetailFillProps };
