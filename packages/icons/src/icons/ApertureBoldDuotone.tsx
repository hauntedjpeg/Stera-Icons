import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ApertureBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ApertureBoldDuotone = memo(
  forwardRef<SVGSVGElement, ApertureBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="m9.85 8.45.09-.05.05-.03 5.86-3.38q.96.53 1.75 1.3L14 8.35v.01l.07.04h.03l.01.02h.02l5.87 3.4V12q0 1.03-.25 2l-3.6-2.09v6.93q-.93.57-2 .87v-4.16h-.01l-.07.04-.05.04L8.15 19q-.96-.53-1.75-1.3l3.6-2.08-.03-.01-.05-.03H9.9v-.01l-.03-.02h-.01l-.01-.01L4 12.18V12q0-1.04.25-2l3.6 2.09V5.16q.93-.57 2-.87zm1.9 1.41-.2.04h-.04l-.18.06q-.03 0-.06.02l-.17.07-.14.07h-.02l-.02.02q-.17.1-.32.23l-.12.1q-.2.21-.34.45l-.01.02q-.12.22-.19.44v.03q-.09.26-.09.55v.19l.01.06.01.1.02.09.05.22.07.18q0 .04.03.08l.08.17.12.18q.1.15.24.29l.1.09.2.16.1.07.05.02.12.07.03.01.23.1.15.04.13.03q.2.04.41.04h.15l.2-.03q.09 0 .19-.04h.02l.03-.01.1-.03.14-.06.1-.04.1-.06.04-.02.18-.11.06-.05.09-.07.09-.08.05-.05.05-.05q.15-.16.26-.36l.01-.01.07-.13q.1-.2.16-.43v-.05l.04-.2.02-.26v-.14q-.01-.21-.07-.41-.04-.18-.12-.34l-.04-.08-.07-.14-.07-.11-.16-.2-.01-.02-.09-.09q-.19-.18-.4-.32l-.05-.02-.13-.07-.2-.08-.22-.08-.3-.05h-.11L12 9.84z" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureBoldDuotone.displayName = 'ApertureBoldDuotone';

// Triple export pattern
export { ApertureBoldDuotone, ApertureBoldDuotone as ApertureBoldDuotoneIcon, ApertureBoldDuotone as SiApertureBoldDuotone };
export default ApertureBoldDuotone;
export type { ApertureBoldDuotoneProps };
