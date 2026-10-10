import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MedalBoldProps = Omit<IconBaseProps, 'children'>;

const MedalBold = memo(
  forwardRef<SVGSVGElement, MedalBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.8 1q.81 0 1.4.03c.39.03.78.1 1.16.3q.87.44 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v1.82c0 .65.01 1.2-.16 1.72q-.23.63-.7 1.12c-.38.4-.88.63-1.46.92l-2.99 1.5C17.1 13.36 18 15.07 18 17c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-1.92.9-3.63 2.3-4.73l-2.98-1.5c-.58-.28-1.08-.52-1.46-.9q-.47-.48-.7-1.13C3 8.23 3 7.67 3 7.02V5.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16.28-.57.74-1.03 1.3-1.31.39-.2.78-.27 1.17-.3Q6.4.99 7.2 1zM12 13q-.65 0-1.22.19C9.17 13.71 8 15.22 8 17c0 2.2 1.8 4 4 4s4-1.8 4-4c0-1.78-1.17-3.3-2.78-3.81Q12.64 13 12 13m-3-2.62 1.58.79.32-.07.06-.01.28-.04h.05l.3-.04h.1L12 11h.31l.1.01.3.03h.04l.29.05.06.01.31.07h.01l1.58-.79V3H9zM7 3c-.47 0-.78 0-1.03.02-.27.03-.37.06-.42.09q-.3.15-.44.44c-.03.05-.06.15-.09.42C5 4.25 5 4.62 5 5.2v1.82c0 .8.01.95.05 1.07q.08.22.23.37c.1.1.23.18.94.53l.78.4zm10 6.38.78-.39c.71-.35.85-.44.93-.53q.16-.15.23-.37c.05-.12.06-.28.06-1.07V5.2c0-.58 0-.95-.02-1.23-.03-.27-.06-.37-.09-.42q-.15-.3-.44-.44c-.05-.03-.15-.06-.42-.09Q17.67 3 17 3z" clipRule="evenodd" />
    </IconBase>
  ))
);

MedalBold.displayName = 'MedalBold';

// Triple export pattern
export { MedalBold, MedalBold as MedalBoldIcon, MedalBold as SiMedalBold };
export default MedalBold;
export type { MedalBoldProps };
