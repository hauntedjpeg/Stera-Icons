import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UmbrellaFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UmbrellaFillDuotone = memo(
  forwardRef<SVGSVGElement, UmbrellaFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 12.78q.36 0 .78.07V19c0 .95.77 1.72 1.72 1.72s1.72-.77 1.72-1.72v-.5c0-.43.35-.78.78-.78s.78.35.78.78v.5c0 1.8-1.47 3.28-3.28 3.28S11.22 20.8 11.22 19v-6.15q.41-.07.78-.07" />
        <path d="M12 1.72c.43 0 .78.35.78.78v1.26c5.03.4 9 4.6 9 9.74 0 .34-.23.65-.56.74-.33.1-.68-.03-.87-.32-.43-.65-1.3-1.14-2.35-1.14-.51 0-.84.11-1.08.28q-.38.25-.77.86c-.14.22-.39.36-.65.36q-.4-.01-.65-.36c-.17-.26-.56-.55-1.13-.79s-1.18-.35-1.72-.35-1.16.12-1.72.35q-.87.38-1.13.8c-.14.21-.39.35-.65.35q-.4-.01-.65-.36c-.27-.41-.5-.69-.77-.86-.24-.17-.57-.28-1.08-.28-1.06 0-1.92.5-2.35 1.14-.19.3-.54.42-.87.32s-.56-.4-.56-.74c0-5.14 3.97-9.35 9-9.74V2.5c0-.43.35-.78.78-.78" opacity={.4} />
    </IconBase>
  ))
);

UmbrellaFillDuotone.displayName = 'UmbrellaFillDuotone';

// Triple export pattern
export { UmbrellaFillDuotone, UmbrellaFillDuotone as UmbrellaFillDuotoneIcon, UmbrellaFillDuotone as SiUmbrellaFillDuotone };
export default UmbrellaFillDuotone;
export type { UmbrellaFillDuotoneProps };
