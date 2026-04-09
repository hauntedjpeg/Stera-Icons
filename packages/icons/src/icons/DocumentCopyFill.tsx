import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DocumentCopyFillProps = Omit<IconBaseProps, 'children'>;

const DocumentCopyFill = memo(
  forwardRef<SVGSVGElement, DocumentCopyFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="document-copy-fill" {...props}>
      <path fillRule="evenodd" d="M14.17 1.12q.4-.01.8.06.34.08.62.26.35.23.61.53l3.83 3.83q.3.26.53.6.18.3.26.62.07.4.05.8v6.78q0 .6-.02 1.06-.02.45-.23.92-.36.67-1.04 1.04-.46.2-.92.23-.3.02-.66.02v-5.04c0-.21.01-.64-.09-1.07a3 3 0 0 0-.26-.72l-.13-.22-.09-.14c-.21-.3-.47-.55-.6-.68L13 6.17c-.13-.13-.37-.39-.68-.6l-.14-.1-.22-.12a3 3 0 0 0-.47-.2l-.25-.06-.16-.03c-.37-.07-.72-.06-.9-.06H7.12v-.6q0-.6.02-1.06.02-.45.23-.92.36-.68 1.04-1.04c.3-.15.62-.2.92-.23q.45-.04 1.06-.03zm.73 3.98c0 .7 0 1.05.14 1.32q.18.35.54.54c.27.14.62.14 1.32.14h2.5l-4.5-4.5z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M10.17 6.12q.4-.02.8.06.34.08.62.26.35.23.61.53l3.83 3.83q.3.26.53.6.18.3.26.62.07.4.05.8v6.78q0 .6-.02 1.06-.02.45-.23.92-.36.67-1.04 1.04c-.3.15-.62.2-.92.23q-.45.03-1.06.02H6.4q-.6 0-1.06-.02-.45-.02-.92-.23-.67-.36-1.04-1.04-.2-.46-.23-.92t-.02-1.06V9.4q0-.6.02-1.06.02-.45.23-.92.36-.68 1.04-1.04c.3-.15.62-.2.92-.23q.45-.04 1.06-.03zm.7 4.02c.01.69.02 1.03.15 1.3q.19.36.54.53c.26.14.6.14 1.3.15l2.54.03-4.55-4.55z" clipRule="evenodd" />
    </IconBase>
  ))
);

DocumentCopyFill.displayName = 'DocumentCopyFill';

// Triple export pattern (lucide-react style)
export { DocumentCopyFill, DocumentCopyFill as DocumentCopyFillIcon, DocumentCopyFill as SiDocumentCopyFill };
export default DocumentCopyFill;
export type { DocumentCopyFillProps };
