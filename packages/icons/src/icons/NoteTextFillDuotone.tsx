import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NoteTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const NoteTextFillDuotone = memo(
  forwardRef<SVGSVGElement, NoteTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="note-text-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M13.6 4.88c1.13 0 1.93 0 2.56.05.6.05.98.14 1.26.29q.9.46 1.36 1.36c.15.28.24.65.3 1.26.04.63.05 1.43.05 2.56v1.72H16.2q-.82-.01-1.38.04-.6.03-1.13.28-.83.42-1.25 1.25-.25.54-.28 1.13-.05.55-.04 1.38v2.93H10.4c-1.13 0-1.93 0-2.56-.06a3 3 0 0 1-1.26-.29 3 3 0 0 1-1.36-1.36 3 3 0 0 1-.3-1.26 35 35 0 0 1-.04-2.56v-3.2c0-1.13 0-1.93.05-2.56.05-.6.14-.98.29-1.26q.46-.9 1.36-1.36c.28-.15.65-.24 1.26-.3a35 35 0 0 1 2.56-.04zm-5.1 5.25a.88.88 0 0 0 0 1.74H11a.88.88 0 0 0 0-1.74zm0-3a.87.87 0 1 0 0 1.75h7a.88.88 0 0 0 0-1.76z" clipRule="evenodd" opacity={0.4} />
        <path d="m18.87 13.88-.43.44-4.12 4.12c-.24.24-.36.36-.45.43V16.2c0-.57 0-.95.03-1.24.02-.28.06-.4.1-.47q.16-.32.49-.5c.07-.03.19-.07.47-.1l1.24-.02z" opacity={0.4} />
        <path d="M11 10.13a.88.88 0 0 1 0 1.74H8.5a.88.88 0 0 1 0-1.74zM15.5 7.13a.88.88 0 0 1 0 1.75h-7a.87.87 0 1 1 0-1.76z" />
        <path fillRule="evenodd" d="M13.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v2.27c0 .45.01.82-.07 1.17q-.11.45-.35.83c-.19.31-.45.57-.77.89l-4.12 4.12c-.32.32-.58.58-.89.77q-.38.24-.83.35c-.35.08-.72.07-1.17.07H10.4q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7v-3.2q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-3.2 1.75c-1.13 0-1.93 0-2.56.05-.6.05-.98.14-1.26.29q-.9.46-1.36 1.36c-.15.28-.24.65-.3 1.26a35 35 0 0 0-.04 2.56v3.2c0 1.13 0 1.93.05 2.56.05.6.14.98.29 1.26q.46.9 1.36 1.36c.28.15.65.24 1.26.3.63.04 1.43.05 2.56.05h1.72V16.2q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.55-.05 1.38-.04h2.93V10.4c0-1.13 0-1.93-.06-2.56a3 3 0 0 0-.29-1.26 3 3 0 0 0-1.36-1.36 3 3 0 0 0-1.26-.3 35 35 0 0 0-2.56-.04zm5.8 9c-.57 0-.95 0-1.24.02-.28.02-.4.06-.47.1q-.32.16-.5.49c-.03.07-.07.19-.1.47l-.02 1.24v2.67c.09-.07.21-.19.45-.43l4.12-4.12c.24-.24.36-.36.43-.45z" clipRule="evenodd" />
    </IconBase>
  ))
);

NoteTextFillDuotone.displayName = 'NoteTextFillDuotone';

// Triple export pattern (lucide-react style)
export { NoteTextFillDuotone, NoteTextFillDuotone as NoteTextFillDuotoneIcon, NoteTextFillDuotone as SiNoteTextFillDuotone };
export default NoteTextFillDuotone;
export type { NoteTextFillDuotoneProps };
