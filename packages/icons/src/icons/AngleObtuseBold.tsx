import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AngleObtuseBoldProps = Omit<IconBaseProps, 'children'>;

const AngleObtuseBold = memo(
  forwardRef<SVGSVGElement, AngleObtuseBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.33 13.92c.54-.14 1.09.18 1.23.7v.02c.14.53-.17 1.08-.7 1.22-.54.15-1.09-.17-1.23-.7v-.01c-.15-.54.17-1.09.7-1.23M19.9 11.13c.47-.28 1.08-.11 1.36.36v.01c.28.48.12 1.1-.36 1.37-.48.28-1.1.11-1.37-.37-.28-.48-.12-1.1.36-1.37M17.77 8.8c.4-.39 1.03-.39 1.42 0v.01c.4.4.4 1.03 0 1.42-.39.39-1.02.39-1.4 0l-.02-.01c-.39-.4-.39-1.02 0-1.42M15.13 7.1c.28-.48.89-.64 1.37-.36s.65.9.37 1.37-.89.64-1.37.36-.65-.89-.37-1.37M3.92 6.5c.5-.25 1.1-.07 1.36.42s.07 1.1-.42 1.35c-.5.26-1.1.08-1.36-.4-.26-.5-.07-1.1.42-1.36M12.14 6.15c.14-.54.69-.85 1.22-.71h.01c.53.14.85.7.7 1.23-.13.53-.68.85-1.22.7-.54-.14-.86-.69-.71-1.22M6.87 5.38c.54-.13 1.08.2 1.21.73.14.54-.19 1.08-.73 1.21-.54.14-1.08-.2-1.22-.73s.2-1.08.73-1.2zM10 5c.56 0 1 .45 1 1s-.44 1-1 1-1-.45-1-1 .44-1 1-1M1.34 8.3c.4-.36 1.04-.33 1.4.09l7.7 8.61H22c.55 0 1 .45 1 1s-.45 1-1 1H10c-.28 0-.56-.12-.75-.33l-8-8.95C.9 9.3.94 8.68 1.35 8.3" />
    </IconBase>
  ))
);

AngleObtuseBold.displayName = 'AngleObtuseBold';

// Triple export pattern
export { AngleObtuseBold, AngleObtuseBold as AngleObtuseBoldIcon, AngleObtuseBold as SiAngleObtuseBold };
export default AngleObtuseBold;
export type { AngleObtuseBoldProps };
