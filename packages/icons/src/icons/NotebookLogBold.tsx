import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NotebookLogBoldProps = Omit<IconBaseProps, 'children'>;

const NotebookLogBold = memo(
  forwardRef<SVGSVGElement, NotebookLogBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 12c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1zM14.5 8c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M14.2 2q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v8.4q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57l-.03-.75H3.5c-.55 0-1-.45-1-1s.45-1 1-1H4V13h-.5c-.55 0-1-.45-1-1s.45-1 1-1H4V8.5h-.5c-.55 0-1-.45-1-1s.45-1 1-1h.51q0-.4.03-.75c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q8.57 2 9.8 2zM9.8 4c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82q-.02.26-.03.59h.49c.55 0 1 .45 1 1s-.45 1-1 1H6V11h.5c.55 0 1 .45 1 1s-.45 1-1 1H6v2.5h.5c.55 0 1 .45 1 1s-.45 1-1 1h-.49q0 .32.03.59c.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V7.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18C15.64 4 15.06 4 14.2 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

NotebookLogBold.displayName = 'NotebookLogBold';

// Triple export pattern
export { NotebookLogBold, NotebookLogBold as NotebookLogBoldIcon, NotebookLogBold as SiNotebookLogBold };
export default NotebookLogBold;
export type { NotebookLogBoldProps };
