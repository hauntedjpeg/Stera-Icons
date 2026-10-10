import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DocumentSearchRegularProps = Omit<IconBaseProps, 'children'>;

const DocumentSearchRegular = memo(
  forwardRef<SVGSVGElement, DocumentSearchRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.5 12.75c2.35 0 4.25 1.9 4.25 4.25q-.02 1.23-.62 2.21l2.08 2.08c.39.4.39 1.03 0 1.42-.4.39-1.03.39-1.42 0l-2.08-2.08q-.98.61-2.21.62c-2.35 0-4.25-1.9-4.25-4.25s1.9-4.25 4.25-4.25m0 1.5c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75" clipRule="evenodd" />
        <path d="M15 1.75q1.03-.01 1.7.04.7.04 1.28.31.92.5 1.42 1.42.28.59.31 1.28.05.67.04 1.7v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5c0-.71 0-1.2-.03-1.58-.03-.37-.09-.57-.16-.71q-.27-.5-.77-.77c-.14-.07-.34-.13-.7-.16-.39-.03-.88-.03-1.59-.03H9c-.71 0-1.2 0-1.58.03-.37.03-.57.09-.71.16q-.5.26-.77.77c-.07.14-.13.34-.16.7-.03.39-.03.88-.03 1.59v10c0 .71 0 1.2.03 1.58.03.37.09.57.16.71q.26.5.77.77c.14.07.34.13.7.16.39.03.88.03 1.59.03h1c.41 0 .75.34.75.75s-.34.75-.75.75H9q-1.03.01-1.7-.04-.7-.04-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7v-10q-.01-1.03.04-1.7.04-.7.31-1.28c.32-.6.81-1.1 1.42-1.42q.59-.28 1.28-.31.67-.05 1.7-.04z" />
        <path d="M15 9.25c.41 0 .75.34.75.75s-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM15 5.75c.41 0 .75.34.75.75s-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

DocumentSearchRegular.displayName = 'DocumentSearchRegular';

// Triple export pattern
export { DocumentSearchRegular, DocumentSearchRegular as DocumentSearchRegularIcon, DocumentSearchRegular as SiDocumentSearchRegular };
export default DocumentSearchRegular;
export type { DocumentSearchRegularProps };
