import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DocumentSearchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DocumentSearchBoldDuotone = memo(
  forwardRef<SVGSVGElement, DocumentSearchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.94 1.5q.43 0 .78.04c.48.04.94.12 1.37.34.66.34 1.2.87 1.53 1.53.22.43.3.89.34 1.37q.05.7.04 1.72v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.72 0-1.2-.03-1.56s-.08-.52-.13-.62q-.23-.43-.66-.66c-.1-.05-.26-.1-.62-.13l-.65-.03H9c-.72 0-1.2 0-1.56.03s-.52.08-.62.13q-.43.23-.66.66c-.05.1-.1.26-.13.62C6 5.3 6 5.78 6 6.5v10c0 .72 0 1.2.03 1.56s.08.52.13.62q.23.43.66.66c.1.05.26.1.62.13.37.03.84.03 1.56.03h1c.55 0 1 .45 1 1s-.45 1-1 1H9q-1.03.01-1.72-.04c-.48-.04-.94-.12-1.37-.34-.66-.34-1.2-.87-1.53-1.53-.22-.43-.3-.89-.34-1.37q-.05-.7-.04-1.72v-10q-.01-1.02.04-1.72c.04-.48.12-.94.34-1.37.34-.66.87-1.2 1.53-1.53.43-.22.89-.3 1.37-.34q.7-.05 1.72-.04h6.94" opacity={0.4} />
        <path d="M15 9c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1zM15 5.5c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path fillRule="evenodd" d="M15.5 12.5c2.49 0 4.5 2.01 4.5 4.5q-.01 1.2-.56 2.17l1.94 1.95c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0l-1.95-1.94q-.97.55-2.17.56c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5m0 2c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5S18 18.38 18 17s-1.12-2.5-2.5-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

DocumentSearchBoldDuotone.displayName = 'DocumentSearchBoldDuotone';

// Triple export pattern
export { DocumentSearchBoldDuotone, DocumentSearchBoldDuotone as DocumentSearchBoldDuotoneIcon, DocumentSearchBoldDuotone as SiDocumentSearchBoldDuotone };
export default DocumentSearchBoldDuotone;
export type { DocumentSearchBoldDuotoneProps };
