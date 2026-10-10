import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomOrbitRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtomOrbitRegularDuotone = memo(
  forwardRef<SVGSVGElement, AtomOrbitRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.57 18.87c.34-.23.81-.13 1.04.21.23.35.13.81-.21 1.04q-.7.47-1.47.8-1.57.69-3.2.8h-.02l-.25.02h-.31l-.15.01h-.35l-.11-.01-.25-.02h-.02q-1.55-.1-3.04-.73-.85-.36-1.63-.87c-.34-.23-.44-.7-.2-1.04.22-.34.69-.44 1.03-.2l.44.26q.24.15.48.26c1.25.61 2.64.9 4.03.84q1.59-.08 3.04-.73.36-.16.7-.36zM7.67 3.26c.37-.18.82-.03 1 .34s.03.82-.34 1l-.45.25-.44.28c-1.1.72-2 1.7-2.64 2.84q-.77 1.4-.98 2.97-.07.52-.07 1.06l.01.52c.03.41-.28.77-.7.8-.41.02-.77-.3-.8-.7q-.04-1.02.09-2 .22-1.5.85-2.81 0-.04.03-.08l.1-.2.06-.1.1-.18.06-.12.08-.13.1-.18.06-.08c.7-1.1 1.64-2.08 2.79-2.84q.5-.35 1.09-.64M15.33 3.6c.18-.37.63-.52 1-.34q.67.35 1.29.77c1.14.8 2.07 1.82 2.75 2.97l.08.13.06.1.1.2.04.08q.75 1.44 1 3.1.15 1 .08 2c-.02.42-.38.73-.8.7-.4-.02-.72-.38-.7-.79q.02-.25.02-.51V12q0-.4-.04-.79-.16-1.72-1.01-3.25c-.65-1.15-1.57-2.13-2.67-2.85l-.4-.25-.01-.01-.45-.24c-.37-.19-.53-.64-.34-1" opacity={0.4} />
        <path d="M3.46 15.2c.71-.41 1.63-.17 2.05.55s.16 1.63-.55 2.05-1.64.17-2.05-.55c-.42-.72-.17-1.64.55-2.05M18.5 15.75c.4-.72 1.33-.96 2.04-.55.72.41.97 1.33.55 2.05s-1.33.96-2.05.55-.96-1.33-.55-2.05" />
        <path fillRule="evenodd" d="M12 7.75c2.35 0 4.25 1.9 4.25 4.25s-1.9 4.25-4.25 4.25-4.25-1.9-4.25-4.25S9.65 7.75 12 7.75m0 1.5c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75S13.52 9.25 12 9.25" clipRule="evenodd" />
        <path d="M12 1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

AtomOrbitRegularDuotone.displayName = 'AtomOrbitRegularDuotone';

// Triple export pattern
export { AtomOrbitRegularDuotone, AtomOrbitRegularDuotone as AtomOrbitRegularDuotoneIcon, AtomOrbitRegularDuotone as SiAtomOrbitRegularDuotone };
export default AtomOrbitRegularDuotone;
export type { AtomOrbitRegularDuotoneProps };
