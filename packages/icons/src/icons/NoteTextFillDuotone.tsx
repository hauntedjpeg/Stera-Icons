import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NoteTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const NoteTextFillDuotone = memo(
  forwardRef<SVGSVGElement, NoteTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.2 4.88c.85 0 1.44 0 1.9.03.45.04.69.1.86.2q.61.32.93.93c.1.17.16.41.2.86.03.46.04 1.05.04 1.9v3.32H16.2q-.82-.01-1.38.04-.6.03-1.13.28-.83.42-1.25 1.25-.25.54-.28 1.13-.05.55-.04 1.38v2.93H8.8c-.85 0-1.44 0-1.9-.04s-.69-.1-.86-.2q-.62-.32-.93-.93a2 2 0 0 1-.2-.86c-.03-.46-.04-1.05-.04-1.9V8.8c0-.85 0-1.44.04-1.9s.1-.69.2-.86q.32-.62.93-.93c.17-.1.41-.16.86-.2.46-.03 1.05-.04 1.9-.04zm-6.7 5.25a.88.88 0 0 0 0 1.74H11a.88.88 0 0 0 0-1.74zm0-3a.87.87 0 1 0 0 1.75h7a.88.88 0 0 0 0-1.76z" clipRule="evenodd" opacity={0.4} />
        <path d="m18.87 13.88-.43.44-4.12 4.12c-.24.24-.36.36-.45.43V16.2c0-.57 0-.95.03-1.24.02-.28.06-.4.1-.47q.16-.32.49-.5c.07-.03.19-.07.47-.1l1.24-.02z" opacity={0.4} />
        <path d="M11 10.13a.88.88 0 0 1 0 1.74H8.5a.88.88 0 0 1 0-1.74zM15.5 7.13a.88.88 0 0 1 0 1.75h-7a.87.87 0 1 1 0-1.76z" />
        <path fillRule="evenodd" d="M15.2 3.13q1.24-.01 2.04.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v3.87q.02.66-.08 1.17-.11.45-.35.83c-.19.31-.45.57-.77.89l-4.12 4.12c-.32.32-.58.58-.89.77q-.38.24-.83.35c-.35.08-.72.07-1.17.07H8.8q-1.24.01-2.04-.04a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V8.8q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zM8.8 4.88c-.85 0-1.44 0-1.9.03-.45.04-.69.1-.86.2q-.62.32-.93.93c-.1.17-.16.41-.2.86-.03.46-.04 1.05-.04 1.9v6.4c0 .85 0 1.44.04 1.9s.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04h3.32V16.2q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.55-.05 1.38-.04h2.93V8.8c0-.85 0-1.44-.04-1.9s-.1-.69-.2-.86q-.32-.62-.93-.93a2 2 0 0 0-.86-.2c-.46-.03-1.05-.04-1.9-.04zm7.4 9c-.57 0-.95 0-1.24.02-.28.02-.4.06-.47.1q-.32.16-.5.49c-.03.07-.07.19-.1.47l-.02 1.24v2.67c.09-.07.21-.19.45-.43l4.12-4.12c.24-.24.36-.36.43-.45z" clipRule="evenodd" />
    </IconBase>
  ))
);

NoteTextFillDuotone.displayName = 'NoteTextFillDuotone';

// Triple export pattern (lucide-react style)
export { NoteTextFillDuotone, NoteTextFillDuotone as NoteTextFillDuotoneIcon, NoteTextFillDuotone as SiNoteTextFillDuotone };
export default NoteTextFillDuotone;
export type { NoteTextFillDuotoneProps };
