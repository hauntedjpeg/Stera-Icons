import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DocumentSearchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DocumentSearchFillDuotone = memo(
  forwardRef<SVGSVGElement, DocumentSearchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 1.63q1.03 0 1.71.03c.47.04.91.12 1.32.33q.97.5 1.48 1.48.28.6.33 1.32.05.68.04 1.71v10.4c-.04-1.4-.73-2.64-1.78-3.42l-.05-.03-.12-.1-.3-.17-.05-.03-.1-.05-.1-.05-.08-.04-.1-.05q-.06 0-.1-.03l-.1-.04-.04-.02q-.3-.1-.58-.16l-.35-.05q-.26-.03-.53-.04c-2.42 0-4.37 1.96-4.37 4.38q0 .27.03.53l.05.32q.08.37.2.72l.05.12.12.25q.07.17.18.32c.75 1.24 2.09 2.07 3.63 2.11H9q-1.03 0-1.71-.03c-.47-.04-.91-.12-1.32-.33q-.97-.5-1.48-1.48-.29-.6-.33-1.32-.05-.68-.04-1.71v-10q-.01-1.03.04-1.71c.04-.47.12-.91.33-1.32Q5 2.5 5.97 1.99q.6-.29 1.32-.33.68-.05 1.71-.03zm-6 7.5c-.48 0-.87.39-.87.87s.39.88.87.88h6c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zm0-3.5c-.48 0-.87.39-.87.87s.39.88.87.88h6c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M15.5 12.63c2.42 0 4.38 1.95 4.38 4.37 0 .85-.25 1.63-.66 2.3l1.49 1.5c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-1.49-1.48c-.67.41-1.45.66-2.3.66-2.42 0-4.37-1.96-4.37-4.38s1.95-4.37 4.37-4.37m0 1.74c-1.45 0-2.62 1.18-2.62 2.63s1.17 2.63 2.62 2.63 2.63-1.18 2.63-2.63-1.18-2.62-2.63-2.62" clipRule="evenodd" />
        <path d="M15 9.13c.48 0 .88.39.88.87s-.4.88-.88.88H9c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM15 5.63c.48 0 .88.39.88.87s-.4.88-.88.88H9c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

DocumentSearchFillDuotone.displayName = 'DocumentSearchFillDuotone';

// Triple export pattern
export { DocumentSearchFillDuotone, DocumentSearchFillDuotone as DocumentSearchFillDuotoneIcon, DocumentSearchFillDuotone as SiDocumentSearchFillDuotone };
export default DocumentSearchFillDuotone;
export type { DocumentSearchFillDuotoneProps };
