import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DocumentCopyRegularProps = Omit<IconBaseProps, 'children'>;

const DocumentCopyRegular = memo(
  forwardRef<SVGSVGElement, DocumentCopyRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.67 1.25q.4-.02.78.06.3.07.58.23.32.22.59.52l3.82 3.82c.2.2.38.37.52.6a2 2 0 0 1 .23.57q.07.37.06.78V13q.01 1.03-.04 1.7-.04.7-.31 1.28-.5.92-1.42 1.42-.59.28-1.28.31-.67.05-1.7.04h-.25V18q.01 1.03-.04 1.7-.04.7-.31 1.28-.5.92-1.42 1.42-.59.28-1.28.31-.67.05-1.7.04h-4q-1.03.01-1.7-.04a3 3 0 0 1-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7v-7q-.01-1.03.04-1.7.03-.7.31-1.28c.32-.6.81-1.1 1.42-1.42q.59-.28 1.28-.31.67-.05 1.7-.04h.25V6q-.01-1.03.04-1.7.04-.7.31-1.28c.32-.6.81-1.1 1.42-1.42q.59-.28 1.28-.31.67-.05 1.7-.04zM7.5 7.75c-.71 0-1.2 0-1.58.03-.37.03-.57.09-.71.16q-.5.27-.77.76c-.07.15-.13.35-.16.72-.03.38-.03.87-.03 1.58v7c0 .71 0 1.2.03 1.58.03.37.09.57.16.71q.26.5.77.77c.14.07.34.13.7.16.39.03.88.03 1.59.03h4c.71 0 1.2 0 1.58-.03.37-.03.57-.09.71-.16q.5-.27.77-.77c.07-.14.13-.34.16-.7.03-.39.03-.88.03-1.59v-.25H12.5q-1.03.01-1.7-.04a3 3 0 0 1-1.28-.31q-.92-.5-1.42-1.42-.28-.59-.31-1.28-.05-.67-.04-1.7V7.75zm5-5c-.71 0-1.2 0-1.58.03-.37.03-.57.09-.71.16q-.5.27-.77.76c-.07.15-.13.35-.16.72-.03.38-.03.87-.03 1.58v7c0 .71 0 1.2.03 1.58.03.37.09.57.16.71q.27.5.77.77c.14.07.34.13.7.16.39.03.88.03 1.59.03h4c.71 0 1.2 0 1.58-.03.37-.03.57-.09.71-.16q.5-.27.77-.77c.07-.14.13-.34.16-.7.03-.39.03-.88.03-1.59V8.75H16.5q-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.37-.02-.88V2.75zM15.25 6l.01.76.04.22q.08.14.22.22l.22.04.76.01h3.17l-.29-.3-3.82-3.83-.31-.3z" clipRule="evenodd" />
    </IconBase>
  ))
);

DocumentCopyRegular.displayName = 'DocumentCopyRegular';

// Triple export pattern (lucide-react style)
export { DocumentCopyRegular, DocumentCopyRegular as DocumentCopyRegularIcon, DocumentCopyRegular as SiDocumentCopyRegular };
export default DocumentCopyRegular;
export type { DocumentCopyRegularProps };
