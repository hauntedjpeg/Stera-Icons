import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ApertureBoldProps = Omit<IconBaseProps, 'children'>;

const ApertureBold = memo(
  forwardRef<SVGSVGElement, ApertureBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c2.42 0 4.63.86 6.36 2.29C20.58 6.12 22 8.89 22 12q0 .84-.14 1.65c-.59 3.57-3.06 6.49-6.36 7.72q-1.65.61-3.5.63c-2.42 0-4.63-.86-6.36-2.29C3.42 17.88 2 15.11 2 12q0-.84.14-1.65C2.73 6.78 5.2 3.86 8.5 2.63Q10.15 2.02 12 2m2.15 13.55-.07.04-.03.02h-.02v.02L8.14 19c1.14.63 2.45.99 3.85.99q1.13 0 2.15-.3zm2-3.55v6.84c1.76-1.07 3.07-2.8 3.6-4.85l-3.6-2.08zM4 12.18c.05 2.16.96 4.12 2.4 5.53l3.6-2.08h-.02l-.06-.04H9.9l-.04-.04h-.02zm7.75-2.32-.2.04h-.04l-.18.06-.05.02-.18.07-.14.07-.03.01-.02.02q-.24.14-.43.33l-.1.1-.17.23-.08.13-.11.23-.09.24-.01.06-.03.11-.02.17-.02.2v.18l.01.1.01.08v.03l.07.28.07.18.11.25.05.07.04.07q.07.12.18.23l.09.1.09.08.12.1.16.12.04.02.16.09.03.01.1.04.14.06h.03l.05.02.06.02.05.01q.16.05.34.05H12q.16 0 .33-.02.11 0 .23-.04.25-.07.48-.2h.02l.07-.05.17-.12q.13-.09.24-.21l.05-.05.07-.09.14-.18.05-.09.05-.08q.13-.24.19-.49.04-.22.06-.46v-.19l-.01-.08-.06-.33-.05-.17q-.05-.15-.14-.3l-.04-.09-.06-.08q-.1-.18-.26-.34l-.15-.13-.16-.12-.1-.07-.1-.05-.07-.04-.07-.03-.07-.03-.3-.1q-.18-.04-.4-.06h-.12zm-3.9-4.7c-1.76 1.07-3.08 2.8-3.6 4.85l3.6 2.08V5.16M14 8.36l.08.05h.02l.05.04L20 11.82c-.05-2.17-.96-4.12-2.4-5.53zM12 4q-1.13 0-2.15.3v4.15l.09-.05.05-.03 5.86-3.38C14.7 4.36 13.4 4 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureBold.displayName = 'ApertureBold';

// Triple export pattern
export { ApertureBold, ApertureBold as ApertureBoldIcon, ApertureBold as SiApertureBold };
export default ApertureBold;
export type { ApertureBoldProps };
