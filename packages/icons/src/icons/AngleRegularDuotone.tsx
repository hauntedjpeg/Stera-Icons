import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AngleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AngleRegularDuotone = memo(
  forwardRef<SVGSVGElement, AngleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.48 15.15c.4-.1.81.16.9.56v.01c.1.4-.16.8-.56.9s-.8-.16-.9-.57.16-.81.56-.9M18.29 12.24c.37-.18.82-.02 1 .35v.01c.18.38.03.82-.35 1-.37.18-.82.03-1-.35s-.02-.83.35-1M16.47 9.68c.33-.26.8-.2 1.06.12.26.33.21.8-.11 1.06-.33.26-.8.2-1.06-.12-.26-.33-.2-.8.11-1.06M14.14 7.58c.26-.32.73-.37 1.05-.12l.01.01c.32.26.38.73.12 1.06-.26.32-.73.37-1.06.11s-.38-.73-.12-1.06M11.4 6.06c.18-.38.62-.53 1-.35s.54.63.36 1-.63.53-1 .35h-.01c-.38-.18-.53-.63-.35-1M8.38 5.18c.1-.4.5-.66.9-.56s.67.5.57.9c-.09.4-.5.65-.9.56-.4-.1-.66-.5-.57-.9" opacity={0.4} />
        <path d="M6 4.25c.41 0 .75.34.75.75v13.25H20c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.41 0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AngleRegularDuotone.displayName = 'AngleRegularDuotone';

// Triple export pattern
export { AngleRegularDuotone, AngleRegularDuotone as AngleRegularDuotoneIcon, AngleRegularDuotone as SiAngleRegularDuotone };
export default AngleRegularDuotone;
export type { AngleRegularDuotoneProps };
