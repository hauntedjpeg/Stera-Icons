import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleDashedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleDashedBoldDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleDashedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.56 19.85c.54-.11 1.07.24 1.18.78.1.55-.25 1.07-.79 1.18Q13 22 12 22t-1.95-.19c-.54-.1-.9-.63-.79-1.18s.64-.89 1.18-.78q.75.15 1.56.15t1.56-.15M3.96 16.17c.46-.3 1.08-.18 1.39.27q.88 1.33 2.2 2.21c.46.31.59.93.28 1.39s-.93.58-1.39.28Q4.8 19.2 3.68 17.56c-.3-.46-.18-1.08.28-1.39M18.65 16.44c.31-.45.93-.58 1.39-.27s.58.93.28 1.39q-1.11 1.65-2.76 2.76c-.46.3-1.08.18-1.39-.28s-.18-1.08.27-1.39q1.33-.88 2.21-2.2M2.19 10.05c.1-.54.63-.9 1.18-.79s.89.64.78 1.18Q4 11.19 4 12t.15 1.56c.1.54-.24 1.07-.78 1.18-.55.1-1.07-.25-1.18-.79Q2.01 13 2 12q0-1 .19-1.95M20.63 9.26c.55-.1 1.07.25 1.18.79Q22 11 22 12t-.19 1.95c-.1.54-.63.9-1.18.79s-.89-.64-.78-1.18Q20 12.81 20 12t-.15-1.56c-.11-.54.24-1.07.78-1.18M6.44 3.68c.46-.3 1.08-.18 1.39.28s.18 1.08-.27 1.39q-1.33.88-2.21 2.2c-.31.46-.93.59-1.39.28s-.58-.93-.28-1.39Q4.8 4.8 6.44 3.68M16.17 3.96c.3-.46.93-.58 1.39-.28q1.65 1.11 2.76 2.76c.3.46.18 1.08-.28 1.39s-1.08.18-1.39-.27q-.88-1.33-2.2-2.21c-.46-.31-.59-.93-.28-1.39M12 2q1 0 1.95.19c.54.1.9.63.79 1.18s-.64.89-1.18.78Q12.81 4 12 4t-1.56.15c-.54.1-1.07-.24-1.18-.78-.1-.55.25-1.07.79-1.18Q11 2.01 12 2" opacity={0.4} />
        <path fillRule="evenodd" d="M12 6.5c2.54 0 4.6 2.06 4.6 4.6 0 1.28-.52 2.43-1.36 3.26 1.25.54 2.33 1.38 3.17 2.43q-.61.82-1.4 1.45C15.86 16.7 14.04 15.7 12 15.7s-3.88 1-5 2.54q-.8-.64-1.41-1.45c.84-1.05 1.92-1.89 3.17-2.43-.84-.83-1.36-1.98-1.36-3.26 0-2.54 2.06-4.6 4.6-4.6m0 2c-1.44 0-2.6 1.16-2.6 2.6 0 1.35 1.02 2.45 2.33 2.59l.27.01.27-.01c1.3-.14 2.33-1.24 2.33-2.59 0-1.44-1.16-2.6-2.6-2.6" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleDashedBoldDuotone.displayName = 'UserCircleDashedBoldDuotone';

// Triple export pattern
export { UserCircleDashedBoldDuotone, UserCircleDashedBoldDuotone as UserCircleDashedBoldDuotoneIcon, UserCircleDashedBoldDuotone as SiUserCircleDashedBoldDuotone };
export default UserCircleDashedBoldDuotone;
export type { UserCircleDashedBoldDuotoneProps };
