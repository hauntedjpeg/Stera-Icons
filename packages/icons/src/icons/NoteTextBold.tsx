import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NoteTextBoldProps = Omit<IconBaseProps, 'children'>;

const NoteTextBold = memo(
  forwardRef<SVGSVGElement, NoteTextBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 10.13a.87.87 0 1 1 0 1.74H8.5a.87.87 0 1 1 0-1.74zM15.5 7.13a.87.87 0 1 1 0 1.75h-7a.87.87 0 1 1 0-1.76z" />
        <path fillRule="evenodd" d="M15.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v3.87q.02.66-.08 1.2a3 3 0 0 1-.36.87c-.2.33-.48.6-.79.9l-4.13 4.13c-.3.31-.57.59-.9.79a3 3 0 0 1-.87.36c-.37.09-.75.08-1.2.08H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 16.43 3 15.2V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 3 8.8 3zM8.8 5c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 5 8.8v6.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04H12v-2.8q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03H19V8.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C16.64 5 16.06 5 15.2 5zm7.4 9c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v2.38l.23-.22 4.13-4.13.22-.23z" clipRule="evenodd" />
    </IconBase>
  ))
);

NoteTextBold.displayName = 'NoteTextBold';

// Triple export pattern (lucide-react style)
export { NoteTextBold, NoteTextBold as NoteTextBoldIcon, NoteTextBold as SiNoteTextBold };
export default NoteTextBold;
export type { NoteTextBoldProps };
