import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomOrbitBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtomOrbitBoldDuotone = memo(
  forwardRef<SVGSVGElement, AtomOrbitBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.43 18.66c.46-.3 1.08-.18 1.39.28s.18 1.08-.28 1.39q-.87.57-1.82.95-1.76.7-3.58.72h-.28c-1.3-.02-2.63-.3-3.89-.85q-.79-.34-1.5-.82c-.47-.3-.6-.93-.29-1.39.3-.46.93-.58 1.39-.28q.21.15.42.26H8q.39.24.78.4c1.2.53 2.52.76 3.84.66q1.28-.1 2.47-.6.46-.2.91-.45h.01zM7.56 3.04c.49-.25 1.09-.04 1.34.45.24.5.04 1.1-.45 1.34l-.43.23-.02.01-.22.13-.04.03-.37.24Q5.8 6.6 4.9 8.33q-.55 1.08-.77 2.26Q4 11.28 4 12v.02l.01.49c.04.55-.38 1.02-.93 1.06-.55.03-1.03-.39-1.06-.94q-.06-.9.05-1.77.24-2.03 1.2-3.74l.07-.13.07-.1.12-.2.04-.08q1-1.57 2.58-2.72.66-.48 1.4-.85M15.1 3.49c.25-.5.85-.7 1.35-.45q.56.28 1.1.64c1.18.79 2.14 1.8 2.87 2.93l.05.07.1.16.1.18.05.1.11.19.05.09q.88 1.68 1.08 3.66.07.79.02 1.57c-.03.55-.5.97-1.06.94-.55-.04-.97-.51-.93-1.06L20 12V12q0-.39-.04-.76-.15-1.54-.85-2.9c-.64-1.24-1.58-2.28-2.74-3.04L16 5.07l-.02-.01-.42-.23c-.5-.25-.7-.85-.45-1.34" opacity={0.4} />
        <path d="M3.46 15.2c.71-.41 1.63-.17 2.05.55s.16 1.63-.55 2.05-1.64.17-2.05-.55c-.42-.72-.17-1.64.55-2.05M18.5 15.75c.4-.72 1.33-.96 2.04-.55.72.41.97 1.33.55 2.05s-1.33.96-2.05.55-.96-1.33-.55-2.05" />
        <path fillRule="evenodd" d="M12 7.5c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5m0 2c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5" clipRule="evenodd" />
        <path d="M12 1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

AtomOrbitBoldDuotone.displayName = 'AtomOrbitBoldDuotone';

// Triple export pattern
export { AtomOrbitBoldDuotone, AtomOrbitBoldDuotone as AtomOrbitBoldDuotoneIcon, AtomOrbitBoldDuotone as SiAtomOrbitBoldDuotone };
export default AtomOrbitBoldDuotone;
export type { AtomOrbitBoldDuotoneProps };
