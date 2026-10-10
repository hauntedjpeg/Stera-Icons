import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AngleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AngleBoldDuotone = memo(
  forwardRef<SVGSVGElement, AngleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.43 14.9c.54-.12 1.07.22 1.2.76.12.55-.22 1.08-.76 1.2-.53.13-1.07-.21-1.2-.75-.12-.55.22-1.08.76-1.2M18.18 12.02c.5-.24 1.1-.03 1.33.46v.02c.25.5.04 1.09-.46 1.33s-1.1.03-1.33-.47c-.25-.5-.04-1.1.46-1.34M16.32 9.49c.43-.35 1.06-.28 1.4.15l.01.01c.35.43.27 1.06-.16 1.4-.43.35-1.06.28-1.4-.15-.35-.44-.28-1.07.15-1.41M13.94 7.43c.35-.43.98-.5 1.4-.16h.02c.43.35.5.98.15 1.41s-.97.5-1.4.16c-.44-.35-.51-.98-.17-1.41M11.17 5.95c.24-.5.84-.7 1.33-.47h.02c.5.25.7.84.46 1.34s-.84.7-1.33.47h-.01c-.5-.25-.71-.85-.47-1.34M8.14 5.13c.12-.54.65-.88 1.2-.76.54.13.88.66.76 1.2-.13.54-.66.88-1.2.75h-.01c-.54-.12-.88-.66-.75-1.2" opacity={0.4} />
        <path d="M6 4c.55 0 1 .45 1 1v13h13c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

AngleBoldDuotone.displayName = 'AngleBoldDuotone';

// Triple export pattern
export { AngleBoldDuotone, AngleBoldDuotone as AngleBoldDuotoneIcon, AngleBoldDuotone as SiAngleBoldDuotone };
export default AngleBoldDuotone;
export type { AngleBoldDuotoneProps };
