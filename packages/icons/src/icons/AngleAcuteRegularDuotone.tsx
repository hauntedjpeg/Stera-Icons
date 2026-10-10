import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AngleAcuteRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AngleAcuteRegularDuotone = memo(
  forwardRef<SVGSVGElement, AngleAcuteRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.63 15.4c.4-.06.8.2.87.62.07.41-.2.8-.61.87s-.8-.2-.87-.6v-.01c-.07-.41.2-.8.6-.87M18.78 12.75c.39-.15.82.06.96.44v.01c.15.4-.05.82-.44.96-.4.15-.82-.06-.96-.44v-.01c-.15-.4.05-.82.44-.96M17.48 10.28c.36-.21.82-.09 1.02.27.22.37.1.82-.26 1.03-.36.2-.82.09-1.03-.27v-.01c-.21-.36-.09-.82.27-1.02M15.77 8.07c.32-.27.8-.23 1.06.09.27.32.23.8-.09 1.06-.32.27-.79.23-1.05-.09h-.01c-.27-.32-.23-.8.1-1.06M13.7 6.19c.27-.32.75-.36 1.06-.1v.01c.33.27.37.74.1 1.06-.27.31-.74.36-1.06.09s-.36-.75-.1-1.06" opacity={0.4} />
        <path d="M11.35 4.7c.2-.36.67-.48 1.02-.28.36.21.49.67.28 1.03L5.3 18.18H20c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.27 0-.52-.14-.65-.38s-.13-.51 0-.75z" />
    </IconBase>
  ))
);

AngleAcuteRegularDuotone.displayName = 'AngleAcuteRegularDuotone';

// Triple export pattern
export { AngleAcuteRegularDuotone, AngleAcuteRegularDuotone as AngleAcuteRegularDuotoneIcon, AngleAcuteRegularDuotone as SiAngleAcuteRegularDuotone };
export default AngleAcuteRegularDuotone;
export type { AngleAcuteRegularDuotoneProps };
