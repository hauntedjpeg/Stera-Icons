import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AngleAcuteBoldProps = Omit<IconBaseProps, 'children'>;

const AngleAcuteBold = memo(
  forwardRef<SVGSVGElement, AngleAcuteBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.13 4.57c.28-.48.9-.64 1.37-.36.48.27.64.88.37 1.36L5.73 17.93H20c.55 0 1 .45 1 1s-.45 1-1 1H4c-.36 0-.69-.2-.87-.5-.17-.31-.17-.7 0-1z" />
        <path d="M19.59 15.16c.54-.1 1.06.27 1.15.81v.01c.1.55-.26 1.06-.8 1.16-.55.1-1.07-.27-1.16-.81v-.01c-.1-.55.26-1.06.8-1.16M18.7 12.51c.51-.19 1.09.08 1.28.6.19.53-.08 1.1-.6 1.29s-1.09-.08-1.28-.6c-.2-.52.08-1.1.6-1.29M17.36 10.06c.47-.28 1.09-.11 1.36.36v.01c.28.48.12 1.1-.36 1.37s-1.09.11-1.36-.37c-.29-.48-.12-1.1.36-1.37M15.61 7.88c.42-.36 1.05-.3 1.41.12l.07.09c.28.42.2 1-.19 1.32-.42.36-1.05.3-1.4-.12h-.01c-.36-.43-.3-1.06.12-1.41M13.51 6.03c.34-.4.91-.47 1.33-.19l.1.07c.41.35.47.99.11 1.4-.35.43-.98.49-1.4.13h-.01c-.43-.36-.48-1-.13-1.41" />
    </IconBase>
  ))
);

AngleAcuteBold.displayName = 'AngleAcuteBold';

// Triple export pattern
export { AngleAcuteBold, AngleAcuteBold as AngleAcuteBoldIcon, AngleAcuteBold as SiAngleAcuteBold };
export default AngleAcuteBold;
export type { AngleAcuteBoldProps };
